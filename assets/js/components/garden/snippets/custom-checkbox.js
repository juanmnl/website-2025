export default {
  id: 5,
  title: 'Custom Checkbox',
  description: 'Pure CSS styled checkbox with smooth transition',
  type: 'element',
  dateAdded: "2025-06-23",
  thumbnail: '/assets/images/snippets/thumbnails/checkbox.svg',
  html: /*html*/`
  <label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
    Remember me
  </label>`,
  css: /*css*/`
  .custom-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.9em;
    color: var(--text-color);
    gap: 10px;
  }

  .custom-checkbox input {
    display: none;
  }

  .checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid var(--secondary-color);
    border-radius: 3px;
    position: relative;
    transition: all 0.3s ease;
  }

  .custom-checkbox input:checked + .checkmark {
    background-color: var(--butter);
    border-color: var(--dark-gray);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 1px;
    width: 4px;
    height: 9px;
    border: solid var(--dark-gray);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .custom-checkbox input:checked + .checkmark:after {
    display: block;
  }`,
  js: /*js*/`
  document.querySelectorAll('.custom-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      console.log('Checkbox:', this.checked ? 'checked' : 'unchecked');
    });
  });`,
};
