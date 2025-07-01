export default {
  id: 7,
  title: 'Progress Bar',
  description: 'Animated progress indicator with percentage',
  type: 'component',
  thumbnail: '/assets/images/placeholders/progress-bar.svg',
  html: /*html*/`
  <div class="progress-container">
    <div class="progress-bar" data-progress="75">
      <div class="progress-fill"></div>
      <span class="progress-text">75%</span>
    </div>
  </div>`,
  css: /*css*/`
  .progress-container {
    width: 100%;
    min-width: 300px;
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
};
