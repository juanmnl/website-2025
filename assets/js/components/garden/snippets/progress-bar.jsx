import React, { useState, useEffect } from 'react';

const ProgressBarLive = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '300px' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '20px',
          background: '#fdfbef',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid #F5F4EE',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #ffe8a8, #ffedcc)',
            width: animated ? '75%' : '0%',
            transition: 'width 1s ease',
            borderRadius: 'inherit',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '0.75em',
            fontWeight: 600,
            color: '#1b1e21',
            zIndex: 1,
          }}
        >
          75%
        </span>
      </div>
    </div>
  );
};

export default {
  id: 7,
  title: 'Progress Bar',
  description: 'Animated progress indicator with percentage',
  type: 'component',
  thumbnail: '/assets/images/th1.png',
  html: `<div class="progress-container">
  <div class="progress-bar" data-progress="75">
    <div class="progress-fill"></div>
    <span class="progress-text">75%</span>
  </div>
</div>`,
  css: `.progress-container {
  width: 100%;
  max-width: 300px;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 20px;
  background: var(--light-gray);
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--border);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--butter), var(--burnt-butter));
  width: 0%;
  transition: width 1s ease;
  border-radius: inherit;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75em;
  font-weight: 600;
  color: var(--dark-gray);
  z-index: 1;
}

/* Animation trigger */
.progress-bar.animate .progress-fill {
  width: attr(data-progress);
}`,
  js: `function animateProgress() {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    const fill = bar.querySelector('.progress-fill');
    
    setTimeout(() => {
      fill.style.width = progress + '%';
    }, 500);
  });
}

// Trigger animation
animateProgress();`,
  liveComponent: ProgressBarLive,
};
