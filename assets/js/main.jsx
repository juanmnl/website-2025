import '../css/style.css';
import { MouseBlur } from './mouse-blur.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation.jsx';

document.addEventListener('DOMContentLoaded', function () {
  const navRoot = document.getElementById('navigation-root');
  if (navRoot) {
    const root = createRoot(navRoot);
    root.render(<Navigation />);
  }

  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeButton = document.querySelector('.modal-close-button');
  const zoomableImages = document.querySelectorAll('.zoomable-image');

  if (
    modal &&
    modalImage &&
    modalCaption &&
    closeButton &&
    zoomableImages.length > 0
  ) {
    zoomableImages.forEach((img) => {
      img.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalImage.src = this.getAttribute('data-full-src') || this.src;
        modalCaption.textContent =
          this.nextElementSibling && this.nextElementSibling.querySelector('h3')
            ? this.nextElementSibling.querySelector('h3').textContent
            : this.alt;
        document.body.classList.add('modal-open');
      });
    });

    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  }

  // Mouse blur effect
  let mouseBlurEffect = null;
  try {
    mouseBlurEffect = new MouseBlur();
    console.log('Mouse blur effect initialized');
  } catch (error) {
    console.error('Failed to initialize mouse blur effect:', error);
  }

  // Custom cursor setup
  function isMobile() {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768
    );
  }

  if (!isMobile()) {
    document.body.style.cursor = 'none';

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    cursor.style.left = startX - 10 + 'px';
    cursor.style.top = startY - 10 + 'px';

    // Set initial mouse blur position
    if (mouseBlurEffect && mouseBlurEffect.material) {
      mouseBlurEffect.mouse.set(
        startX / window.innerWidth,
        1.0 - startY / window.innerHeight
      );
      mouseBlurEffect.material.uniforms.u_mouse.value.copy(
        mouseBlurEffect.mouse
      );
    }

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  } else {
    // Mobile: Set mouse effect position to bottom
    if (mouseBlurEffect && mouseBlurEffect.material) {
      const mobileX = window.innerWidth / 2;
      const mobileY = window.innerHeight - 100;

      mouseBlurEffect.mouse.set(
        mobileX / window.innerWidth,
        1.0 - mobileY / window.innerHeight
      );
      mouseBlurEffect.material.uniforms.u_mouse.value.copy(
        mouseBlurEffect.mouse
      );
    }
  }

  // Cleanup
  window.addEventListener('beforeunload', () => {
    if (mouseBlurEffect) {
      mouseBlurEffect.destroy();
    }
  });
});
