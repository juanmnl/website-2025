export default {
  id: 9,
  title: 'Modal Dialog',
  description:
    'Accessible modal with focus management',
  type: 'component',
  dateAdded: '2025-07-01',
  thumbnail: '/assets/images/snippets/thumbnails/modal-dialog.svg',
  html: /*html*/ `
  <button class="modal-trigger">Open Modal</button>

  <div class="modal-overlay hidden"></div>
  <div class="modal hidden">
    <div class="modal-header">
      <h3>Modal Title</h3>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <p>This is a modal dialog with overlay and animations.</p>
    </div>
    <div class="modal-footer">
      <button class="button modal-cancel">Close</button>
    </div>
  </div>`,
  css: /*css*/ `
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--background);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 1001;
    max-width: 500px;
    width: 90%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.3s ease;
  }

  .modal.hidden,
  .modal-overlay.hidden {
    opacity: 0;
    visibility: hidden;
  }

  .modal.hidden {
    transform: translate(-50%, -50%) scale(0.9);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0;
    border-bottom: 1px solid var(--border);
    margin-bottom: 20px;
  }

  .modal-header h3 {
    margin: 0;
    color: var(--dark-gray);
  }

  .modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--secondary-color);
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }

  .modal-close:hover {
    background-color: var(--light-gray);
  }

  .modal-body {
    padding: 0 20px;
    color: var(--text-color);
  }

  .modal-footer {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }`,
  js: /*js*/`
  const modalTrigger = document.querySelector('.modal-trigger');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const modalCancel = document.querySelector('.modal-cancel');

  function openModal() {
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }

  modalTrigger.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });`,
};
