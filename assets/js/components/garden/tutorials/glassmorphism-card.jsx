import React, { useState } from 'react';

const GlassmorphismTutorial = ({ tutorial }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className='tutorial-container'>
      <div className='tutorial-header'>
        <div className='tutorial-meta'>
          <span className='difficulty'>{tutorial.difficulty}</span>
          <span className='time'>{tutorial.estimatedTime}</span>
        </div>
        <div className='tutorial-tools'>
          <strong>Tools needed:</strong> {tutorial.tools.join(', ')}
        </div>
      </div>

      <div className='step-navigator'>
        {tutorial.steps.map((step, index) => (
          <button
            key={step.id}
            className={`step-btn ${currentStep === index ? 'active' : ''}`}
            onClick={() => setCurrentStep(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className='tutorial-step'>
        <h4>
          Step {currentStep + 1}: {tutorial.steps[currentStep].title}
        </h4>
        <img
          src={tutorial.steps[currentStep].image}
          alt={tutorial.steps[currentStep].title}
          className='step-image'
        />
        <p>{tutorial.steps[currentStep].description}</p>

        {tutorial.steps[currentStep].tips && (
          <div className='step-tips'>
            <strong>Tips:</strong>
            <ul>
              {tutorial.steps[currentStep].tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='tutorial-navigation'>
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep(Math.min(tutorial.steps.length - 1, currentStep + 1))
          }
          disabled={currentStep === tutorial.steps.length - 1}
        >
          Next
        </button>
      </div>

      {currentStep === tutorial.steps.length - 1 && (
        <div className='final-result'>
          <h4>Final Result</h4>
          <img src={tutorial.finalResult} alt='Final result' />
        </div>
      )}
    </div>
  );
};

export default {
  id: 102,
  title: 'Glassmorphism Card Design',
  description:
    'Create modern glass-effect cards with backdrop blur and transparency',
  type: 'tutorial',
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
  liveComponent: GlassmorphismTutorial,
};
