export default {
  id: 2,
  title: 'Card Layout Pattern',
  description: 'Simple card layout with clean typography',
  type: 'layout',
  dateAdded: "2025-06-22",
  thumbnail: '/assets/images/snippets/thumbnails/card.svg',
  html: /*html*/`
  <div class="project-card">
    <img src="/assets/images/th1.png" alt="Project Title" class="card-image">
    <div class="card-content">
      <h3 class="card-title">Project Title</h3>
      <p class="card-description">Brief description</p>
    </div>
  </div>`,
  css: /*css*/`
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
  js: /*js*/`
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
      console.log('Card clicked');
    });
  });`,
};
