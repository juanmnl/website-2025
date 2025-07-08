export default {
  title: 'Glassmorphism Card',
  description: 'Glass-effect cards with backdrop blur',
  type: 'graphic',
  dateAdded: '2025-06-27',
  contentType: 'figma',
  thumbnail: '/assets/images/tutorials/thumbnails/glassmorphism.png',
  difficulty: 'beginner',
  estimatedTime: '10 minutes',
  steps: [
    {
      id: 1,
      title: 'Set Up Background',
      description:
        'Create a New Artboard (A) – (800x600px) – and add a colorful background image. You can also use vibrant colors like a purple to pink gradient.',
      image: '/assets/images/tutorials/glass-card/step1.jpg',
      tips: [
        'Try gradients from #8B5CF6 to #EC4899',
        'Use radial gradient for more depth',
        'Consider adding a bit of noise for texture',
      ],
    },
    {
      id: 2,
      title: 'Create Card Shape',
      description:
        'Use the Frame Tool (F) to create a rounded rectangle for your card. Make it about 300x400px and center it on your canvas.',
      image: '/assets/images/tutorials/glass-card/step2.jpg',
      tips: [
        'Set corner radius to 20-30px',
        'Use white fill',
        'Keep it centered for balance',
      ],
    },
    {
      id: 3,
      title: 'Apply Glass Effect',
      description:
        'Duplicate the card object and rename it to "Outline", remove the fill, and add a stroke. Lower the fill opacity of the card to 20% and add layer effects: Inner Shadow, Drop Shadow, and most importantly, a background blur.',
      image: '/assets/images/tutorials/glass-card/step3.jpg',
      tips: [
        'Outline Stroke: 1px, white, center (make sure the outline layer is on top of the card',
        'Inner Shadow: White 20%, position 0, blur 20, spread 4',
        'Drop Shadow: Black 15%, position Y:5, blur 10, spread 10',
        'Background Blur: Uniform, 20',
      ],
    },
    {
      id: 4,
      title: 'Add Content',
      description:
        'Add your card content - title and description. Keep text white or very light colors.',
      image: '/assets/images/tutorials/glass-card/step4.jpg',
      tips: [
        'Use bold and medium fonts for better readability',
        'Keep hierarchy clear with font sizes',
        'Add subtle text shadows for depth',
      ],
    },
  ],
  tools: ['Frame Tool', 'Text Tool', 'Frame Effects'],
  finalResult: '/assets/images/tutorials/glass-card/final.jpg',
};
