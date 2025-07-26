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
});
