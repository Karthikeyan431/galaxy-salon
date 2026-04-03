// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeWorksModal();
  }
});

// Our Works Modal functions
function openWorksModal() {
  const modal = document.getElementById('worksModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeWorksModal(event) {
  if (event && event.target !== document.getElementById('worksModal')) {
    return;
  }
  const modal = document.getElementById('worksModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Instagram video redirect function
function openInstagram(videoUrl) {
  // Open the Instagram video URL in a new tab
  window.open(videoUrl, '_blank');
}

// Prefetch portfolio page on hover for faster navigation
document.addEventListener('DOMContentLoaded', function() {
  const portfolioLink = document.querySelector('a[href="portfolio.html"]');
  if (portfolioLink) {
    portfolioLink.addEventListener('mouseenter', function() {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = 'portfolio.html';
      document.head.appendChild(link);
    });
  }
});

// Page loader hide logic
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (!loader) return;

  loader.classList.add('loaded');

  setTimeout(function () {
    if (loader && loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  }, 550);

  document.body.style.overflow = 'auto';
});