import React, { useState } from 'react';

const TooltipLive = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <span
      className='tooltip'
      style={{
        position: 'relative',
        cursor: 'pointer',
        borderBottom: '1px dotted #353a3f',
        color: '#24292F',
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      Hover me
      {showTooltip && (
        <>
          <span
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#1b1e21',
              color: '#f5f5f5',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '0.8em',
              whiteSpace: 'nowrap',
              marginBottom: '8px',
              zIndex: 1000,
            }}
          >
            This is a tooltip!
          </span>
          <span
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid #1b1e21',
              marginBottom: '3px',
            }}
          />
        </>
      )}
    </span>
  );
};

export default {
  id: 6,
  title: 'Tooltip Component',
  description: 'Hoverable tooltip with positioning options',
  type: 'component',
  thumbnail: '/assets/images/th4.png',
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
  bottom: 100%;
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
  liveComponent: TooltipLive,
};
