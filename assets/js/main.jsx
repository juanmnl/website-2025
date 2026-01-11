import '../css/style.css';
import { createMouseBlur, isMobileDevice } from './mouse-blur.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import DigitalGarden from './components/garden/digitalGarden.jsx';
import StyleGuideGenerator from './components/StyleGuideGenerator.jsx';

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.remove('loading', 'page-transitioning');
  
  const navRoot = document.getElementById('navigation-root');
  if (navRoot) {
    const root = createRoot(navRoot);
    root.render(<Navigation />);
  }

  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    const footerReactRoot = createRoot(footerRoot);
    footerReactRoot.render(<Footer />);
  }

  const gardenRoot = document.getElementById('garden-root');
  if (gardenRoot) {
    const gardenReactRoot = createRoot(gardenRoot);
    gardenReactRoot.render(<DigitalGarden />);
  }

  // Add this section for the Style Guide Generator
  const styleGuideRoot = document.getElementById('style-guide-root');
  if (styleGuideRoot) {
    const styleGuideReactRoot = createRoot(styleGuideRoot);
    styleGuideReactRoot.render(<StyleGuideGenerator />);
  }

  let mouseBlurEffect = null;

  // Initialize mouse blur effect asynchronously (only loads Three.js on desktop)
  createMouseBlur()
    .then((effect) => {
      mouseBlurEffect = effect;
    })
    .catch((error) => {
      console.error('Failed to initialize mouse blur effect:', error);
    });

  if (!isMobileDevice()) {
    document.body.style.cursor = 'none';

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    cursor.style.left = startX - 10 + 'px';
    cursor.style.top = startY - 10 + 'px';

    // Throttle cursor updates with requestAnimationFrame for better performance
    let cursorX = startX;
    let cursorY = startY;
    let rafPending = false;

    const updateCursor = () => {
      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';
      rafPending = false;
    };

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(updateCursor);
      }
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  window.addEventListener('beforeunload', () => {
    if (mouseBlurEffect) {
      mouseBlurEffect.destroy();
    }
  });

  document.body.classList.remove('page-transitioning');

  setTimeout(() => {
    document.querySelectorAll('.archive-card').forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Store the element that had focus before opening modal
        window.lastFocusedElement = document.activeElement;

        closeModal();

        const overlay = createOverlay();

        const modalCard = this.cloneNode(true);
        modalCard.classList.add('expanded', 'modal-card');

        // Add ARIA attributes to modal card
        modalCard.setAttribute('role', 'dialog');
        modalCard.setAttribute('aria-modal', 'true');

        // Find or create a title for aria-labelledby
        const modalTitle = modalCard.querySelector('h3');
        if (modalTitle) {
          const titleId = 'modal-title-' + Date.now();
          modalTitle.id = titleId;
          modalCard.setAttribute('aria-labelledby', titleId);
        } else {
          modalCard.setAttribute('aria-label', 'Image details');
        }

        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close-btn';
        closeButton.innerHTML = '×';
        closeButton.setAttribute('aria-label', 'Close modal');
        closeButton.setAttribute('type', 'button');
        closeButton.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        });
        modalCard.appendChild(closeButton);
        modalCard.addEventListener('click', function(e) {
          e.stopPropagation();
        });

        overlay.appendChild(modalCard);
        overlay.classList.add('active');

        document.body.style.overflow = 'hidden';

        // Focus the close button for accessibility
        requestAnimationFrame(() => {
          closeButton.focus();
        });
      });
    });
  }, 100);
});

function createOverlay() {
  let overlay = document.querySelector('.archive-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'archive-overlay';
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });
  }
  return overlay;
}

function closeModal() {
  const overlay = document.querySelector('.archive-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.innerHTML = '';
    document.body.style.overflow = '';

    // Restore focus to the element that had focus before opening modal
    if (window.lastFocusedElement) {
      window.lastFocusedElement.focus();
      window.lastFocusedElement = null;
    }
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

document.body.classList.add('loading');

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    document.body.classList.remove('page-transitioning');
  }
});