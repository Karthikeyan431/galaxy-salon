// Vercel serverless function for courses management
// GET /api/courses - Public: get all courses
// POST /api/courses - Protected: add new course
// PUT /api/courses - Protected: update course
// DELETE /api/courses - Protected: delete course

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data', 'content.json');

function getContent() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return { courses: [] };
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

  // GET - return courses (public)
  if (req.method === 'GET') {
    const content = getContent();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(content.courses || []));
    return;
  }

  // Protected routes - require auth
  if (!isAuthenticated) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized - Login required' }));
    return;
  }

  // Read body
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const content = getContent();
      const data = JSON.parse(body);
      const courses = content.courses || [];

      if (req.method === 'POST') {
        // Add new course
        const newCourse = {
          id: Date.now(),
          ...data,
          createdAt: new Date().toISOString()
        };
        courses.push(newCourse);
        content.courses = courses;
        saveContent(content);
        
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, course: newCourse }));
        return;
      }

      if (req.method === 'PUT' && data.id) {
        // Update course
        const index = courses.findIndex(c => c.id === data.id);
        if (index !== -1) {
          courses[index] = { ...courses[index], ...data, updatedAt: new Date().toISOString() };
          content.courses = courses;
          saveContent(content);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, course: courses[index] }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Course not found' }));
        }
        return;
      }

      if (req.method === 'DELETE' && data.id) {
        // Delete course
        content.courses = courses.filter(c => c.id !== data.id);
        saveContent(content);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Course deleted' }));
        return;
      }

      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid request' }));
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid request body' }));
    }
  });
};