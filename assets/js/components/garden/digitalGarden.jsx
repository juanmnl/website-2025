import React, { useState, useEffect, useMemo } from 'react';
import { gardenItems } from './gardenIndex';
import LivePreview from '../LivePreview';

const DigitalGarden = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  // Sort by date (newest first)
  const sortByDate = (array) => {
    return [...array].sort((a, b) => {
      const dateA = new Date(a.dateAdded || '2024-01-01');
      const dateB = new Date(b.dateAdded || '2024-01-01');
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
  const filteredItems = useMemo(() => {
    let items = gardenItems;

    // Apply filter
    if (filter === 'code') {
      items = items.filter(item => ['component', 'layout', 'animation'].includes(item.type));
    } else if (filter === 'graphic') {
      items = items.filter(item => item.type === 'graphic');
    } else if (filter === 'latest') {
      // Latest shows all items but sorted by date
      return sortByDate(items);
    }
    // 'all' shows everything in original order

    return items;
  }, [filter]);

  // Helper function to check if item is recent
  const isRecent = (dateAdded) => {
    if (!dateAdded) return false;
    const itemDate = new Date(dateAdded);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return itemDate > weekAgo;
  };

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
          className={`button ${filter === 'latest' ? 'active' : ''}`}
          onClick={() => setFilter('latest')}
        >
          Latest
        </button>
        <button 
          className={`button ${filter === 'code' ? 'active' : ''}`}
          onClick={() => setFilter('code')}
        >
          Code
        </button>
        <button 
          className={`button ${filter === 'graphic' ? 'active' : ''}`}
          onClick={() => setFilter('graphic')}
        >
          Graphics
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