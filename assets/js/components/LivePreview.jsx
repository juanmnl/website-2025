import React, { useEffect, useRef, useState } from 'react';

const LivePreview = ({ html, css, js }) => {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      // Clear previous content
      container.innerHTML = '';
      
      // Create a shadow DOM for isolation (if supported)
      let shadowRoot;
      if (container.attachShadow) {
        shadowRoot = container.attachShadow({ mode: 'open' });
      } else {
        // Fallback for browsers without shadow DOM support
        shadowRoot = container;
      }

      // Create style element
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        /* Reset and base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :host {
          display: block;
          font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: #24292F;
          background-color: transparent;
          padding: 20px;
        }

        /* CSS Variables */
        :host, :root {
          --primary-color: #010101;
          --secondary-color: #353a3f;
          --text-color: #24292F;
          --light-gray: #fdfbef;
          --background: #fff6e9;
          --dark-gray: #1b1e21;
          --white: #f5f5f5;
          --butter: #ffe8a8;
          --burnt-butter: #ffedcc;
          --border: #F5F4EE;
          --border-radius: 20px;
          --font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          --max-width: 960px;
          --letter-spacing: 0.013em;
        }

        /* Custom CSS from the snippet */
        ${css}
      `;

      // Create content wrapper
      const contentWrapper = document.createElement('div');
      contentWrapper.innerHTML = html;

      // Append to shadow root
      shadowRoot.appendChild(styleElement);
      shadowRoot.appendChild(contentWrapper);

      // Execute JavaScript after a short delay to ensure DOM is ready
      if (js && js.trim()) {
        setTimeout(() => {
          try {
            // Create a function scope to execute the JS
            const executeJS = new Function('container', `
              // Make common DOM methods available in the scope
              const document = container.shadowRoot || container;
              const querySelectorAll = (selector) => document.querySelectorAll(selector);
              const querySelector = (selector) => document.querySelector(selector);
              
              ${js}
            `);
            
            executeJS(container);
          } catch (jsError) {
            console.warn('JavaScript execution error in preview:', jsError);
          }
        }, 100);
      }

      setError(null);
    } catch (err) {
      console.error('Preview rendering error:', err);
      setError(err.message);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [html, css, js]);

  if (error) {
    return (
      <div style={{
        padding: '20px',
        background: '#fee',
        border: '1px solid #fcc',
        borderRadius: '8px',
        color: '#c33'
      }}>
        Preview Error: {error}
      </div>
    );
  }

  return (
    // <div
    //   ref={containerRef}
    //   style={{
    //     display: 'contents',
    //     width: '100%',
    //     minHeight: '200px',
    //     border: '1px solid var(--border)',
    //     borderRadius: 'var(--border-radius)',
    //     backgroundColor: 'var(--background)',
    //     overflow: 'hidden',
    //     position: 'relative'
    //   }}
    // />,
    <div
      ref={containerRef}
      style={{
        display: 'contents',
        width: '100%',
        borderRadius: 'var(--border-radius)',
        overflow: 'hidden',
        position: 'relative'
      }}
    />
  );
};

export default LivePreview;