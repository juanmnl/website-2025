import React, { useState, useEffect } from 'react';
import { gardenItems } from './gardenIndex';

const DigitalGarden = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filter, setFilter] = useState('all');

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

  // Copy to clipboard function
  const copyToClipboard = async (text) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        // You could add a toast notification here
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  // Filter items
  const filteredItems = gardenItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'code') return ['component', 'layout', 'animation'].includes(item.type);
    if (filter === 'tutorial') return item.type === 'tutorial';
    return item.type === filter;
  });

  return (
    <div className="digital-garden">
      {/* Filter Controls */}
      <div className="garden-filters">
        <button 
          className={`button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`button ${filter === 'code' ? 'active' : ''}`}
          onClick={() => setFilter('code')}
        >
          Code
        </button>
        <button 
          className={`button ${filter === 'tutorial' ? 'active' : ''}`}
          onClick={() => setFilter('tutorial')}
        >
          Tutorials
        </button>
      </div>

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
              {selectedItem.type === 'tutorial' ? (
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

                  {selectedItem.liveComponent && (
                    <section className="drawer-section">
                      <h3>Live Preview</h3>
                      <div className="garden-preview">
                        <selectedItem.liveComponent />
                      </div>
                    </section>
                  )}

                  <section className="drawer-section">
                    <h3>HTML</h3>
                    <div className="garden-code-block">
                      <div className="garden-code-header">
                        HTML
                        <button 
                          className="copy-btn"
                          onClick={() => copyToClipboard(selectedItem.html)}
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
                          onClick={() => copyToClipboard(selectedItem.css)}
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
                          onClick={() => copyToClipboard(selectedItem.js)}
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