// Vercel serverless function for content management
// GET /api/content - Public: fetch all content
// POST /api/content - Protected: update content

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data', 'content.json');

function getContent() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return { error: 'Content not found', courses: [], siteInfo: {}, founder: {} };
  }
}

function saveContent(content) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(content, null, 2));
}

module.exports = (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const authHeader = req.headers.authorization;
  const isAuthenticated = authHeader && authHeader.startsWith('Bearer ');

  // GET request - return content (public)
  if (req.method === 'GET') {
    const content = getContent();
    // Remove lastUpdated for public requests (security)
    const publicContent = { ...content };
    delete publicContent.lastUpdated;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(publicContent));
    return;
  }

  // POST/PUT - require auth
  if (!isAuthenticated) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  // Read body
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const newContent = JSON.parse(body);
      const content = getContent();
      
      // Merge updates
      const updated = { ...content, ...newContent, lastUpdated: new Date().toISOString() };
      saveContent(updated);
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Content updated' }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid request body' }));
    }
  });
};