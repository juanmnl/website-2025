export default {
  title: 'Toast Notification',
  description: 'Notifications with success, error, and warning states',
  type: 'component',
  dateAdded: '2025-07-02',
  thumbnail: '/assets/images/snippets/thumbnails/toast-notifications.svg',
  html: /*html*/ `<div class="toast-demo">
  <button class="button" onclick="showToast('Success! Operation completed.', 'success')">
    Success Toast
  </button>
  <button class="button" onclick="showToast('Error! Something went wrong.', 'error')">
    Error Toast
  </button>
  <button class="button" onclick="showToast('Warning! Please check your input.', 'warning')">
    Warning Toast
  </button>
</div>

<div id="toast-container"></div>`,
  css: /*css*/ `/* Toast Demo Buttons */
.toast-demo {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

/* Toast Container */
#toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  pointer-events: none;
}

/* Toast Base Styles */
.toast {
  min-width: 300px;
  margin-bottom: 10px;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: toast-slide-in 0.3s ease-out;
  pointer-events: auto;
  overflow: hidden;
}

.toast.removing {
  animation: toast-slide-out 0.3s ease-in forwards;
}

/* Toast Types */
.toast--success {
  background: #10b981;
  color: white;
}

.toast--error {
  background: #ef4444;
  color: white;
}

.toast--warning {
  background: #f59e0b;
  color: white;
}

/* Toast Content */
.toast-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.toast-message {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.toast-icon {
  font-weight: bold;
  font-size: 0.9em;
}

.toast-text {
  font-size: 0.85em;
  font-weight: 500;
}

.toast-close {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.2em;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  opacity: 0.8;
}

.toast-close:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.2);
}

/* Toast Progress Bar */
.toast-progress {
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.toast-progress-bar {
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  transform-origin: left;
  animation: toast-progress 3s linear forwards;
}

/* Animations */
@keyframes toast-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toast-slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes toast-progress {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  #toast-container {
    left: 20px;
    right: 20px;
  }
  
  .toast {
    min-width: auto;
  }
}`,
  js: /*js*/ `// Toast notification system
(function() {
  let toastCounter = 0;
  
  // Get the current document context
  const currentDoc = document;

  function createToast(message, type = 'success', duration = 3000) {
    const container = currentDoc.getElementById('toast-container');
    if (!container) {
      console.error('Toast container not found');
      return;
    }
    
    const toastId = 'toast-' + (++toastCounter);
    
    // Get icon based on type
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠'
    };
    
    // Create toast element
    const toast = currentDoc.createElement('div');
    toast.id = toastId;
    toast.className = \`toast toast--\${type}\`;
    
    toast.innerHTML = \`
      <div class="toast-content">
        <div class="toast-message">
          <span class="toast-icon">\${icons[type] || '●'}</span>
          <span class="toast-text">\${message}</span>
        </div>
        <button class="toast-close" onclick="removeToast('\${toastId}')">&times;</button>
      </div>
      <div class="toast-progress">
        <div class="toast-progress-bar"></div>
      </div>
    \`;
    
    // Add to container
    container.appendChild(toast);
    
    // Auto remove after duration
    setTimeout(() => {
      removeToast(toastId);
    }, duration);
    
    return toastId;
  }

  function removeToast(toastId) {
    const toast = currentDoc.getElementById(toastId);
    if (toast) {
      toast.classList.add('removing');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }
  }

  // Make functions globally available
  window.showToast = function(message, type) {
    createToast(message, type);
  };

  window.removeToast = removeToast;

  // Example: Auto-show a welcome toast
  setTimeout(() => {
    showToast('Hey! Looking good there.', 'success');
  }, 500);
})();`,
};
