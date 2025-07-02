export default {
  id: 12,
  title: "Sliding Tabs",
  description: "Tab component with smooth transitions",
  type: "layout",
  dateAdded: "2025-07-02",
  thumbnail: "/assets/images/snippets/thumbnails/sliding-tabs.svg",
  html: /*html*/`<div class="tabs">
  <div class="tab-list">
    <button class="tab-button active" data-tab="tab1">Home</button>
    <button class="tab-button" data-tab="tab2">About</button>
    <button class="tab-button" data-tab="tab3">Services</button>
    <button class="tab-button" data-tab="tab4">Contact</button>
    <div class="tab-indicator"></div>
  </div>
  
  <div class="tab-content">
    <div class="tab-panel active" id="tab1">
      <h3>Home Content</h3>
      <p>Welcome to our homepage! This is the home tab content.</p>
    </div>
    <div class="tab-panel" id="tab2">
      <h3>About Content</h3>
      <p>Learn more about us and our mission.</p>
    </div>
    <div class="tab-panel" id="tab3">
      <h3>Services Content</h3>
      <p>Discover the services we offer to our clients.</p>
    </div>
    <div class="tab-panel" id="tab4">
      <h3>Contact Content</h3>
      <p>Get in touch with us through various channels.</p>
    </div>
  </div>
</div>`,
  css: /*css*/`.tabs {
  max-width: 500px;
  margin: 0 auto;
}

.tab-list {
  position: relative;
  display: flex;
  background: var(--light-gray);
  border-radius: var(--border-radius);
  padding: 4px;
  margin-bottom: 20px;
}

.tab-button {
  flex: 1;
  min-width: 112px;
  padding: 10px 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85em;
  color: var(--secondary-color);
  transition: color 0.3s ease;
  position: relative;
  z-index: 2;
  border-radius: calc(var(--border-radius) - 4px);
}

.tab-button.active {
  color: var(--dark-gray);
}

.tab-indicator {
  position: absolute;
  top: 4px;
  left: 4px;
  height: calc(100% - 8px);
  background: white;
  border-radius: calc(var(--border-radius) - 4px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1;
}

.tab-content {
  min-height: 150px;
}

.tab-panel {
  display: none;
  animation: fadeIn 0.3s ease;
}

.tab-panel.active {
  display: block;
}

.tab-panel h3 {
  margin-bottom: 10px;
  color: var(--dark-gray);
}

.tab-panel p {
  color: var(--text-color);
  line-height: 1.6;
  margin: 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}`,
  js: /*js*/`const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tab-button');
const tabPanels = tabs.querySelectorAll('.tab-panel');
const indicator = tabs.querySelector('.tab-indicator');

function updateIndicator(activeButton) {
  const buttonRect = activeButton.getBoundingClientRect();
  const containerRect = activeButton.parentElement.getBoundingClientRect();
  
  const left = buttonRect.left - containerRect.left;
  const width = buttonRect.width;
  
  indicator.style.left = left + 'px';
  indicator.style.width = width + 'px';
}

function switchTab(targetTab) {
  // Remove active class from all buttons and panels
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabPanels.forEach(panel => panel.classList.remove('active'));
  
  // Add active class to clicked button and corresponding panel
  const activeButton = document.querySelector(\`[data-tab="\${targetTab}"]\`);
  const activePanel = document.getElementById(targetTab);
  
  activeButton.classList.add('active');
  activePanel.classList.add('active');
  
  // Update indicator position
  updateIndicator(activeButton);
}

// Initialize indicator position
updateIndicator(document.querySelector('.tab-button.active'));

// Add click listeners
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');
    switchTab(targetTab);
  });
});

// Update indicator on window resize
window.addEventListener('resize', () => {
  const activeButton = document.querySelector('.tab-button.active');
  updateIndicator(activeButton);
});`
};