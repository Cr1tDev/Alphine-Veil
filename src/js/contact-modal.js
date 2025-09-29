'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get modal elements
  const modalOverlay = document.getElementById('modalOverlay');
  const btnClose = document.querySelector('.close-btn');
  const contactForm = document.getElementById('contactForm');

  // Function to open modal
  function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Function to close modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Wait for modal close animation to complete
    setTimeout(() => {
      // Check if we have a referrer (came from another page)
      const referrer = document.referrer;

      if (referrer && referrer !== window.location.href) {
        // We came from another page, go back
        history.back();
      } else {
        // Check URL parameters for return page
        const urlParams = new URLSearchParams(window.location.search);
        const returnTo = urlParams.get('return') || urlParams.get('from');

        if (returnTo) {
          window.location.href = decodeURIComponent(returnTo);
        } else if (window.history.length > 2) {
          // We have history, try to go back
          history.back();
        } else {
          // No clear origin, go to home page
          window.location.href = '/index.html';
        }
      }
    }, 300); // Wait for modal close animation
  }

  // Close button event listener
  if (btnClose) {
    btnClose.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside
  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Simple validation
    const firstName =
      formData.get('firstName') ||
      event.target.querySelector('input[type="text"]').value;
    const email =
      formData.get('email') ||
      event.target.querySelector('input[type="email"]').value;
    const message =
      formData.get('message') || event.target.querySelector('textarea').value;

    if (!firstName || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form and close modal
    event.target.reset();

    // Close modal after a short delay
    setTimeout(() => {
      closeModal();
    }, 500);
  }

  // Attach form submit handler
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }

  // Auto-open modal when page loads
  setTimeout(() => {
    openModal();
  }, 300);

  // Make functions globally available if needed
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.handleSubmit = handleSubmit;
});
