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

// Page loader hide logic + Audio play on loader hide
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  const audio = document.getElementById('welcomeAudio');
  
  if (!loader) return;

  // Show loader for 1 second, then hide
  setTimeout(function () {
    loader.classList.add('loaded'); // Triggers 0.4s CSS fade transition

    // Wait for fade animation to complete (0.4s) + small buffer (0.6s) before removing DOM and playing audio
    setTimeout(function () {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
      
      // Ensure audio plays cleanly without cutoff
      if (audio) {
        audio.muted = false;
        audio.currentTime = 0; // Reset to start
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.then(function() {
            console.log("Audio autoplay with sound success");
          }).catch(function(error) {
            console.log("Autoplay blocked, waiting for user interaction:", error);
            
            // Fallback: play on first user interaction
            const playOnInteraction = function() {
              audio.muted = false;
              audio.currentTime = 0;
              audio.play().catch(err => console.log("Playback error:", err));
              document.removeEventListener("click", playOnInteraction);
              document.removeEventListener("touchstart", playOnInteraction);
            };
            
            document.addEventListener("click", playOnInteraction, { once: true });
            document.addEventListener("touchstart", playOnInteraction, { once: true });
          });
        }
      }
    }, 1000); // CSS fade (0.4s) + buffer time to ensure clean removal and audio startup

  }, 1000); // loader display duration

  document.body.style.overflow = 'auto';
});
