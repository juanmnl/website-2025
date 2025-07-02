export default {
  id: 6,
  title: 'Tooltip Component',
  description: 'Simple hoverable tooltip with custom text',
  type: 'component',
  thumbnail: '/assets/images/placeholders/tooltip.svg',
  html: `<span class="tooltip" data-tooltip="This is a tooltip!">
  Hover me
</span>`,
  css: `.tooltip {
  position: relative;
  cursor: pointer;
  border-bottom: 1px dotted var(--secondary-color);
  color: var(--text-color);
}

.tooltip::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--dark-gray);
  color: var(--white);
  padding: 8px 12px;
  border-radius: var(--border-radius);
  font-size: 0.8em;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  z-index: 1000;
}

.tooltip::after {
  content: "";
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--dark-gray);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 3px;
}

.tooltip:hover::before,
.tooltip:hover::after {
  opacity: 1;
  visibility: visible;
}`,
  js: `// Optional: Close tooltip on click elsewhere
document.addEventListener('click', function(e) {
  if (!e.target.closest('.tooltip')) {
    // Handle tooltip close logic
  }
});`,
};
