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
          --accent: #ffe8a8;
          --burnt-accent: #ffedcc;
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
            // Create a safer execution context
            const executeJS = new Function(
              'container',
              'document',
              'querySelector',
              'querySelectorAll',
              'getElementById',
              'createElement',
              `
              // Provide proper document context
              const shadowDoc = container.shadowRoot || container;
              
              // Override document methods to work with shadow DOM
              const originalDocument = document;
              document = {
                ...originalDocument,
                querySelector: (selector) => shadowDoc.querySelector(selector),
                querySelectorAll: (selector) => shadowDoc.querySelectorAll(selector),
                getElementById: (id) => shadowDoc.getElementById(id),
                createElement: (tagName) => originalDocument.createElement(tagName)
              };
              
              ${js}
              `
            );

            executeJS(
              container,
              shadowRoot.ownerDocument || document,
              (selector) => shadowRoot.querySelector(selector),
              (selector) => shadowRoot.querySelectorAll(selector),
              (id) => shadowRoot.getElementById(id),
              (tagName) => document.createElement(tagName)
            );
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
      <div
        style={{
          padding: '20px',
          background: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
          color: '#c33',
        }}
      >
        Preview Error: {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        display: 'contents',
        minHeight: '200px',
        border: '1px solid var(--border)',
        borderRadius: 'var(--border-radius)',
        backgroundColor: 'var(--background)',
        overflow: 'hidden',
        position: 'relative',
      }}
    />
  );
};

export default LivePreview;
