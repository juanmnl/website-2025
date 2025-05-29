// assets/js/script.js

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNavigation = document.getElementById('main-navigation');

  if (menuToggle && mainNavigation) {
    menuToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      mainNavigation.classList.toggle('active'); // Use a class to show/hide
    });
  }

  // 2. Set current year for footer
  const currentYearSpan = document.getElementById('current-year');
  const currentYearFooterSpan = document.getElementById('current-year-footer'); // For case study page footer
  const year = new Date().getFullYear();

  if (currentYearSpan) {
    currentYearSpan.textContent = year;
  }
  if (currentYearFooterSpan) {
    currentYearFooterSpan.textContent = year;
  }

  // Optional: Smooth scroll for internal links (e.g., "View My Work" on homepage)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Optional: Highlight active navigation link based on current page
  const navLinks = document.querySelectorAll('nav ul li a');
  const path = window.location.pathname;
  const currentPage = path.split('/').pop(); // Gets 'index.html', 'about.html', 'project-1.html' etc.

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (
      linkPath === currentPage ||
      (currentPage === '' && linkPath === 'index.html')
    ) {
      link.classList.add('active');
    } else if (path.includes('/projects/') && linkPath === 'index.html') {
      // If we are on a project page, keep "Work" active
      link.classList.add('active');
    }
  });

  // Handle form submission (basic example - for a real site, use a backend service)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      // In a real scenario, you'd send this data to a backend (e.g., Formspree, Netlify Forms, custom API)
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset(); // Clear the form
    });
  }
});
