import React, { useState } from 'react';

const UXPostViewer = ({ post }) => {
  const [activeExample, setActiveExample] = useState(0);

  if (!post || !post.content) {
    return <div>Loading...</div>;
  }

  const { content } = post;

  return (
    <div className="ux-post-viewer">
      {/* Header */}
      <header className="ux-post-header">
        <div className="ux-post-meta">
          <span className="ux-category">{post.category}</span>
          <span className="ux-read-time">{post.readTime}</span>
        </div>
      </header>

      {/* Overview */}
      <section className="ux-section">
        <h2>What is {post.title}?</h2>
        <div className="ux-content">
          <p>{content.overview}</p>
          {content.background && <p>{content.background}</p>}
        </div>
      </section>

      {/* Key Insights */}
      <section className="ux-section">
        <h2>Key Insights</h2>
        <div className="ux-content">
          <p>{content.keyInsights}</p>
        </div>
      </section>

      {/* Examples */}
      {content.examples && (
        <section className="ux-section">
          <h2>Examples in Practice</h2>
          <div className="ux-examples">
            <div className="example-tabs">
              {content.examples.map((example, index) => (
                <button
                  key={index}
                  className={`example-tab ${activeExample === index ? 'active' : ''}`}
                  onClick={() => setActiveExample(index)}
                >
                  {example.title.replace(/^(Good|Bad): /, '')}
                </button>
              ))}
            </div>
            
            <div className="example-content">
              <div className="example-details">
                <h3>{content.examples[activeExample].title}</h3>
                <p>{content.examples[activeExample].description}</p>
                {content.examples[activeExample].analysis && (
                  <p className="example-analysis">{content.examples[activeExample].analysis}</p>
                )}
              </div>
              
              <div className="example-image">
                <img 
                  src={content.examples[activeExample].image} 
                  alt={content.examples[activeExample].title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none' }}>
                  <span>📊</span>
                  <p>Example illustration would appear here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Application */}
      <section className="ux-section">
        <h2>Applying This in Your Work</h2>
        <div className="ux-content">
          <p>{content.applicationGuide}</p>
          {content.practicalTips && <p>{content.practicalTips}</p>}
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="ux-section">
        <h2>Common Pitfalls</h2>
        <div className="ux-content">
          <p>{content.commonPitfalls}</p>
          {content.avoidanceTips && <p>{content.avoidanceTips}</p>}
        </div>
      </section>

      {/* Related Laws */}
      <section className="ux-section">
        <h2>Related UX Laws</h2>
        <div className="related-laws">
          {content.relatedLaws?.map((law, index) => (
            <div key={index} className="related-law-card">
              <h4>{law.title}</h4>
              <p>{law.description}</p>
              <span className="law-connection">{law.connection}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UXPostViewer;