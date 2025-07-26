document.addEventListener('DOMContentLoaded', function () {
  // Add scroll effect to navigation
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function () {
    const navigation = document.querySelector('.navigation');

    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      navigation.style.transform = 'translateY(-100%)';
    } else {
      navigation.style.transform = 'translateY(0)';
    }

    lastScrollY = window.scrollY;
  });

  // Set active class on navigation links based on current page
  const navLinks = document.querySelectorAll('.navigation__link');
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');

  navLinks.forEach(link => {
    // Get the href path (ignore domain)
    const linkPath = link.getAttribute('href');
    if (
      (linkPath === '/index.html' &&
        (currentPath === '/' || currentPath.endsWith('/index.html'))) ||
      (linkPath !== '/index.html' && currentPath.endsWith(linkPath))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
