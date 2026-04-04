// Dynamic content loader script for index.html
// Add this to index.html to enable dynamic content

(function() {
  const API_BASE = '/api';
  const USE_DYNAMIC = true; // Set to false to use static content
  
  if (!USE_DYNAMIC) return;
  
  // Fetch and apply dynamic content
  async function loadDynamicContent() {
    try {
      const res = await fetch(`${API_BASE}/content`);
      const data = await res.json();
      
      // Update site info
      if (data.siteInfo) {
        updateSiteInfo(data.siteInfo);
      }
      
      // Update courses
      if (data.courses && data.courses.length > 0) {
        updateCourses(data.courses);
      }
      
      // Update founder
      if (data.founder) {
        updateFounder(data.founder);
      }
    } catch (err) {
      console.log('Using static content');
    }
  }
  
  function updateSiteInfo(info) {
    // Update document title
    if (info.tagline) {
      document.title = info.tagline;
    }
    
    // Update meta description
    const desc = document.querySelector('meta[name="description"]');
    if (desc && info.description) {
      desc.setAttribute('content', info.description);
    }
    
    // Update phone link
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink && info.phone) {
      phoneLink.setAttribute('href', `tel:${info.phone.replace(/\D/g, '')}`);
      phoneLink.textContent = info.phone;
    }
  }
  
  function updateCourses(courses) {
    const coursesSection = document.getElementById('courses-grid') || document.querySelector('.courses-grid');
    if (!coursesSection) return;
    
    coursesSection.innerHTML = courses.map(course => `
      <div class="new-course-card" style="--card-bg: url('${course.image}')">
        <div class="course-content">
          <div class="course-title">${course.title}</div>
          <div class="course-desc">${course.description}</div>
          <div class="course-meta">
            <span class="course-duration"><i data-lucide="clock"></i> ${course.duration}</span>
            <span class="course-price">${course.price}</span>
          </div>
          <div class="course-level">${course.level}</div>
        </div>
      </div>
    `).join('');
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
  
  function updateFounder(founder) {
    const founderName = document.querySelector('.founder-name');
    const founderDesc = document.querySelector('.founder-desc');
    const founderImg = document.querySelector('.founder-img');
    
    if (founderName && founder.name) {
      founderName.textContent = founder.name;
    }
    if (founderDesc && founder.description) {
      founderDesc.textContent = founder.description;
    }
    if (founderImg && founder.image) {
      founderImg.src = founder.image;
    }
  }
  
  // Initialize
  document.addEventListener('DOMContentLoaded', loadDynamicContent);
})();