import React from 'react';

const ProjectCardLive = () => (
  <div className='project-card'>
    <img
      src='/assets/images/th1.png'
      alt='Project Title'
      className='card-image'
    />
    <div className='card-content'>
      <h3 className='card-title'>Project Title</h3>
      <p className='card-description'>Brief description</p>
    </div>
  </div>
);

export default {
  id: 2,
  title: 'Card Layout Pattern',
  description: 'Responsive card grid with hover effects and clean typography',
  type: 'layout',
  thumbnail: '/assets/images/placeholders/card.svg',
  html: `<div class="project-card">
  <img src="image.jpg" alt="Project Title" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Project Title</h3>
    <p class="card-description">Brief description</p>
  </div>
</div>`,
  css: `.project-card {
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
  js: `document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function() {
    console.log('Card clicked');
  });
});`,
  liveComponent: ProjectCardLive,
};
