import React from 'react';

const AnimatedButtonLive = () => (
  <button
    className='button'
    style={{
      position: 'relative',
      display: 'inline-block',
      fontFamily: 'monospace',
      padding: '2px 10px',
      fontWeight: 600,
      borderRadius: '3px',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      borderRight: '1px solid #111',
      borderLeft: '1px solid #111',
      borderTop: 'none',
      borderBottom: 'none',
      background: 'transparent',
      color: '#24292F',
    }}
  >
    Click me!
  </button>
);

export default {
  id: 1,
  title: 'Animated Button Component',
  description: 'A sleek button with hover animations and multiple variants',
  type: 'element',
  thumbnail: '/assets/images/placeholders/button.svg',
  html: `<button class="button">Click me!</button>`,
  css: `.button {
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
  liveComponent: AnimatedButtonLive,
};
