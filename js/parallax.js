// JavaScript parallax effect - simulates background-attachment: fixed
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const parallaxElement = document.querySelector('.parallax');
  const parallaxSection = document.querySelector('.parallax-section');

  if (parallaxElement && parallaxSection) {
    const rect = parallaxSection.getBoundingClientRect();
    const sectionTop = parallaxSection.offsetTop;
    const sectionHeight = parallaxSection.offsetHeight;
    const windowHeight = window.innerHeight;

    // Check if section is in viewport
    const isInView = rect.bottom >= 0 && rect.top <= windowHeight;

    if (isInView) {
      // Calculate the scroll position relative to when the section starts being visible
      const relativeScrolled = scrolled - sectionTop + windowHeight;

      // Move background slower than scroll to create parallax effect
      // Negative value makes it move in opposite direction (like background-attachment: fixed)
      const speed = 0.3; // Adjust this value (0.1 - 0.5 works well)
      const yPos = -relativeScrolled * speed;

      parallaxElement.style.transform = `translateY(${yPos}px)`;
    }
  }
});

// Optimize scroll performance with requestAnimationFrame
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallaxElement = document.querySelector('.parallax');
  const parallaxSection = document.querySelector('.parallax-section');

  if (parallaxElement && parallaxSection) {
    const rect = parallaxSection.getBoundingClientRect();
    const sectionTop = parallaxSection.offsetTop;
    const windowHeight = window.innerHeight;

    const isInView = rect.bottom >= 0 && rect.top <= windowHeight;

    if (isInView) {
      const relativeScrolled = scrolled - sectionTop + windowHeight;
      const speed = 0.3;
      const yPos = -relativeScrolled * speed;

      parallaxElement.style.transform = `translateY(${yPos}px)`;
    }
  }

  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener('scroll', requestTick);
