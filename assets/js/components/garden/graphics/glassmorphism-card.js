export default {
  title: 'Glassmorphism Card Design',
  description:
    'Create modern glass-effect cards with backdrop blur and transparency',
  type: 'graphic',
  dateAdded: '2025-06-27',
  contentType: 'photoshop',
  thumbnail: '/assets/images/tutorials/glass-card-thumb.jpg',
  difficulty: 'beginner',
  estimatedTime: '10 minutes',
  steps: [
    {
      id: 1,
      title: 'Set Up Background',
      description:
        'Create a new document (800x600px) and add a colorful gradient background. Use vibrant colors like purple to pink gradient.',
      image: '/assets/images/tutorials/glass-card/step1.jpg',
      tips: [
        'Try gradients from #8B5CF6 to #EC4899',
        'Use radial gradient for more depth',
        'Consider adding some noise for texture',
      ],
    },
    {
      id: 2,
      title: 'Create Card Shape',
      description:
        'Use the Rectangle Tool to create a rounded rectangle for your card. Make it about 300x400px and center it on your canvas.',
      image: '/assets/images/tutorials/glass-card/step2.jpg',
      tips: [
        'Set corner radius to 20-30px',
        'Use white fill temporarily',
        'Keep it centered for balance',
      ],
    },
    {
      id: 3,
      title: 'Apply Glass Effect',
      description:
        'Lower the fill opacity to 20% and add layer effects: Inner Shadow, Drop Shadow, and most importantly, a subtle stroke.',
      image: '/assets/images/tutorials/glass-card/step3.jpg',
      tips: [
        'Inner Shadow: White, 0px distance, 5px size',
        'Drop Shadow: Black, 50% opacity, 10px distance',
        'Stroke: 1px, white, 30% opacity',
      ],
    },
    {
      id: 4,
      title: 'Add Content',
      description:
        'Add your card content - title, description, and maybe a small icon. Keep text white or very light colors.',
      image: '/assets/images/tutorials/glass-card/step4.jpg',
      tips: [
        'Use semi-bold fonts for better readability',
        'Keep hierarchy clear with font sizes',
        'Add subtle text shadows for depth',
      ],
    },
  ],
  tools: ['Rectangle Tool', 'Text Tool', 'Layer Effects', 'Gradient Tool'],
  finalResult: '/assets/images/tutorials/glass-card/final.jpg',
};
