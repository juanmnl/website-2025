export default {
  title: 'Photocopy Effect',
  description: 'Simulate photocopy and smudgy scan lines',
  type: 'graphic',
  dateAdded: '2025-07-07',
  contentType: 'photoshop',
  thumbnail: '/assets/images/tutorials/thumbnails/photocopy.png',
  difficulty: 'intermediate',
  estimatedTime: '25 minutes',
  steps: [
    {
      id: 1,
      title: 'Select your image',
      description:
        "You'll need a portrait photo with a clean background. Open in Photoshop.",
      image: '/assets/images/tutorials/photocopy-effect/step1.jpg',
      tips: [
        'Choose a portrait (or a selfie) with good contrast',
        'Make sure the background is not too busy',
      ],
    },
    {
      id: 2,
      title: 'Remove Portrait Background',
      description:
        'Use the Pen Tool or Quick Selection to carefully remove the background from your portrait. Create a clean silhouette.',
      image: '/assets/images/tutorials/photocopy-effect/step2.jpg',
      tips: [
        'Pen Tool gives the most precise selection',
        'Zoom in for detailed edge work',
        'Save your selection as a path for later use',
      ],
    },
    {
      id: 3,
      title: 'Create Base Composition',
      description:
        'Place your landscape image as the background layer. Position your cut-out portrait on top and resize as needed.',
      image: '/assets/images/tutorials/photocopy-effect/step3.jpg',
      tips: [
        'Portrait should be large enough to show detail',
        'Consider the rule of thirds for positioning',
        'Leave room for the effect to breathe',
      ],
    },
    {
      id: 4,
      title: 'Apply Screen Blend Mode',
      description:
        "Change the portrait layer's blend mode to 'Screen'. This will make the dark areas transparent while keeping lighter areas visible.",
      image: '/assets/images/tutorials/photocopy-effect/step4.jpg',
      tips: [
        'Screen mode makes darker pixels transparent',
        'You should see the landscape showing through',
        "Don't worry if it looks too bright yet",
      ],
    },
    {
      id: 5,
      title: 'Add Layer Mask',
      description:
        "Add a layer mask to the portrait layer. Use a soft black brush to paint away areas where you don't want the effect.",
      image: '/assets/images/tutorials/photocopy-effect/step5.jpg',
      tips: [
        'Paint with black to hide, white to reveal',
        'Use a soft brush (0% hardness)',
        'Focus on the face and key features',
      ],
    },
    {
      id: 6,
      title: 'Fine-tune with Curves',
      description:
        'Add a Curves adjustment layer clipped to the portrait. Adjust to get the perfect balance between the two images.',
      image: '/assets/images/tutorials/photocopy-effect/step6.jpg',
      tips: [
        'Clip the adjustment layer to the portrait layer',
        'Lift the shadows slightly for more detail',
        "Don't overdo the contrast",
      ],
    },
    {
      id: 7,
      title: 'Add Color Grading',
      description:
        'Use Color Balance or a Color Lookup Table to add a cohesive color grade that unifies both images.',
      image: '/assets/images/tutorials/photocopy-effect/step7.jpg',
      tips: [
        'Warm tones work well for nature scenes',
        'Keep it subtle - less is more',
        'Match the mood of your landscape image',
      ],
    },
  ],
  tools: ['Brush Tool', 'Layer Masks', 'Blend Modes', 'Curves'],
  finalResult: '/assets/images/tutorials/photocopy-effect/final.jpg',
};
