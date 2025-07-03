export default {
  title: 'Dropdown Menu',
  description: 'Dropdown menu with keyboard navigation',
  type: 'component',
  dateAdded: '2025-07-02',
  thumbnail: '/assets/images/snippets/thumbnails/dropdown-menu.svg',
  html: /*html*/ `<div class="dropdown">
  <button class="dropdown-trigger">
    Options
    <span class="dropdown-arrow">▼</span>
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Profile</a>
    <a href="#" class="dropdown-item">Settings</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">Help</a>
    <a href="#" class="dropdown-item">Logout</a>
  </div>
</div>`,
  css: /*css*/ `.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.9em;
  color: var(--text-color);
  transition: all 0.2s ease;
}

.dropdown-trigger:hover {
  background: var(--light-gray);
}

.dropdown-arrow {
  font-size: 0.7em;
  transition: transform 0.2s ease;
}

.dropdown.open .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1000;
}

.dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 10px 16px;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.85em;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background: var(--light-gray);
  outline: none;
}

.dropdown-divider {
  height: 1px;
  background: var(--border);
  margin: 4px 0;
}`,
  js: /*js*/ `document.querySelectorAll('.dropdown').forEach(dropdown => {
  const trigger = dropdown.querySelector('.dropdown-trigger');
  const menu = dropdown.querySelector('.dropdown-menu');
  
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  
  // Close when clicking outside
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
    }
  });
  
  // Handle item clicks
  dropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Selected:', item.textContent);
      dropdown.classList.remove('open');
    });
  });
});`,
};
