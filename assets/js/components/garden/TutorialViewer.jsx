import React, { useState, useRef } from 'react';

const TutorialViewer = ({ tutorial }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepNavigatorRef = useRef(null);

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
    
    setTimeout(() => {
      if (stepNavigatorRef.current) {
        const drawerContent = stepNavigatorRef.current.closest('.garden-drawer-content');
        
        if (drawerContent) {
          const scrollTop = stepNavigatorRef.current.offsetTop - 120;
          
          drawerContent.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  const goToPreviousStep = () => {
    const newStep = Math.max(0, currentStep - 1);
    goToStep(newStep);
  };

  const goToNextStep = () => {
    const newStep = Math.min(tutorial.steps.length - 1, currentStep + 1);
    goToStep(newStep);
  };
  
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

      <div className="step-navigator" ref={stepNavigatorRef}>
        {tutorial.steps.map((step, index) => (
          <button
            key={step.id || index}
            className={`step-btn ${currentStep === index ? 'active' : ''}`}
            onClick={() => goToStep(index)}
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
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button 
          onClick={goToNextStep}
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

export default TutorialViewer;