export default {
  title: 'Animated Button',
  description: 'A simple button with hover and active animations',
  type: 'element',
  dateAdded: '2025-06-21',
  thumbnail: '/assets/images/snippets/thumbnails/button.svg',
  html: /*html*/ `
    <div class="container">
      <button class="button">Hover me! Click me!</button>
    </div>`,
  css: /*css*/ `
    .container {
      display: flex;
      gap: 10px;
    }
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
      border-right: 2px solid red;
      border-left: 2px solid cyan;
    }
    .button:active {
      background-color: #d0d0d0;
      border-right: 2px solid #111;
      border-left: 2px solid #111;
    }
    .button.active {
      background-color: var(--accent);
      border-right: 2px solid #111;
      border-left: 2px solid #111;
    }`,
  js: /*js*/ `
      document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
          this.classList.toggle('active');
          console.log('Button clicked!');
        });
      });`,
};
