import '../css/style.css';
import { MouseBlur } from './mouse-blur.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import DigitalGarden from './components/DigitalGarden.jsx';


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


  let mouseBlurEffect = null;
  try {
    mouseBlurEffect = new MouseBlur();
    console.log('Mouse blur effect initialized');
  } catch (error) {
    console.error('Failed to initialize mouse blur effect:', error);
  }

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
        
        closeModal();
        
        const overlay = createOverlay();
        
        const modalCard = this.cloneNode(true);
        modalCard.classList.add('expanded', 'modal-card');

        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close-btn';
        closeButton.innerHTML = '×';
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