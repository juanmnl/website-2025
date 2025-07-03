import React, { useState } from 'react';

const FigmaAutoLayoutTutorial = ({ tutorial }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <div className="tutorial-container">
      <div className="tutorial-header">
        <div className="tutorial-meta">
          <span className="difficulty">{tutorial.difficulty}</span>
          <span className="time">{tutorial.estimatedTime}</span>
        </div>
        <div className="tutorial-tools">
          <strong>Tools needed:</strong> {tutorial.tools.join(", ")}
        </div>
      </div>

      <div className="step-navigator">
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

      <div className="tutorial-step">
        <h4>Step {currentStep + 1}: {tutorial.steps[currentStep].title}</h4>
        <img 
          src={tutorial.steps[currentStep].image} 
          alt={tutorial.steps[currentStep].title}
          className="step-image"
        />
        <p>{tutorial.steps[currentStep].description}</p>
        
        {tutorial.steps[currentStep].tips && (
          <div className="step-tips">
            <strong>Tips:</strong>
            <ul>
              {tutorial.steps[currentStep].tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="tutorial-navigation">
        <button 
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentStep(Math.min(tutorial.steps.length - 1, currentStep + 1))}
          disabled={currentStep === tutorial.steps.length - 1}
        >
          Next
        </button>
      </div>

      {currentStep === tutorial.steps.length - 1 && (
        <div className="final-result">
          <h4>Final Result</h4>
          <img src={tutorial.finalResult} alt="Final result" />
        </div>
      )}
    </div>
  );
};

export default {
  title: "Mastering Figma Auto Layout",
  description: "Create responsive, flexible designs using Figma's Auto Layout feature",
  type: "graphic",
  contentType: "figma",
  thumbnail: "/assets/images/tutorials/figma-auto-layout-thumb.jpg",
  difficulty: "intermediate",
  estimatedTime: "20 minutes",
  steps: [
    {
      id: 1,
      title: "Create Your Base Frame",
      description: "Start by creating a frame (F) that will contain your card component. Make it 320x200px for a standard card size.",
      image: "/assets/images/tutorials/figma-auto-layout/step1.jpg",
      tips: [
        "Use the Frame tool (F) or Rectangle (R) then convert to frame",
        "Name your frame 'Card Component' for organization",
        "Set a light background color to see your progress"
      ]
    },
    {
      id: 2,
      title: "Add Content Elements",
      description: "Add a header text, body text, and a button inside your frame. Don't worry about positioning yet - just get the content in.",
      image: "/assets/images/tutorials/figma-auto-layout/step2.jpg",
      tips: [
        "Use Text tool (T) for header and body",
        "Create a rectangle for the button background",
        "Use different text sizes: Header (18px), Body (14px), Button (12px)"
      ]
    },
    {
      id: 3,
      title: "Apply Auto Layout to Main Frame",
      description: "Select your main frame and press Shift+A to add Auto Layout. Set direction to Vertical and spacing to 16px.",
      image: "/assets/images/tutorials/figma-auto-layout/step3.jpg",
      tips: [
        "Shift+A is the keyboard shortcut for Auto Layout",
        "Choose 'Vertical' direction for stacked content",
        "16px spacing gives comfortable breathing room"
      ]
    },
    {
      id: 4,
      title: "Configure Button Auto Layout",
      description: "Select your button and apply Auto Layout (Shift+A). Set horizontal direction with 12px horizontal padding and 8px vertical padding.",
      image: "/assets/images/tutorials/figma-auto-layout/step4.jpg",
      tips: [
        "Buttons should use horizontal Auto Layout",
        "Padding makes buttons feel more clickable",
        "Set button to 'Hug contents' for both width and height"
      ]
    },
    {
      id: 5,
      title: "Set Responsive Behavior",
      description: "Configure how elements behave when the frame resizes. Set text to 'Fill container' width and button to 'Hug contents'.",
      image: "/assets/images/tutorials/figma-auto-layout/step5.jpg",
      tips: [
        "Text should fill available width for readability",
        "Buttons should hug their content to stay compact",
        "Use 'Fixed' for elements that shouldn't change size"
      ]
    },
    {
      id: 6,
      title: "Test Responsiveness",
      description: "Drag the frame handles to resize and watch how your Auto Layout responds. Text should reflow and button should stay fixed size.",
      image: "/assets/images/tutorials/figma-auto-layout/step6.jpg",
      tips: [
        "Drag from the right edge to test horizontal responsiveness",
        "Try extreme sizes to test edge cases",
        "Check that content doesn't overflow or get cut off"
      ]
    }
  ],
  tools: ["Frame Tool", "Text Tool", "Auto Layout", "Constraints"],
  finalResult: "/assets/images/tutorials/figma-auto-layout/final.jpg",
  liveComponent: FigmaAutoLayoutTutorial
};