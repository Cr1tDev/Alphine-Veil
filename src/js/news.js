'use strict';
function toggleLike(heart) {
  heart.classList.toggle('liked');

  // Add a small animation
  heart.style.transform = 'scale(1.3)';
  setTimeout(() => {
    heart.style.transform = 'scale(1)';
  }, 150);
}

// Add hover effects and click interactions
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function (e) {
    // Don't trigger card click if clicking on heart
    if (!e.target.closest('.heart-icon')) {
      console.log(
        'Card clicked:',
        this.querySelector('.card-title').textContent
      );
      // Add your navigation logic here
    }
  });
});

// Simulate view count updates
function updateViewCounts() {
  const viewCounts = document.querySelectorAll('.view-count');
  viewCounts.forEach(count => {
    const currentCount = parseInt(count.textContent);
    if (Math.random() > 0.7) {
      // 30% chance to increment
      count.textContent = currentCount + 1;
    }
  });
}

// Update view counts occasionally
setInterval(updateViewCounts, 10000);
