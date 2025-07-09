export default {
  title: 'Loading Skeleton Screen',
  description: 'Skeleton loading animation',
  type: 'animation',
  dateAdded: '2025-7-08',
  thumbnail: '/assets/images/th3.png',
  html: /*html*/ `<div class="skeleton-demo">
  <button class="demo-button" onclick="toggleSkeletonState()">
    Toggle Loading State
  </button>
  
  <div class="content-container">
    <!-- Real Content -->
    <div class="real-content">
      <div class="profile-card">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="Profile" class="profile-avatar">
        <div class="profile-info">
          <h3>John Doe</h3>
          <p>Senior Frontend Developer</p>
          <p>Passionate about creating amazing user experiences with modern web technologies. Love working with React, TypeScript, and CSS animations.</p>
        </div>
      </div>
      
      <div class="article-list">
        <div class="article-item">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=120&h=80&fit=crop" alt="Article" class="article-image">
          <div class="article-content">
            <h4>Building Modern Web Applications</h4>
            <p>Learn the latest techniques for building scalable and maintainable web applications...</p>
            <span class="article-meta">5 min read • Dec 21, 2024</span>
          </div>
        </div>
        
        <div class="article-item">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=80&fit=crop" alt="Article" class="article-image">
          <div class="article-content">
            <h4>CSS Animation Best Practices</h4>
            <p>Discover how to create smooth and performant animations that enhance user experience...</p>
            <span class="article-meta">3 min read • Dec 20, 2024</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Skeleton Content -->
    <div class="skeleton-content hidden">
      <div class="profile-card">
        <div class="skeleton skeleton-avatar"></div>
        <div class="profile-info">
          <div class="skeleton skeleton-text skeleton-title"></div>
          <div class="skeleton skeleton-text skeleton-subtitle"></div>
          <div class="skeleton skeleton-text skeleton-line"></div>
          <div class="skeleton skeleton-text skeleton-line-short"></div>
        </div>
      </div>
      
      <div class="article-list">
        <div class="article-item">
          <div class="skeleton skeleton-image"></div>
          <div class="article-content">
            <div class="skeleton skeleton-text skeleton-title"></div>
            <div class="skeleton skeleton-text skeleton-line"></div>
            <div class="skeleton skeleton-text skeleton-line-short"></div>
            <div class="skeleton skeleton-text skeleton-meta"></div>
          </div>
        </div>
        
        <div class="article-item">
          <div class="skeleton skeleton-image"></div>
          <div class="article-content">
            <div class="skeleton skeleton-text skeleton-title"></div>
            <div class="skeleton skeleton-text skeleton-line"></div>
            <div class="skeleton skeleton-text skeleton-line-short"></div>
            <div class="skeleton skeleton-text skeleton-meta"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="animation-controls">
    <p>Animation Style:</p>
    <button onclick="changeSkeletonAnimation('default')" class="animation-btn active">Shimmer</button>
    <button onclick="changeSkeletonAnimation('pulse')" class="animation-btn">Pulse</button>
    <button onclick="changeSkeletonAnimation('wave')" class="animation-btn">Wave</button>
  </div>
</div>`,
  css: /*css*/ `.skeleton-demo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.demo-button {
  background: var(--butter);
  color: var(--dark-gray);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.demo-button:hover {
  background: var(--burnt-butter);
  transform: translateY(-2px);
}

.animation-controls {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  background: var(--light-gray);
  border-radius: var(--border-radius);
}

.animation-controls p {
  margin-bottom: 15px;
  color: var(--dark-gray);
  font-weight: 600;
}

.animation-btn {
  background: white;
  color: var(--text-color);
  border: 2px solid var(--border);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.animation-btn:hover {
  border-color: var(--butter);
  background: var(--butter);
  color: var(--dark-gray);
}

.animation-btn.active {
  background: var(--butter);
  border-color: var(--butter);
  color: var(--dark-gray);
  font-weight: 600;
}

.content-container {
  position: relative;
}

.real-content,
.skeleton-content {
  transition: opacity 0.5s ease;
}

.hidden {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

/* Profile Card */
.profile-card {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-info h3 {
  margin: 0 0 8px 0;
  color: var(--dark-gray);
  font-size: 1.2rem;
}

.profile-info p:first-of-type {
  margin: 0 0 12px 0;
  color: var(--secondary-color);
  font-weight: 500;
}

.profile-info p:last-of-type {
  margin: 0;
  color: var(--text-color);
  line-height: 1.5;
}

/* Article List */
.article-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.article-image {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.article-content {
  flex: 1;
}

.article-content h4 {
  margin: 0 0 8px 0;
  color: var(--dark-gray);
  font-size: 1.1rem;
}

.article-content p {
  margin: 0 0 12px 0;
  color: var(--text-color);
  line-height: 1.5;
}

.article-meta {
  font-size: 0.85rem;
  color: var(--secondary-color);
}

/* Skeleton Styles */
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skeleton-image {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  flex-shrink: 0;
}

.skeleton-text {
  height: 16px;
  margin-bottom: 8px;
}

.skeleton-title {
  height: 20px;
  width: 70%;
  margin-bottom: 12px;
}

.skeleton-subtitle {
  height: 16px;
  width: 50%;
  margin-bottom: 16px;
}

.skeleton-line {
  width: 100%;
  margin-bottom: 8px;
}

.skeleton-line-short {
  width: 75%;
  margin-bottom: 12px;
}

.skeleton-meta {
  height: 14px;
  width: 40%;
  margin-bottom: 0;
}

/* Skeleton Animation */
@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Pulse Variant */
.skeleton-pulse {
  animation: skeleton-pulse 1.5s infinite;
}

@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Wave Variant */
.skeleton-wave {
  position: relative;
  overflow: hidden;
}

.skeleton-wave::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: skeleton-wave-move 1.5s infinite;
}

@keyframes skeleton-wave-move {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
  }
  
  .article-item {
    flex-direction: column;
  }
  
  .article-image,
  .skeleton-image {
    width: 100%;
    height: 120px;
  }
  
  .animation-controls {
    margin-top: 20px;
  }
  
  .animation-btn {
    display: block;
    margin: 5px auto;
    width: 120px;
  }
}`,
  js: /*js*/ `// Global variables
let isSkeletonLoading = false;
let currentAnimation = 'default';

// Main toggle function - now globally accessible
function toggleSkeletonState() {
  const realContent = document.querySelector('.real-content');
  const skeletonContent = document.querySelector('.skeleton-content');
  const button = document.querySelector('.demo-button');
  
  if (!realContent || !skeletonContent || !button) return;
  
  isSkeletonLoading = !isSkeletonLoading;
  
  if (isSkeletonLoading) {
    // Show skeleton
    realContent.classList.add('hidden');
    skeletonContent.classList.remove('hidden');
    button.textContent = 'Show Real Content';
    button.disabled = true;
    
    // Re-enable button after animation
    setTimeout(() => {
      button.disabled = false;
    }, 500);
  } else {
    // Show real content
    skeletonContent.classList.add('hidden');
    realContent.classList.remove('hidden');
    button.textContent = 'Show Loading State';
    button.disabled = true;
    
    // Re-enable button after animation
    setTimeout(() => {
      button.disabled = false;
    }, 500);
  }
}

// Animation type changer - now globally accessible
function changeSkeletonAnimation(type) {
  const skeletons = document.querySelectorAll('.skeleton');
  const buttons = document.querySelectorAll('.animation-btn');
  
  currentAnimation = type;
  
  // Update button states
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Find and activate the current button
  buttons.forEach(btn => {
    if ((type === 'default' && btn.textContent === 'Shimmer') ||
        (type === 'pulse' && btn.textContent === 'Pulse') ||
        (type === 'wave' && btn.textContent === 'Wave')) {
      btn.classList.add('active');
    }
  });
  
  // Apply animation classes
  skeletons.forEach(skeleton => {
    skeleton.classList.remove('skeleton-pulse', 'skeleton-wave');
    if (type === 'pulse') {
      skeleton.classList.add('skeleton-pulse');
    } else if (type === 'wave') {
      skeleton.classList.add('skeleton-wave');
    }
    // 'default' uses the base skeleton animation
  });
}

// Auto-demo functionality
let autoDemoInterval;

function startAutoDemo() {
  autoDemoInterval = setInterval(() => {
    toggleSkeletonState();
  }, 3000);
}

function stopAutoDemo() {
  if (autoDemoInterval) {
    clearInterval(autoDemoInterval);
    autoDemoInterval = null;
  }
}

// Initialize the demo
setTimeout(() => {
  // Set initial state
  changeSkeletonAnimation('default');
  
  // Start auto-demo after a short delay
  setTimeout(() => {
    startAutoDemo();
  }, 1000);
}, 100);

// Stop auto-demo when user interacts with the button
const demoButton = document.querySelector('.demo-button');
if (demoButton) {
  demoButton.addEventListener('click', () => {
    stopAutoDemo();
  });
}

// Make functions available globally for onclick handlers
window.toggleSkeletonState = toggleSkeletonState;
window.changeSkeletonAnimation = changeSkeletonAnimation;`,
};
