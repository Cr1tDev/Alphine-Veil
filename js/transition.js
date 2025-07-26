// Page transition functionality
class PageTransition {
  constructor() {
    this.transitionDuration = 600; // 600ms transition for smoother effect
    this.isTransitioning = false;
    this.init();
  }

  init() {
    // Add transition styles to body
    this.addTransitionStyles();

    // Handle initial page load
    this.handlePageLoad();

    // Intercept navigation links
    this.interceptLinks();

    // Handle browser back/forward buttons
    this.handlePopState();
  }

  addTransitionStyles() {
    // Create and inject CSS for transitions
    const style = document.createElement('style');
    style.textContent = `
      body {
        transition: opacity ${this.transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 1;
      }
      
      body.fade-out {
        opacity: 0;
      }
      
      body.fade-in {
        opacity: 1;
      }
      
      /* Ensure content is hidden during transition */
      body.transitioning {
        pointer-events: none;
        user-select: none;
      }

      /* Loading indicator */
      .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, #ff4444, #ff8888);
        z-index: 9999;
        transform: translateX(-100%);
        transition: transform ${this.transitionDuration}ms ease-out;
      }

      .page-loader.loading {
        transform: translateX(0);
      }
    `;
    document.head.appendChild(style);
  }

  handlePageLoad() {
    // Set initial state and fade in
    document.body.style.opacity = '0';

    // Fade in after a short delay to ensure everything is loaded
    const fadeIn = () => {
      setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.classList.add('fade-in');
      }, 100);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fadeIn);
    } else {
      fadeIn();
    }
  }

  interceptLinks() {
    // Get all internal navigation links - specifically target your navigation
    const selectors = [
      '.navigation__link', // Your navigation links
      'a[href^="/pages/"]', // Page links
      'a[href="../index.html"]', // Back to home links
      'a[href="index.html"]',
      'a[href="./"]',
    ];

    const navLinks = document.querySelectorAll(selectors.join(', '));

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        // Skip if transitioning
        if (this.isTransitioning) {
          e.preventDefault();
          return;
        }

        const href = link.getAttribute('href');

        // Skip anchor links, external links, and javascript links
        if (
          !href ||
          href.startsWith('#') ||
          href.startsWith('http') ||
          href.startsWith('mailto') ||
          href.startsWith('tel') ||
          href.startsWith('javascript:')
        ) {
          return;
        }

        e.preventDefault();
        this.navigateToPage(href);
      });
    });
  }

  handlePopState() {
    window.addEventListener('popstate', e => {
      if (!this.isTransitioning) {
        // Get the current URL and navigate without pushing state
        this.navigateToPage(window.location.href, false);
      }
    });
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    document.body.appendChild(loader);
    return loader;
  }

  async navigateToPage(url, pushState = true) {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    document.body.classList.add('transitioning');

    // Create loading indicator
    const loader = this.createLoader();

    try {
      // Show loader
      setTimeout(() => loader.classList.add('loading'), 50);

      // Fade out current page
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');

      // Wait for fade out to complete
      await this.wait(this.transitionDuration);

      // Update browser history if needed
      if (pushState) {
        history.pushState({ url }, '', url);
      }

      // Navigate to new page
      window.location.href = url;
    } catch (error) {
      console.error('Navigation error:', error);
      // Remove loader and reset state on error
      loader.remove();
      document.body.classList.remove('transitioning', 'fade-out');
      document.body.classList.add('fade-in');
      this.isTransitioning = false;
      // Fallback to normal navigation
      window.location.href = url;
    }
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Initialize page transitions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PageTransition();
});

// Export for potential external use
window.PageTransition = PageTransition;
