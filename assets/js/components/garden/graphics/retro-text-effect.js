export default {
  title: 'Creating a Retro Text Effect',
  description:
    'Step-by-step guide to create a vintage 80s text effect in Photoshop',
  type: 'graphic',
  dateAdded: '2025-06-28',
  contentType: 'photoshop',
  thumbnail: '/assets/images/tutorials/retro-text-thumb.jpg',
  difficulty: 'intermediate',
  estimatedTime: '15 minutes',
  steps: [
    {
      id: 1,
      title: 'Create New Document',
      description:
        'Start with a 1920x1080 canvas with a dark background (#1a1a1a). This gives us plenty of space to work and the dark background will make our neon colors pop.',
      image: '/assets/images/tutorials/retro-text/step1.jpg',
      tips: [
        'Use RGB color mode for web projects',
        'Set resolution to 72 DPI for screen use',
        'Save your document immediately as .PSD',
      ],
    },
    {
      id: 2,
      title: 'Add Base Text',
      description:
        "Type your text using a bold, geometric font. We'll use 'RETRO' in all caps. Make it large - around 150px font size.",
      image: '/assets/images/tutorials/retro-text/step2.jpg',
      tips: [
        'Try fonts like Impact, Bebas Neue, or Futura Bold',
        'Make text large and bold for maximum impact',
        'Center the text on your canvas',
      ],
    },
    {
      id: 3,
      title: 'Apply Gradient Overlay',
      description:
        "Right-click the text layer and choose 'Blending Options'. Add a Gradient Overlay with colors from hot pink (#ff006e) to cyan (#00f5ff).",
      image: '/assets/images/tutorials/retro-text/step3.jpg',
      tips: [
        "Use blend mode 'Normal'",
        'Set angle to 45 degrees',
        'Scale to 100%',
      ],
    },
    {
      id: 4,
      title: 'Add Outer Glow',
      description:
        'In the same Layer Style dialog, add an Outer Glow. Use a bright cyan color (#00f5ff) with Screen blend mode.',
      image: '/assets/images/tutorials/retro-text/step4.jpg',
      tips: ['Set opacity to 75%', 'Size around 20-30px', 'Spread to 10%'],
    },
    {
      id: 5,
      title: 'Create Neon Effect',
      description:
        'Duplicate the text layer (Ctrl/Cmd + J). Clear the layer styles on the copy and add a bright stroke in cyan.',
      image: '/assets/images/tutorials/retro-text/step5.jpg',
      tips: [
        'Use stroke size of 3-5px',
        'Position: Outside',
        'Add a subtle outer glow to the stroke',
      ],
    },
  ],
  tools: ['Text Tool', 'Layer Styles', 'Gradient Tool', 'Blending Options'],
  finalResult: '/assets/images/tutorials/retro-text/final.jpg',
};
