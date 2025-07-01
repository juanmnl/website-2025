import React, { useState } from 'react';

const AccordionLive = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div
      style={{
        border: '1px solid #F5F4EE',
        borderRadius: '20px',
        overflow: 'hidden',
        maxWidth: '300px',
      }}
    >
      {[1, 2].map((item, index) => (
        <div
          key={item}
          style={{
            borderBottom: index === 1 ? 'none' : '1px solid #F5F4EE',
          }}
        >
          <button
            onClick={() => toggleItem(index)}
            style={{
              width: '100%',
              padding: '1em',
              background: activeItem === index ? '#ffedcc' : '#fff6e9',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.9em',
              color: '#24292F',
              transition: 'background-color 0.3s ease',
            }}
          >
            <span>Section {item}</span>
            <span
              style={{
                fontFamily: 'monospace',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                transform:
                  activeItem === index ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: activeItem === index ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
              background: '#fdfbef',
            }}
          >
            <p
              style={{
                padding: '1em',
                margin: '0',
                fontSize: '0.85em',
                color: '#353a3f',
              }}
            >
              Content for section {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default {
  id: 8,
  title: 'Accordion Component',
  description: 'Collapsible content sections with smooth animations',
  type: 'layout',
  thumbnail: '/assets/images/th2.png',
  html: `<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">
      <span>Section 1</span>
      <span class="accordion-icon">+</span>
    </button>
    <div class="accordion-content">
      <p>Content for section 1</p>
    </div>
  </div>
</div>`,
  css: `.accordion {
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
  js: `document.querySelectorAll('.accordion-header').forEach(header => {
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
  liveComponent: AccordionLive,
};
