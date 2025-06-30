import React, { useState } from 'react';

const DigitalGarden = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const gardenItems = [
    {
      id: 1,
      title: "Animated Button Component",
      description: "A sleek button with hover animations and multiple variants",
      type: "component",
      thumbnail: "/assets/images/th1.png",
      html: '<button class="button">Click me!</button>',
      css: /* css */`
      .button {
        position: relative;
        display: inline-block;
        font-family: monospace;
        padding: 2px 10px;
        font-weight: 600;
        border-radius: 3px;
        font-size: 0.75rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;
        border-right: 1px solid #111;
        border-left: 1px solid #111;
        border-top: none;
        border-bottom: none;
        background: transparent;
        color: #24292F;
    }

    .button:hover {
        background-color: #dcdbd5;
        border-right: 1px solid red;
        border-left: 1px solid cyan;
    }`,
      js: `document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', function() {
    console.log('Button clicked!');
  });
});`,
      liveComponent: () => (
        <button className="button">
          Click me!
        </button>
      )
    },
    {
      id: 2,
      title: "Card Layout Pattern",
      description: "Responsive card grid with hover effects and clean typography",
      type: "layout",
      thumbnail: "/assets/images/th1.png",
      html: /* html */`
        <div class="project-card">
            <img src="image.jpg" alt="Project Title" class="card-image">
            <div class="card-content">
                <h3 class="card-title">Project Title</h3>
                <p class="card-description">Brief description</p>
            </div>
        </div>`,
      css: /* css */`
        .project-card {
            border: 1px solid var(--border);
            background-color: var(--background);
            border-radius: var(--border-radius);
            overflow: hidden;
            transition: box-shadow 0.3s ease;
            cursor: pointer;
        }

        .project-card:hover {
            box-shadow: 0 4px 8px rgba(2, 2, 2, 0.1);
        }

        .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .card-content {
            padding: 0.8em;
        }

        .card-title {
            font-size: 0.8em;
            text-transform: uppercase;
            margin: 0.8em 0 0.5em;
            color: var(--dark-gray);
        }

        .card-description {
            margin: 0;
            font-size: 0.75em;
            color: var(--secondary-color);
        }`,
      js: /* js */`
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                console.log('Card clicked');
            });
        });`,
      liveComponent: () => (
        <div className="project-card">
          <img src="/assets/images/th1.png" alt="Project Title" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Project Title</h3>
            <p className="card-description">Brief description</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Loading Animation",
      description: "CSS-only loading animations with pulse effects",
      type: "animation",
      thumbnail: "/assets/images/th1.png",
      html: `<div class="loading-container">
  <div class="status-indicator"></div>
  <span class="loading-text">Loading...</span>
</div>`,
      css: `.loading-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

.status-indicator {
  width: 3px;
  height: 16px;
  background: var(--butter);
  border-radius: 2px;
  animation: pulse 1s infinite;
}

.loading-text {
  color: var(--secondary-color);
  font-size: 0.9em;
}`,
      js: `function showLoading() {
  document.querySelector('.loading-container').style.display = 'flex';
}

function hideLoading() {
  document.querySelector('.loading-container').style.display = 'none';
}`,
      liveComponent: () => (
        <div className="loading-container">
          <div className="status-indicator"></div>
          <span className="loading-text">Loading...</span>
        </div>
      )
    }
  ];

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

  return (
    <div className="digital-garden">
        <div className="garden-grid">
        {gardenItems.map((item) => (
            <article
            key={item.id}
            className="garden-card"
            onClick={() => openDrawer(item)}
            >
            <div className="garden-media">
                <img src={item.thumbnail} alt={item.title} />
                <span className="garden-card-badge">{item.type}</span>
            </div>
            <div className="garden-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
                <span className="garden-drawer-type">{selectedItem.type}</span>
              </div>
              <button className="garden-drawer-close" onClick={closeDrawer}>
                ×
              </button>
            </header>

            <div className="garden-drawer-content">
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
                  <div className="garden-code-header">HTML</div>
                  <pre className="garden-code">
                    <code>{selectedItem.html}</code>
                  </pre>
                </div>
              </section>

              <section className="drawer-section">
                <h3>CSS</h3>
                <div className="garden-code-block">
                  <div className="garden-code-header">CSS</div>
                  <pre className="garden-code">
                    <code>{selectedItem.css}</code>
                  </pre>
                </div>
              </section>

              <section className="drawer-section">
                <h3>JavaScript</h3>
                <div className="garden-code-block">
                  <div className="garden-code-header">JavaScript</div>
                  <pre className="garden-code">
                    <code>{selectedItem.js}</code>
                  </pre>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DigitalGarden;