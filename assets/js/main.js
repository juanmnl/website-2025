import '../css/style.css';

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.getElementById('main-navigation');

  if (menuToggle && mainNavigation) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !isExpanded);
      mainNavigation.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });

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

  const currentYearSpan = document.getElementById('current-year-footer');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('#main-navigation a');

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href');
    let effectiveLinkPath = linkPath;

    if (linkPath.startsWith('../')) {
      const parts = currentPath.split('/');
      if (parts.length > 2 && parts[parts.length - 2] === 'projects') {
        effectiveLinkPath = linkPath.substring(3);
      }
    } else if (linkPath.startsWith('/')) {
      effectiveLinkPath = linkPath.substring(1);
    }

    if (currentPath.includes(effectiveLinkPath) && effectiveLinkPath !== '') {
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
      link.classList.add('active');
    }
  });

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

  function scrambleText(element, originalText, duration = 300) {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.?';
    let iterations = 0;

    const interval = setInterval(() => {
      element.textContent = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iterations) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iterations >= originalText.length) {
        clearInterval(interval);
        element.textContent = originalText;
      }

      iterations += 1.8;
    }, 30);
  }

  function triggerScramble() {
    const stillElement = document.querySelector('.glitch[data-text="still"]');
    const aiElement = document.querySelector(
      '.glitch[data-text="in the age of artificial intelligence"]'
    );

    if (stillElement) {
      scrambleText(stillElement, 'still', 500);
    }

    setTimeout(() => {
      if (aiElement) {
        scrambleText(aiElement, 'in the age of artificial intelligence', 400);
      }
    }, 800);
  }

  setTimeout(triggerScramble, 500);
});
