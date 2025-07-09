export default {
  title: 'Typography System',
  description: 'TS with headings, body, and scaling',
  type: 'element',
  dateAdded: '2025-07-08',
  thumbnail: '/assets/images/th1.png',
  html: /*html*/ `<div class="typography-demo">
  <section class="typography-section">
    <h2 class="section-title">Heading Scale</h2>
    
    <div class="heading-sample">
      <h1 class="display-1">Display 1 Heading</h1>
      <span class="size-info">48px • 1.2 line-height • 700 weight</span>
    </div>
    
    <div class="heading-sample">
      <h1 class="h1">H1 Main Heading</h1>
      <span class="size-info">36px • 1.2 line-height • 700 weight</span>
    </div>
    
    <div class="heading-sample">
      <h2 class="h2">H2 Section Heading</h2>
      <span class="size-info">30px • 1.3 line-height • 600 weight</span>
    </div>
    
    <div class="heading-sample">
      <h3 class="h3">H3 Subsection Heading</h3>
      <span class="size-info">24px • 1.3 line-height • 600 weight</span>
    </div>
    
    <div class="heading-sample">
      <h4 class="h4">H4 Component Heading</h4>
      <span class="size-info">20px • 1.4 line-height • 500 weight</span>
    </div>
    
    <div class="heading-sample">
      <h5 class="h5">H5 Small Heading</h5>
      <span class="size-info">18px • 1.4 line-height • 500 weight</span>
    </div>
    
    <div class="heading-sample">
      <h6 class="h6">H6 Minor Heading</h6>
      <span class="size-info">16px • 1.4 line-height • 500 weight</span>
    </div>
  </section>

  <section class="typography-section">
    <h2 class="section-title">Body Text Scale</h2>
    
    <div class="text-sample">
      <p class="text-large">Large body text for introductions and important content. This size draws attention while remaining readable for longer passages.</p>
      <span class="size-info">18px • 1.6 line-height • 400 weight</span>
    </div>
    
    <div class="text-sample">
      <p class="text-base">Base body text for general content and paragraphs. This is the most commonly used text size that provides optimal readability across devices and maintains good reading rhythm.</p>
      <span class="size-info">16px • 1.6 line-height • 400 weight</span>
    </div>
    
    <div class="text-sample">
      <p class="text-small">Small text for captions, metadata, and supplementary information. Use sparingly to maintain hierarchy.</p>
      <span class="size-info">14px • 1.5 line-height • 400 weight</span>
    </div>
    
    <div class="text-sample">
      <p class="text-xs">Extra small text for fine print, copyright notices, and minimal UI elements.</p>
      <span class="size-info">12px • 1.4 line-height • 400 weight</span>
    </div>
  </section>

  <section class="typography-section">
    <h2 class="section-title">Text Variants</h2>
    
    <div class="variant-grid">
      <div class="variant-item">
        <span class="text-lead">Lead text for article introductions</span>
        <span class="size-info">20px • 1.5 line-height • 300 weight</span>
      </div>
      
      <div class="variant-item">
        <span class="text-semibold">Semibold text for emphasis</span>
        <span class="size-info">16px • 1.6 line-height • 600 weight</span>
      </div>
      
      <div class="variant-item">
        <span class="text-bold">Bold text for strong emphasis</span>
        <span class="size-info">16px • 1.6 line-height • 700 weight</span>
      </div>
      
      <div class="variant-item">
        <span class="text-italic">Italic text for subtle emphasis</span>
        <span class="size-info">16px • 1.6 line-height • 400 weight • italic</span>
      </div>
      
      <div class="variant-item">
        <span class="text-uppercase">Uppercase text for labels</span>
        <span class="size-info">14px • 1.4 line-height • 500 weight • uppercase</span>
      </div>
      
      <div class="variant-item">
        <code class="text-code">Monospace code text</code>
        <span class="size-info">14px • 1.4 line-height • 400 weight • monospace</span>
      </div>
    </div>
  </section>

  <section class="typography-section">
    <h2 class="section-title">Usage Example</h2>
    <article class="article-example">
      <h1 class="h1">The Future of Web Typography</h1>
      <p class="text-lead">Modern web typography goes beyond just choosing fonts—it's about creating systems that scale beautifully across devices and enhance readability.</p>
      
      <h2 class="h2">Variable Fonts Revolution</h2>
      <p class="text-base">Variable fonts represent a significant advancement in web typography, allowing designers to access multiple font variations within a single file. This technology reduces load times while providing unprecedented typographic control.</p>
      
      <h3 class="h3">Key Benefits</h3>
      <p class="text-base">The advantages of implementing a robust typography system include:</p>
      <ul class="text-base">
        <li>Improved readability and user experience</li>
        <li>Consistent visual hierarchy across your application</li>
        <li>Better accessibility for users with varying needs</li>
      </ul>
      
      <p class="text-small">Last updated: July, 08 - 2025</p>
    </article>
  </section>
</div>`,
  css: /*css*/ `/* Typography Scale System */
.typography-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: var(--border-radius);
}

.typography-section {
  margin-bottom: 50px;
  padding: 30px 0;
  border-bottom: 1px solid var(--border);
}

.typography-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-gray);
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--butter);
}

/* Heading Scale */
.heading-sample {
  margin-bottom: 25px;
  padding: 20px;
  border-radius: 8px;
}

.display-1 {
  font-size: 3rem; /* 48px */
  line-height: 1.2;
  font-weight: 700;
  color: var(--dark-gray);
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
}

.h1 {
  font-size: 2.25rem; /* 36px */
  line-height: 1.2;
  font-weight: 700;
  color: var(--dark-gray);
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}

.h2 {
  font-size: 1.875rem; /* 30px */
  line-height: 1.3;
  font-weight: 600;
  color: var(--dark-gray);
  margin: 0 0 8px 0;
}

.h3 {
  font-size: 1.5rem; /* 24px */
  line-height: 1.3;
  font-weight: 600;
  color: var(--dark-gray);
  margin: 0 0 8px 0;
}

.h4 {
  font-size: 1.25rem; /* 20px */
  line-height: 1.4;
  font-weight: 500;
  color: var(--dark-gray);
  margin: 0 0 8px 0;
}

.h5 {
  font-size: 1.125rem; /* 18px */
  line-height: 1.4;
  font-weight: 500;
  color: var(--dark-gray);
  margin: 0 0 8px 0;
}

.h6 {
  font-size: 1rem; /* 16px */
  line-height: 1.4;
  font-weight: 500;
  color: var(--dark-gray);
  margin: 0 0 8px 0;
}

/* Body Text Scale */
.text-sample {
  margin-bottom: 25px;
  padding: 20px;
  border-radius: 8px;
}

.text-large {
  font-size: 1.125rem; /* 18px */
  line-height: 1.6;
  font-weight: 400;
  color: var(--text-color);
  margin: 0 0 8px 0;
}

.text-base {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
  font-weight: 400;
  color: var(--text-color);
  margin: 0 0 8px 0;
}

.text-small {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
  font-weight: 400;
  color: var(--text-color);
  margin: 0 0 8px 0;
}

.text-xs {
  font-size: 0.75rem; /* 12px */
  line-height: 1.4;
  font-weight: 400;
  color: var(--secondary-color);
  margin: 0 0 8px 0;
}

/* Text Variants */
.variant-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.variant-item {
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.text-lead {
  font-size: 1.25rem; /* 20px */
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--dark-gray);
}

.text-semibold {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 600;
  color: var(--text-color);
}

.text-bold {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 700;
  color: var(--text-color);
}

.text-italic {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  font-style: italic;
  color: var(--text-color);
}

.text-uppercase {
  font-size: 0.875rem;
  line-height: 1.4;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--secondary-color);
}

.text-code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.4;
  font-weight: 400;
  color: var(--dark-gray);
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
}

/* Size Information */
.size-info {
  font-size: 0.75rem;
  color: var(--secondary-color);
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  background: white;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--border);
}

/* Article Example */
.article-example {
  background: white;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.article-example ul {
  margin: 16px 0;
  padding-left: 20px;
}

.article-example li {
  margin-bottom: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .typography-demo {
    padding: 20px 15px;
  }
  
  .display-1 {
    font-size: 2.5rem; /* 40px on mobile */
  }
  
  .h1 {
    font-size: 2rem; /* 32px on mobile */
  }
  
  .h2 {
    font-size: 1.625rem; /* 26px on mobile */
  }
  
  .text-lead {
    font-size: 1.125rem; /* 18px on mobile */
  }
  
  .heading-sample,
  .text-sample,
  .variant-item {
    padding: 15px;
  }
  
  .article-example {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .display-1 {
    font-size: 2rem; /* 32px on small mobile */
  }
  
  .h1 {
    font-size: 1.75rem; /* 28px on small mobile */
  }
  
  .section-title {
    font-size: 1.25rem;
  }
}`,
  js: /*js*/ `// Typography utilities and interactive features
function initializeTypography() {
  console.log('Typography scale demo initialized');
  
  // Add click-to-copy functionality for CSS values
  const sizeInfoElements = document.querySelectorAll('.size-info');
  
  sizeInfoElements.forEach(element => {
    element.style.cursor = 'pointer';
    element.title = 'Click to copy CSS values';
    
    element.addEventListener('click', function() {
      const text = this.textContent;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showCopyFeedback(this);
        }).catch(err => {
          console.log('Copy failed:', err);
        });
      }
    });
  });
}

function showCopyFeedback(element) {
  const originalText = element.textContent;
  const originalBg = element.style.backgroundColor;
  
  element.textContent = 'Copied!';
  element.style.backgroundColor = '#10b981';
  element.style.color = 'white';
  
  setTimeout(() => {
    element.textContent = originalText;
    element.style.backgroundColor = originalBg;
    element.style.color = '';
  }, 1500);
}

// Demonstrate dynamic font sizing
function demonstrateResponsive() {
  const demo = document.querySelector('.typography-demo');
  if (!demo) return;
  
  // Add a toggle for compact mode
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Compact Mode';
  toggleButton.style.cssText = \`
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 8px 16px;
    background: var(--butter);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    z-index: 1000;
    transition: all 0.3s ease;
  \`;
  
  toggleButton.addEventListener('click', function() {
    demo.classList.toggle('compact-mode');
    this.textContent = demo.classList.contains('compact-mode') 
      ? 'Exit Compact Mode' 
      : 'Toggle Compact Mode';
  });
  
  document.body.appendChild(toggleButton);
  
  // Add compact mode styles
  const style = document.createElement('style');
  style.textContent = \`
    .typography-demo.compact-mode .display-1 { font-size: 2rem; }
    .typography-demo.compact-mode .h1 { font-size: 1.75rem; }
    .typography-demo.compact-mode .h2 { font-size: 1.5rem; }
    .typography-demo.compact-mode .h3 { font-size: 1.25rem; }
    .typography-demo.compact-mode .text-large { font-size: 1rem; }
    .typography-demo.compact-mode .text-lead { font-size: 1.125rem; }
    .typography-demo.compact-mode .heading-sample,
    .typography-demo.compact-mode .text-sample,
    .typography-demo.compact-mode .variant-item {
      padding: 12px 16px;
    }
  \`;
  document.head.appendChild(style);
}

// Initialize when DOM is ready
setTimeout(() => {
  initializeTypography();
  demonstrateResponsive();
}, 100);

// Export utility functions for potential external use
window.typographyUtils = {
  initializeTypography,
  demonstrateResponsive,
  showCopyFeedback
};`,
};
