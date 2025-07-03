export default {
  title: 'Long shadow Button',
  description: 'A simple button with long shadow and states',
  type: 'element',
  dateAdded: '2025-06-30',
  thumbnail: '/assets/images/snippets/thumbnails/button-shadow.svg',
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
      border: 3px solid #111;
      color: #24292F;
      box-shadow: 12px 12px 8px hsl(0deg 0% 0% / 50%), 6px 6px 0 #000000;
      background-color: var(--background);
    }

    .button:hover {
      background-color: #dcdbd5;
      box-shadow: 2px 2px 2px hsl(0deg 0% 0% / 0%), 4px 4px 0 #000000;
      background-color: var(--background);
    }

    .button.active {
      background-color: var(--butter);
      box-shadow: 0px 0px 0px hsl(0deg 0% 0% / 0%), 1px 1px 0 #000000;
      background-color: var(--background);
    }`,
  js: /*js*/ `
      document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
          this.classList.toggle('active');
          console.log('Button clicked!');
        });
      });`,
};
