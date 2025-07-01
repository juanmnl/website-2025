import React from 'react';

const GlitchTextLive = () => (
  <span
    className='glitch'
    data-text='GLITCH'
    style={{
      position: 'relative',
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: '2em',
      fontWeight: 'bold',
      color: '#1b1e21',
      textTransform: 'uppercase',
    }}
  >
    GLITCH
  </span>
);

export default {
  id: 4,
  title: 'Glitch Text Effect',
  description: 'Retro glitch animation with data attributes',
  type: 'animation',
  thumbnail: '/assets/images/th2.png',
  html: `<span class="glitch" data-text="GLITCH">GLITCH</span>`,
  css: `.glitch {
  position: relative;
  display: inline-block;
  font-family: monospace;
  font-size: 2em;
  font-weight: bold;
  color: var(--dark-gray);
  text-transform: uppercase;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.glitch::before {
  color: red;
  z-index: 1;
  animation: glitch-auto 3s infinite 1.9s;
}

.glitch::after {
  color: cyan;
  z-index: 2;
  animation: glitch-auto 3s infinite 2.1s;
}

@keyframes glitch-auto {
  0%, 94% { 
    opacity: 0;
    transform: translate(0);
  }
  95% { 
    opacity: 0.8;
    transform: translate(-2px, 1px);
  }
  96% { 
    transform: translate(2px, -1px);
  }
  97% { 
    transform: translate(-1px, 2px);
  }
  98% { 
    transform: translate(1px, -1px);
  }
  99% { 
    transform: translate(-2px, 1px);
  }
  100% { 
    opacity: 0;
    transform: translate(0);
  }
}`,
  js: `// Trigger glitch on hover
document.querySelectorAll('.glitch').forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    this.offsetHeight; // Trigger reflow
    this.style.animation = null;
  });
});`,
  liveComponent: GlitchTextLive,
};
