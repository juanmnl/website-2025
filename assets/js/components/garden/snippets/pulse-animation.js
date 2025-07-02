export default {
  id: 3,
  title: 'Pulse Animation',
  description: 'CSS-only pulse animation',
  type: 'animation',
  dateAdded: '2025-06-20',
  thumbnail: '/assets/images/snippets/thumbnails/loader.svg',
  html: /*html*/`
  <div class="pulse-container">
    <div class="pulse-indicator"></div>
  </div>`,
  css: /*css*/`
  .pulse-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
  }

  .pulse-indicator {
    width: 32px;
    height: 32px;
    background: var(--butter);
    border-radius: 50%;
    animation: pulse 1s infinite;
  }

  .pulse-text {
    color: var(--secondary-color);
    font-size: 0.9em;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(216, 209, 188, 0.28); }
    70% { box-shadow: 0 0 0 19px rgba(135, 135, 135, 0); }
    100% { box-shadow: 0 0 0 0 rgba(19, 19, 19, 0); }
  }`,
  js: /*js*/`
  function showLoading() {
    document.querySelector('.loading-container').style.display = 'flex';
  }

  function hideLoading() {
    document.querySelector('.loading-container').style.display = 'none';
  }`,
};
