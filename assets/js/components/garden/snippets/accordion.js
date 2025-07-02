import React, { useState } from 'react';

export default {
  id: 8,
  title: 'Accordion Component',
  description: 'Collapsible sections with smooth animations',
  type: 'component',
  dateAdded: "2025-06-20",
  thumbnail: '/assets/images/snippets/thumbnails/accordion.svg',
  html: /*html*/`<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      <span>Section 1</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>Content for section 1</p>
    </div>
  </div>
  <div class="accordion-item">
    <button class="accordion-header">
      <span>Section 2</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>Content for section 2</p>
    </div>
    <div class="accordion-content">
      <p>Content for section 2</p>
    </div>
  </div>
</div>`,
  css: /*css*/`.accordion {
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid var(--border);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 1em;
  background: var(--background);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  color: var(--text-color);
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background: var(--burnt-butter);
}

.accordion-icon {
  font-family: monospace;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.accordion-item.active .accordion-icon {
  transform: rotate(45deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: var(--light-gray);
}

.accordion-item.active .accordion-content {
  max-height: 200px;
}

.accordion-content p {
  padding: 1em;
  margin: 0;
  font-size: 0.85em;
  color: var(--secondary-color);
}`,
  js: /*js*/`document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const item = this.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});`,
};
