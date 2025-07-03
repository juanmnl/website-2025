export default {
  title: 'Glitch Text Effect',
  description: 'Glitch animation for text with data attributes',
  type: 'animation',
  dateAdded: '2025-06-25',
  thumbnail: '/assets/images/snippets/thumbnails/glitch.svg',
  html: /*html*/ `<span class="glitch" data-text="GLITCH">GLITCH</span>`,
  css: /*css*/ `.glitch {
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
  animation: glitch-auto 1s infinite 0.9s;
}

.glitch::after {
  color: cyan;
  z-index: 2;
  animation: glitch-auto 1s infinite 1.1s;
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
  js: /*js*/ `// Trigger glitch on hover
document.querySelectorAll('.glitch').forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    this.offsetHeight; // Trigger reflow
    this.style.animation = null;
  });
});`,
};
