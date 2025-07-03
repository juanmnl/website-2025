export default {
  title: 'Toggle Switch',
  description: 'Modern toggle switch with smooth animation',
  type: 'component',
  dateAdded: '2025-07-01',
  thumbnail: '/assets/images/snippets/thumbnails/toggle-switch.svg',
  html: /*html*/ `<label class="toggle-switch">
  <input type="checkbox" />
  <span class="toggle-slider"></span>
  <span class="toggle-label">Dark Mode</span>
</label>`,
  css: /*css*/ `.toggle-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 0.9em;
  color: var(--text-color);
}

.toggle-switch input {
  display: none;
}

.toggle-slider {
  position: relative;
  width: 50px;
  height: 24px;
  background: var(--secondary-color);
  border-radius: 24px;
  transition: all 0.3s ease;
}

.toggle-slider::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-switch input:checked + .toggle-slider {
  background: var(--butter);
}

.toggle-switch input:checked + .toggle-slider::after {
  transform: translateX(26px);
}

.toggle-slider:hover {
  background: var(--dark-gray);
}

.toggle-switch input:checked + .toggle-slider:hover {
  background: var(--burnt-butter);
}`,
  js: /*js*/ `document.querySelectorAll('.toggle-switch input').forEach(toggle => {
  toggle.addEventListener('change', function() {
    const label = this.parentElement.querySelector('.toggle-label');
    if (this.checked) {
      console.log('Toggle ON:', label.textContent);
    } else {
      console.log('Toggle OFF:', label.textContent);
    }
  });
});`,
};
