import React from 'react';

const LoadingAnimationLive = () => (
  <div className='loading-container'>
    <div className='status-indicator'></div>
    <span className='loading-text'>Loading...</span>
  </div>
);

export default {
  id: 3,
  title: 'Loading Animation',
  description: 'CSS-only loading animations with pulse effects',
  type: 'animation',
  thumbnail: '/assets/images/th1.png',
  html: `<div class="loading-container">
  <div class="status-indicator"></div>
  <span class="loading-text">Loading...</span>
</div>`,
  css: `.loading-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

.status-indicator {
  width: 3px;
  height: 16px;
  background: var(--butter);
  border-radius: 2px;
  animation: pulse 1s infinite;
}

.loading-text {
  color: var(--secondary-color);
  font-size: 0.9em;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(216, 209, 188, 0.28); }
  70% { box-shadow: 0 0 0 9px rgba(135, 135, 135, 0); }
  100% { box-shadow: 0 0 0 0 rgba(19, 19, 19, 0); }
}`,
  js: `function showLoading() {
  document.querySelector('.loading-container').style.display = 'flex';
}

function hideLoading() {
  document.querySelector('.loading-container').style.display = 'none';
}`,
  liveComponent: LoadingAnimationLive,
};
