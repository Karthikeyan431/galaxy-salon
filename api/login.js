// Vercel serverless function for admin login
// POST /api/login - Authenticate admin

const fs = require('fs');
const path = require('path');

const AUTH_FILE = path.join(__dirname, 'data', 'auth.json');

// Simple hash function (for demo - use bcrypt in production)
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
}

function getAuth() {
  try {
    const data = fs.readFileSync(AUTH_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return { admin: { passwordHash: '' } };
  }
}

module.exports = (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const { password } = JSON.parse(body);
      
      if (!password) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Password required' }));
        return;
      }

      const auth = getAuth();
      
      // Default password: galaxy2026
      // In production, use proper password hashing with bcrypt
      if (password === 'galaxy2026' || simpleHash(password) === simpleHash('galaxy2026')) {
        // Generate simple token
        const token = Buffer.from(`${auth.admin.username}:${Date.now()}`).toString('base64');
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          success: true, 
          token: token,
          expiresIn: 86400 // 24 hours
        }));
        return;
      }

      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid password' }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid request' }));
    }
  });
};