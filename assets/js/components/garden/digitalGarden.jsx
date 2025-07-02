import React, { useState, useEffect, useMemo } from 'react';
import { gardenItems } from './gardenIndex';
import LivePreview from '../LivePreview';

const DigitalGarden = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState(null);

  // Sort by date (newest first)
  const sortByDate = (array) => {
    return [...array].sort((a, b) => {
      const dateA = new Date(a.dateAdded || '2025-01-01');
      const dateB = new Date(b.dateAdded || '2025-01-01');
      return dateB - dateA; // Newest first
    });
  };

  const openDrawer = (item) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedItem(null), 300);
  };

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDrawerOpen]);

  // Copy to clipboard function with toast
  const copyToClipboard = async (text, type = 'Code') => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        showToast(`${type} copied to clipboard!`, 'success');
      } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy to clipboard', 'error');
      }
    } else {
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(`${type} copied to clipboard!`, 'success');
      } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy to clipboard', 'error');
      }
    }
  };

  // Filter items and ALWAYS sort by date (most recent first)
  const filteredItems = useMemo(() => {
    let items = gardenItems;

    // Apply filter
    if (filter === 'element') {
      items = items.filter(item => item.type === 'element');
    } else if (filter === 'component') {
      items = items.filter(item => item.type === 'component');
    } else if (filter === 'layout') {
      items = items.filter(item => item.type === 'layout');
    } else if (filter === 'animation') {
      items = items.filter(item => item.type === 'animation');
    } else if (filter === 'graphic') {
      items = items.filter(item => item.type === 'graphic');
    }
    // 'all' shows everything

    // ALWAYS sort by date (newest first)
    return sortByDate(items);
  }, [filter]);

  // Helper function to check if item is recent
  const isRecent = (dateAdded) => {
    if (!dateAdded) return false;
    const itemDate = new Date(dateAdded);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return itemDate > weekAgo;
  };

  // Get filter display name and description
  const getFilterInfo = () => {
    switch (filter) {
      case 'element':
        return {
          name: 'Elements',
          description: 'Basic UI elements and building blocks'
        };
      case 'component':
        return {
          name: 'Components',
          description: 'Interactive components and widgets'
        };
      case 'layout':
        return {
          name: 'Layouts',
          description: 'Layout patterns and grid systems'
        };
      case 'animation':
        return {
          name: 'Animations',
          description: 'CSS animations and transitions'
        };
      case 'graphic':
        return {
          name: 'Graphics',
          description: 'Step-by-step guides for visual design'
        };
      default:
        return {
          name: 'All Items',
          description: 'Everything in the digital garden'
        };
    }
  };

  const filterInfo = getFilterInfo();

  return (
    <div className="digital-garden">
      {/* Toast Notification */}
      {toast && (
        <div className={`toast toast--${toast.type}`}>
          <div className="toast-content">
            <span className="toast-icon">
              {toast.type === 'success' ? '✓' : '✕'}
            </span>
            <span className="toast-message">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Filter Controls */}
      <div className="garden-filters">
        <button 
          className={`button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`button ${filter === 'element' ? 'active' : ''}`}
          onClick={() => setFilter('element')}
        >
          Elements
        </button>
        <button 
          className={`button ${filter === 'component' ? 'active' : ''}`}
          onClick={() => setFilter('component')}
        >
          Components
        </button>
        <button 
          className={`button ${filter === 'layout' ? 'active' : ''}`}
          onClick={() => setFilter('layout')}
        >
          Layouts
        </button>
        <button 
          className={`button ${filter === 'animation' ? 'active' : ''}`}
          onClick={() => setFilter('animation')}
        >
          Animations
        </button>
        <button 
          className={`button ${filter === 'graphic' ? 'active' : ''}`}
          onClick={() => setFilter('graphic')}
        >
          Graphics
        </button>
      </div>

      {/* Content Area */}
      {filteredItems.length > 0 ? (
        <div className="garden-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="garden-card"
              onClick={() => openDrawer(item)}
            >
              <div className="garden-media">
                <img src={item.thumbnail} alt={item.title} />
                <span className="garden-card-badge">{item.type}</span>
                {item.difficulty && (
                  <span className="garden-difficulty-badge">{item.difficulty}</span>
                )}
                {isRecent(item.dateAdded) && (
                  <span className="garden-new-badge">NEW</span>
                )}
              </div>
              <div className="garden-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.estimatedTime && (
                  <div className="garden-meta">
                    <span className="estimated-time">⏱ {item.estimatedTime}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="garden-empty-state">
          <div className="empty-state-icon">🌱</div>
          <h3 className="empty-state-title">No {filterInfo.name.toLowerCase()} found</h3>
          <p className="empty-state-description">
            {filter === 'element' && "No basic elements are available yet, but they're being crafted!"}
            {filter === 'component' && "No interactive components are ready yet, but they're in development!"}
            {filter === 'layout' && "No layout patterns are available at the moment, but they're being designed!"}
            {filter === 'animation' && "No animations are planted yet, but they'll be moving in soon!"}
            {filter === 'graphic' && "No visual design tutorials are available at the moment, but new ones are being planted!"}
            {filter === 'all' && "The garden is empty right now, but it will bloom soon with amazing content!"}
          </p>
          <div className="empty-state-actions">
            {filter !== 'all' && (
              <button 
                className="button"
                onClick={() => setFilter('all')}
              >
                View All Items
              </button>
            )}
          </div>
        </div>
      )}

      {isDrawerOpen && <div className="garden-overlay" onClick={closeDrawer} />}

      <div className={`garden-drawer ${isDrawerOpen ? 'garden-drawer--open' : ''}`}>
        {selectedItem && (
          <>
            <header className="garden-drawer-header">
              <div className="garden-drawer-title">
                <h2>{selectedItem.title}</h2>
                <div className="garden-drawer-meta">
                  <span className="garden-drawer-type">{selectedItem.type}</span>
                  {selectedItem.difficulty && (
                    <span className="garden-drawer-difficulty">{selectedItem.difficulty}</span>
                  )}
                  {selectedItem.estimatedTime && (
                    <span className="garden-drawer-time">⏱ {selectedItem.estimatedTime}</span>
                  )}
                </div>
              </div>
              <button className="garden-drawer-close" onClick={closeDrawer}>
                ×
              </button>
            </header>

            <div className="garden-drawer-content">
              {selectedItem.type === 'graphic' ? (
                // Tutorial Layout
                <>
                  <section className="drawer-section">
                    <h3>Description</h3>
                    <p>{selectedItem.description}</p>
                    {selectedItem.tools && (
                      <div className="tutorial-tools">
                        <strong>Tools needed:</strong> {selectedItem.tools.join(", ")}
                      </div>
                    )}
                  </section>

                  <section className="drawer-section">
                    <h3>Tutorial Steps</h3>
                    <div className="tutorial-preview">
                      <selectedItem.liveComponent tutorial={selectedItem} />
                    </div>
                  </section>
                </>
              ) : (
                // Code Snippet Layout
                <>
                  <section className="drawer-section">
                    <h3>Description</h3>
                    <p>{selectedItem.description}</p>
                  </section>

                  <section className="drawer-section">
                    <h3>Live Preview</h3>
                    <div className="garden-preview">
                      <LivePreview 
                        html={selectedItem.html}
                        css={selectedItem.css}
                        js={selectedItem.js}
                      />
                    </div>
                  </section>

                  <section className="drawer-section">
                    <h3>HTML</h3>
                    <div className="garden-code-block">
                      <div className="garden-code-header">
                        HTML
                        <button 
                          className="copy-btn"
                          onClick={() => copyToClipboard(selectedItem.html, 'HTML')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '0.8em',
                            opacity: 0.8
                          }}
                        >
                          Copy
                        </button>
                      </div>
                      <pre className="garden-code">
                        <code>{selectedItem.html}</code>
                      </pre>
                    </div>
                  </section>

                  <section className="drawer-section">
                    <h3>CSS</h3>
                    <div className="garden-code-block">
                      <div className="garden-code-header">
                        CSS
                        <button 
                          className="copy-btn"
                          onClick={() => copyToClipboard(selectedItem.css, 'CSS')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '0.8em',
                            opacity: 0.8
                          }}
                        >
                          Copy
                        </button>
                      </div>
                      <pre className="garden-code">
                        <code>{selectedItem.css}</code>
                      </pre>
                    </div>
                  </section>

                  <section className="drawer-section">
                    <h3>JavaScript</h3>
                    <div className="garden-code-block">
                      <div className="garden-code-header">
                        JavaScript
                        <button 
                          className="copy-btn"
                          onClick={() => copyToClipboard(selectedItem.js, 'JavaScript')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '0.8em',
                            opacity: 0.8
                          }}
                        >
                          Copy
                        </button>
                      </div>
                      <pre className="garden-code">
                        <code>{selectedItem.js}</code>
                      </pre>
                    </div>
                  </section>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DigitalGarden;