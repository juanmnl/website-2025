export default {
  title: 'FAB',
  description: 'The classic floating action button',
  type: 'animation',
  dateAdded: '2025-07-08',
  thumbnail: '/assets/images/th4.png',
  html: /*html*/ `<div class="fab-container">
  <button class="fab main-fab" onclick="toggleFabMenu()">
    <span class="fab-icon">+</span>
  </button>
  
  <div class="fab-menu">
    <button class="fab mini-fab" onclick="handleFabAction('edit')">
      <span class="fab-icon">✏</span>
    </button>
    <button class="fab mini-fab" onclick="handleFabAction('share')">
      <span class="fab-icon">📤</span>
    </button>
    <button class="fab mini-fab" onclick="handleFabAction('favorite')">
      <span class="fab-icon">❤</span>
    </button>
  </div>
  
  <!-- Backdrop -->
  <div class="fab-backdrop"></div>
</div>

<div class="demo-content">
  <p>Click the floating action button to see the expandable menu animation!</p>
  <p>Status: <span id="status">Menu closed</span></p>
  <div class="demo-actions">
    <button onclick="toggleFabMenu()" class="demo-btn">Toggle Menu</button>
    <button onclick="resetDemo()" class="demo-btn">Reset Demo</button>
  </div>
</div>`,
  css: /*css*/ `.fab-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}

.fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.main-fab {
  background: var(--butter);
  color: var(--dark-gray);
  font-size: 24px;
  font-weight: bold;
  position: relative;
  z-index: 1003; /* Higher than backdrop */
}

.main-fab:hover {
  background: var(--burnt-butter);
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.main-fab:active {
  transform: scale(0.95);
}

.main-fab.active .fab-icon {
  transform: rotate(45deg);
}

.mini-fab {
  background: white;
  color: var(--dark-gray);
  font-size: 18px;
  width: 40px;
  height: 40px;
  margin-bottom: 16px;
  opacity: 0;
  transform: scale(0) translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1002; /* Higher than backdrop */
}

.mini-fab:hover {
  background: var(--light-gray);
  transform: scale(1.1) translateY(0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.fab-menu {
  position: absolute;
  bottom: 72px;
  right: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1002; /* Higher than backdrop */
}

.fab-menu.active .mini-fab {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.fab-menu.active .mini-fab:nth-child(1) {
  transition-delay: 0.1s;
}

.fab-menu.active .mini-fab:nth-child(2) {
  transition-delay: 0.2s;
}

.fab-menu.active .mini-fab:nth-child(3) {
  transition-delay: 0.3s;
}

.fab-icon {
  display: block;
  transition: transform 0.3s ease;
}

/* Ripple Effect */
.fab::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  pointer-events: none;
}

.fab:active::before {
  width: 120px;
  height: 120px;
}

/* Backdrop */
.fab-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1001; /* Below FAB elements but above everything else */
  pointer-events: none;
}

.fab-container.active .fab-backdrop {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

/* Demo Content */
.demo-content {
  padding: 40px 20px;
  text-align: center;
  color: var(--text-color);
  position: relative;
  z-index: 1;
}

.demo-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.demo-btn {
  background: white;
  color: var(--dark-gray);
  border: 2px solid var(--border);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.demo-btn:hover {
  border-color: var(--butter);
  background: var(--butter);
}

#status {
  font-weight: 600;
  color: var(--dark-gray);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .fab-container {
    bottom: 20px;
    right: 20px;
  }
  
  .fab {
    width: 48px;
    height: 48px;
  }
  
  .main-fab {
    font-size: 20px;
  }
  
  .mini-fab {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
  
  .demo-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .demo-btn {
    width: 140px;
  }
}`,
  js: /*js*/ `// Global state
let fabMenuOpen = false;
let autoClosePending = false;

function updateStatus(message) {
  const statusEl = document.getElementById('status');
  if (statusEl) {
    statusEl.textContent = message;
  }
}

function toggleFabMenu() {
  const fabContainer = document.querySelector('.fab-container');
  const fabMenu = document.querySelector('.fab-menu');
  const mainFab = document.querySelector('.main-fab');
  
  if (!fabContainer || !fabMenu || !mainFab) {
    console.log('FAB elements not found');
    return;
  }
  
  // Toggle state
  fabMenuOpen = !fabMenuOpen;
  
  console.log('Toggling FAB menu. New state:', fabMenuOpen);
  
  if (fabMenuOpen) {
    // Open menu
    fabContainer.classList.add('active');
    fabMenu.classList.add('active');
    mainFab.classList.add('active');
    updateStatus('Menu open');
    
    // Clear any pending auto-close
    autoClosePending = false;
  } else {
    // Close menu
    fabContainer.classList.remove('active');
    fabMenu.classList.remove('active');
    mainFab.classList.remove('active');
    updateStatus('Menu closed');
  }
}

function handleFabAction(action) {
  console.log('FAB action triggered:', action);
  
  // Don't close if already closing
  if (!fabMenuOpen) return;
  
  // Show feedback first
  const messages = {
    edit: 'Edit action triggered!',
    share: 'Share action triggered!',
    favorite: 'Added to favorites!'
  };
  
  updateStatus(messages[action] || 'Action triggered!');
  
  // Close the menu after a short delay
  setTimeout(() => {
    if (fabMenuOpen) {
      toggleFabMenu();
    }
    
    // Reset status after menu closes
    setTimeout(() => {
      updateStatus('Menu closed');
    }, 500);
  }, 800);
}

function resetDemo() {
  console.log('Resetting demo');
  
  // Force close menu if open
  if (fabMenuOpen) {
    fabMenuOpen = true; // Ensure toggle will close it
    toggleFabMenu();
  }
  
  // Reset status
  updateStatus('Demo reset - Menu closed');
  
  // Clear any pending auto-close
  autoClosePending = false;
}

// Handle backdrop clicks
function handleBackdropClick(e) {
  if (e.target.classList.contains('fab-backdrop') && fabMenuOpen) {
    console.log('Backdrop clicked, closing menu');
    toggleFabMenu();
  }
}

// Initialize the demo
function initializeFAB() {
  console.log('Initializing FAB demo');
  
  // Reset state
  fabMenuOpen = false;
  autoClosePending = false;
  
  // Initialize status
  updateStatus('Menu closed');
  
  // Set up backdrop click handler
  const backdrop = document.querySelector('.fab-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', handleBackdropClick);
    console.log('Backdrop click handler added');
  }
  
  // Auto-demo: show the menu briefly after 2 seconds
  setTimeout(() => {
    if (!fabMenuOpen && !autoClosePending) {
      console.log('Starting auto-demo');
      autoClosePending = true;
      toggleFabMenu();
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        if (fabMenuOpen && autoClosePending) {
          console.log('Auto-closing demo');
          toggleFabMenu();
          autoClosePending = false;
        }
      }, 3000);
    }
  }, 2000);
}

// Make functions globally available for onclick handlers
window.toggleFabMenu = toggleFabMenu;
window.handleFabAction = handleFabAction;
window.resetDemo = resetDemo;

// Initialize when DOM is ready
setTimeout(initializeFAB, 100);`,
};
