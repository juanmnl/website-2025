export default {
  title: 'Styled Links',
  description: 'Multiple link styles with basic functionality',
  type: 'element',
  dateAdded: '2025-07-08',
  thumbnail: '/assets/images/th2.png',
  html: /*html*/ `<div class="links-demo">
  <section class="link-section">
    <h3>Basic Link Styles</h3>
    <div class="link-group">
      <a href="#" class="link-default">Default link style</a>
      <a href="#" class="link-subtle">Subtle link with underline</a>
      <a href="#" class="link-bold">Bold emphasized link</a>
      <a href="#" class="link-muted">Muted secondary link</a>
    </div>
  </section>

  <section class="link-section">
    <h3>Animated Link Effects</h3>
    <div class="link-group">
      <a href="#" class="link-underline">Animated underline</a>
      <a href="#" class="link-slide">Sliding background</a>
      <a href="#" class="link-glow">Glow effect</a>
      <a href="#" class="link-bounce">Bouncy hover</a>
    </div>
  </section>

  <section class="link-section">
    <h3>Button-Style Links</h3>
    <div class="link-group">
      <a href="#" class="link-button primary">Primary button link</a>
      <a href="#" class="link-button secondary">Secondary button link</a>
      <a href="#" class="link-button outline">Outline button link</a>
      <a href="#" class="link-button ghost">Ghost button link</a>
    </div>
  </section>

  <section class="link-section">
    <h3>Icon Links</h3>
    <div class="link-group">
      <a href="#" class="link-icon external">
        External link
        <span class="icon">↗</span>
      </a>
      <a href="#" class="link-icon download">
        <span class="icon">⬇</span>
        Download file
      </a>
      <a href="#" class="link-icon email">
        <span class="icon">✉</span>
        Send email
      </a>
      <a href="#" class="link-icon arrow">
        Continue reading
        <span class="icon">→</span>
      </a>
    </div>
  </section>

  <section class="link-section">
    <h3>Navigation Links</h3>
    <nav class="nav-demo">
      <a href="#" class="nav-link active">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Services</a>
      <a href="#" class="nav-link">Portfolio</a>
      <a href="#" class="nav-link">Contact</a>
    </nav>
  </section>

  <section class="link-section">
    <h3>Demo Actions</h3>
    <div class="link-group">
      <button onclick="simulateLoading(this)" class="link-button primary">Test Loading State</button>
      <button onclick="showNotification('Action completed!')" class="link-button secondary">Show Notification</button>
    </div>
  </section>
</div>`,
  css: /*css*/ `/* Links Demo Container */
.links-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: var(--border-radius);
}

.link-section {
  margin-bottom: 40px;
  padding: 25px 0;
  border-bottom: 1px solid var(--border);
}

.link-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.link-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--butter);
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
}

.link-group.horizontal {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

/* Base Link Styles */
a {
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

/* Default Link Styles */
.link-default {
  color: var(--butter);
  font-weight: 500;
  border-bottom: 1px solid transparent;
}

.link-default:hover {
  color: var(--burnt-butter);
  border-bottom-color: var(--burnt-butter);
}

.link-subtle {
  color: var(--text-color);
  border-bottom: 1px solid var(--border);
}

.link-subtle:hover {
  color: var(--dark-gray);
  border-bottom-color: var(--butter);
}

.link-bold {
  color: var(--dark-gray);
  font-weight: 700;
}

.link-bold:hover {
  color: var(--butter);
  transform: translateY(-1px);
}

.link-muted {
  color: var(--secondary-color);
  font-size: 0.9rem;
}

.link-muted:hover {
  color: var(--text-color);
}

/* Animated Link Effects */
.link-underline {
  color: var(--dark-gray);
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--butter);
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}

.link-slide {
  color: var(--dark-gray);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  background: linear-gradient(90deg, transparent 0%, var(--butter) 0%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
}

.link-slide:hover {
  background-size: 100% 100%;
  color: var(--dark-gray);
}

.link-glow {
  color: var(--butter);
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.link-glow:hover {
  box-shadow: 0 0 20px rgba(255, 232, 168, 0.6);
  background: rgba(255, 232, 168, 0.1);
}

.link-bounce {
  color: var(--dark-gray);
  font-weight: 500;
  display: inline-block;
}

.link-bounce:hover {
  animation: bounce 0.6s ease;
  color: var(--butter);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-3px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-1px); }
}

/* Button-Style Links */
.link-button {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

.link-button.primary {
  background: var(--butter);
  color: var(--dark-gray);
}

.link-button.primary:hover {
  background: var(--burnt-butter);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.link-button.secondary {
  background: var(--secondary-color);
  color: white;
}

.link-button.secondary:hover {
  background: var(--dark-gray);
  transform: translateY(-2px);
}

.link-button.outline {
  background: transparent;
  color: var(--butter);
  border-color: var(--butter);
}

.link-button.outline:hover {
  background: var(--butter);
  color: var(--dark-gray);
}

.link-button.ghost {
  background: transparent;
  color: var(--text-color);
}

.link-button.ghost:hover {
  background: var(--light-gray);
  color: var(--dark-gray);
}

/* Icon Links */
.link-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--dark-gray);
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.link-icon:hover {
  background: var(--light-gray);
  transform: translateX(2px);
}

.link-icon .icon {
  font-size: 0.9em;
  transition: transform 0.3s ease;
}

.link-icon.external:hover .icon,
.link-icon.arrow:hover .icon {
  transform: translate(2px, -2px);
}

.link-icon.download:hover .icon {
  transform: translateY(2px);
}

.link-icon.email:hover .icon {
  transform: scale(1.2);
}

/* Navigation Links */
.nav-demo {
  display: flex;
  gap: 2px;
  background: var(--light-gray);
  padding: 6px;
  border-radius: 10px;
  overflow-x: auto;
}

.nav-link {
  padding: 10px 20px;
  border-radius: 6px;
  color: var(--secondary-color);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.7);
  color: var(--dark-gray);
}

.nav-link.active {
  background: white;
  color: var(--dark-gray);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--butter);
  border-radius: 1px;
}

/* Loading State */
.link-loading {
  pointer-events: none;
  opacity: 0.7;
  position: relative;
}

.link-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: translateY(-50%) rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .links-demo {
    padding: 20px 15px;
  }
  
  .link-group.horizontal {
    flex-direction: column;
    align-items: stretch;
  }
  
  .nav-demo {
    justify-content: center;
  }
  
  .nav-link {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
  
  .link-button {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}`,
  js: /*js*/ `// Global functions for button interactions
function simulateLoading(button) {
  if (button.classList.contains('link-loading')) return;
  
  button.classList.add('link-loading');
  const originalText = button.textContent;
  button.textContent = 'Loading...';
  
  setTimeout(() => {
    button.classList.remove('link-loading');
    button.textContent = originalText;
    showNotification('Loading completed!');
  }, 2000);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: var(--dark-gray); color: white; padding: 12px 20px; border-radius: 8px; z-index: 1000; opacity: 0; transition: opacity 0.3s ease; font-weight: 500;';
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10);
  
  // Remove after delay
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Initialize navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      showNotification('Navigated to ' + this.textContent);
    });
  });
}

// Initialize link interactions
function initializeLinks() {
  // Set up navigation
  initializeNavigation();
  
  // Add click handlers to demo links
  const demoLinks = document.querySelectorAll('.link-default, .link-subtle, .link-bold, .link-muted, .link-underline, .link-slide, .link-glow, .link-bounce, .link-icon');
  
  demoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const linkText = this.textContent.trim();
      showNotification('Clicked: ' + linkText);
    });
  });
  
  console.log('Styled links initialized');
}

// Make functions globally available
window.simulateLoading = simulateLoading;
window.showNotification = showNotification;

// Initialize when ready
setTimeout(initializeLinks, 100);`,
};
