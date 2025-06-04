document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.getElementById('main-navigation');

  if (menuToggle && mainNavigation) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !isExpanded);
      mainNavigation.classList.toggle('active');
      document.body.classList.toggle('nav-open'); // To prevent body scroll when nav is open
    });

    // Close nav when a link is clicked (useful for single-page or mobile)
    mainNavigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mainNavigation.classList.contains('active')) {
          menuToggle.setAttribute('aria-expanded', 'false');
          mainNavigation.classList.remove('active');
          document.body.classList.remove('nav-open');
        }
      });
    });
  }

  // 2. Set Current Year in Footer
  const currentYearSpan = document.getElementById('current-year-footer');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 3. Highlight Active Navigation Link (adjusts for subdirectories like 'projects')
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('#main-navigation a');

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href');
    let effectiveLinkPath = linkPath;

    // Handle relative paths for project pages (e.g., ../index.html)
    if (linkPath.startsWith('../')) {
      const parts = currentPath.split('/');
      // If current path is like /projects/project-1.html, we need to go up one level then match
      if (parts.length > 2 && parts[parts.length - 2] === 'projects') {
        effectiveLinkPath = linkPath.substring(3); // Remove ../
      }
    } else if (linkPath.startsWith('/')) {
      // Ensure absolute paths are relative to the root for comparison
      effectiveLinkPath = linkPath.substring(1);
    }

    // Check if the current path (or part of it) matches the link's path
    if (currentPath.includes(effectiveLinkPath) && effectiveLinkPath !== '') {
      // Special handling to prefer 'index.html' for '/' path if it's not the exact root
      if (effectiveLinkPath === 'index.html' && currentPath === '/') {
        link.classList.add('active');
      } else if (
        effectiveLinkPath !== 'index.html' ||
        (effectiveLinkPath === 'index.html' &&
          currentPath.endsWith('index.html'))
      ) {
        link.classList.add('active');
      }
    } else if (currentPath === '/' && linkPath === 'index.html') {
      // Explicitly set index.html active if on root /
      link.classList.add('active');
    }
  });

  // 4. Image Zoom Modal Functionality (for gallery.html)
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeButton = document.querySelector('.modal-close-button');
  const zoomableImages = document.querySelectorAll('.zoomable-image');

  // Only run this code if the modal elements are present on the page
  if (
    modal &&
    modalImage &&
    modalCaption &&
    closeButton &&
    zoomableImages.length > 0
  ) {
    zoomableImages.forEach((img) => {
      img.addEventListener('click', function () {
        modal.style.display = 'flex'; // Make modal visible
        // Set the source of the modal image (prioritize data-full-src if present)
        modalImage.src = this.getAttribute('data-full-src') || this.src;
        // Set the caption from the h3 in the next sibling div or the image's alt text
        modalCaption.textContent =
          this.nextElementSibling && this.nextElementSibling.querySelector('h3')
            ? this.nextElementSibling.querySelector('h3').textContent
            : this.alt;
        document.body.classList.add('modal-open'); // Prevent body scroll
      });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });

    // Close the modal when clicking outside the image (on the overlay)
    modal.addEventListener('click', function (event) {
      // Check if the click occurred directly on the modal background, not the image or caption
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });

    // Close the modal with the Escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  }

  // 5. Basic Contact Form Submission (Example - requires backend for actual email sending)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {});
  }
});
