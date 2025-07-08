import React, { useState, useRef } from 'react';

const StyleGuideGenerator = () => {
  const [styleGuide, setStyleGuide] = useState({
    project: {
      name: 'My Design System',
      description: 'A comprehensive design system for modern applications',
      version: '1.0.0'
    },
    colors: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      accent: '#10B981',
      neutral: '#6B7280',
      palette: {}
    },
    typography: {
      primaryFont: 'Inter',
      secondaryFont: 'Georgia',
      baseSize: 16,
      scale: 1.25,
      weights: [400, 500, 600, 700]
    },
    spacing: {
      base: 8,
      scale: [0.5, 1, 1.5, 2, 3, 4, 6, 8, 12, 16, 24]
    },
    branding: {
      logo: null,
      logomark: null,
      logoText: 'Brand'
    }
  });

  const [activeTab, setActiveTab] = useState('colors');
  const fileInputRef = useRef(null);

  // Generate color palette from base colors
  const generateColorPalette = () => {
    const colors = ['primary', 'secondary', 'accent', 'neutral'];
    const palette = {};

    colors.forEach(colorName => {
      const baseColor = styleGuide.colors[colorName];
      palette[colorName] = generateColorVariants(baseColor);
    });

    setStyleGuide(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        palette
      }
    }));
  };

  // Generate color variants (50, 100, 200, ..., 900)
  const generateColorVariants = (hexColor) => {
    const hsl = hexToHsl(hexColor);
    const variants = {};
    
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    shades.forEach((shade, index) => {
      const lightness = shade === 500 ? hsl.l : 
        shade < 500 ? 
          hsl.l + (90 - hsl.l) * (1 - shade / 500) :
          hsl.l * (1 - (shade - 500) / 500);
      
      variants[shade] = hslToHex(hsl.h, hsl.s, Math.max(0, Math.min(100, lightness)));
    });

    return variants;
  };

  // Generate typography scale
  const generateTypographyScale = () => {
    const { baseSize, scale } = styleGuide.typography;
    const sizes = {};
    const labels = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];
    
    labels.forEach((label, index) => {
      const power = index - 2; // base is at index 2
      sizes[label] = Math.round(baseSize * Math.pow(scale, power));
    });

    return sizes;
  };

  // Handle file upload for logos
  const handleFileUpload = (type) => {
    const file = fileInputRef.current?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setStyleGuide(prev => ({
          ...prev,
          branding: {
            ...prev.branding,
            [type]: e.target.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Export as CSS
  const exportCSS = () => {
    const css = generateCSSOutput();
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${styleGuide.project.name.toLowerCase().replace(/\s+/g, '-')}-styles.css`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export Figma tokens (JSON format that can be imported)
  const exportFigmaTokens = () => {
    const tokens = generateFigmaTokens();
    const blob = new Blob([JSON.stringify(tokens, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${styleGuide.project.name.toLowerCase().replace(/\s+/g, '-')}-tokens.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Generate CSS output
  const generateCSSOutput = () => {
    const typographyScale = generateTypographyScale();
    
    let css = `/* ${styleGuide.project.name} Design System v${styleGuide.project.version} */\n`;
    css += `/* ${styleGuide.project.description} */\n\n`;

    // CSS Custom Properties
    css += `:root {\n`;
    
    // Colors
    css += `  /* Colors */\n`;
    Object.entries(styleGuide.colors.palette).forEach(([colorName, variants]) => {
      Object.entries(variants).forEach(([shade, hex]) => {
        css += `  --color-${colorName}-${shade}: ${hex};\n`;
      });
    });

    // Typography
    css += `\n  /* Typography */\n`;
    css += `  --font-primary: '${styleGuide.typography.primaryFont}', system-ui, sans-serif;\n`;
    css += `  --font-secondary: '${styleGuide.typography.secondaryFont}', serif;\n`;
    
    Object.entries(typographyScale).forEach(([size, value]) => {
      css += `  --text-${size}: ${value}px;\n`;
    });

    // Spacing
    css += `\n  /* Spacing */\n`;
    styleGuide.spacing.scale.forEach((multiplier, index) => {
      css += `  --space-${index}: ${styleGuide.spacing.base * multiplier}px;\n`;
    });

    css += `}\n\n`;

    // Utility classes
    css += generateUtilityClasses(typographyScale);

    return css;
  };

  // Generate utility classes
  const generateUtilityClasses = (typographyScale) => {
    let css = `/* Utility Classes */\n\n`;

    // Typography utilities
    css += `/* Typography */\n`;
    Object.keys(typographyScale).forEach(size => {
      css += `.text-${size} { font-size: var(--text-${size}); }\n`;
    });
    
    css += `\n.font-primary { font-family: var(--font-primary); }\n`;
    css += `.font-secondary { font-family: var(--font-secondary); }\n\n`;

    // Color utilities
    css += `/* Colors */\n`;
    Object.entries(styleGuide.colors.palette).forEach(([colorName, variants]) => {
      Object.keys(variants).forEach(shade => {
        css += `.text-${colorName}-${shade} { color: var(--color-${colorName}-${shade}); }\n`;
        css += `.bg-${colorName}-${shade} { background-color: var(--color-${colorName}-${shade}); }\n`;
      });
    });

    return css;
  };

  // Generate Figma tokens
  const generateFigmaTokens = () => {
    const typographyScale = generateTypographyScale();
    
    return {
      global: {
        colors: styleGuide.colors.palette,
        typography: {
          fontFamilies: {
            primary: styleGuide.typography.primaryFont,
            secondary: styleGuide.typography.secondaryFont
          },
          fontSizes: typographyScale,
          fontWeights: styleGuide.typography.weights.reduce((acc, weight) => {
            acc[weight] = weight;
            return acc;
          }, {})
        },
        spacing: styleGuide.spacing.scale.reduce((acc, multiplier, index) => {
          acc[index] = styleGuide.spacing.base * multiplier;
          return acc;
        }, {})
      }
    };
  };

  // Color utility functions
  const hexToHsl = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  // Auto-generate palette when colors change
  React.useEffect(() => {
    generateColorPalette();
  }, [styleGuide.colors.primary, styleGuide.colors.secondary, styleGuide.colors.accent, styleGuide.colors.neutral]);

  const renderColorsTab = () => (
    <div className="tab-content">
      <div className="section">
        <h3>Base Colors</h3>
        <div className="color-inputs">
          {['primary', 'secondary', 'accent', 'neutral'].map(colorName => (
            <div key={colorName} className="color-input-group">
              <label>{colorName.charAt(0).toUpperCase() + colorName.slice(1)}</label>
              <div className="color-input-wrapper">
                <input
                  type="color"
                  value={styleGuide.colors[colorName]}
                  onChange={(e) => setStyleGuide(prev => ({
                    ...prev,
                    colors: {
                      ...prev.colors,
                      [colorName]: e.target.value
                    }
                  }))}
                />
                <input
                  type="text"
                  value={styleGuide.colors[colorName]}
                  onChange={(e) => setStyleGuide(prev => ({
                    ...prev,
                    colors: {
                      ...prev.colors,
                      [colorName]: e.target.value
                    }
                  }))}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Generated Palette</h3>
        <div className="color-palette">
          {Object.entries(styleGuide.colors.palette).map(([colorName, variants]) => (
            <div key={colorName} className="color-family">
              <h4>{colorName}</h4>
              <div className="color-swatches">
                {Object.entries(variants).map(([shade, hex]) => (
                  <div key={shade} className="color-swatch" style={{ backgroundColor: hex }}>
                    <span className="shade-label">{shade}</span>
                    <span className="hex-label">{hex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTypographyTab = () => {
    const typographyScale = generateTypographyScale();
    
    return (
      <div className="tab-content">
        <div className="section">
          <h3>Font Settings</h3>
          <div className="typography-controls">
            <div className="input-group">
              <label>Primary Font</label>
              <input
                type="text"
                value={styleGuide.typography.primaryFont}
                onChange={(e) => setStyleGuide(prev => ({
                  ...prev,
                  typography: {
                    ...prev.typography,
                    primaryFont: e.target.value
                  }
                }))}
              />
            </div>
            <div className="input-group">
              <label>Secondary Font</label>
              <input
                type="text"
                value={styleGuide.typography.secondaryFont}
                onChange={(e) => setStyleGuide(prev => ({
                  ...prev,
                  typography: {
                    ...prev.typography,
                    secondaryFont: e.target.value
                  }
                }))}
              />
            </div>
            <div className="input-group">
              <label>Base Size (px)</label>
              <input
                type="number"
                value={styleGuide.typography.baseSize}
                onChange={(e) => setStyleGuide(prev => ({
                  ...prev,
                  typography: {
                    ...prev.typography,
                    baseSize: parseInt(e.target.value)
                  }
                }))}
              />
            </div>
            <div className="input-group">
              <label>Scale Ratio</label>
              <input
                type="number"
                step="0.1"
                value={styleGuide.typography.scale}
                onChange={(e) => setStyleGuide(prev => ({
                  ...prev,
                  typography: {
                    ...prev.typography,
                    scale: parseFloat(e.target.value)
                  }
                }))}
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Typography Scale</h3>
          <div className="typography-preview">
            {Object.entries(typographyScale).map(([size, value]) => (
              <div key={size} className="typography-sample">
                <div className="sample-meta">
                  <span className="size-name">{size}</span>
                  <span className="size-value">{value}px</span>
                </div>
                <div 
                  className="sample-text" 
                  style={{ 
                    fontSize: `${value}px`,
                    fontFamily: styleGuide.typography.primaryFont
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderBrandingTab = () => (
    <div className="tab-content">
      <div className="section">
        <h3>Brand Assets</h3>
        <div className="branding-controls">
          <div className="input-group">
            <label>Brand Name</label>
            <input
              type="text"
              value={styleGuide.branding.logoText}
              onChange={(e) => setStyleGuide(prev => ({
                ...prev,
                branding: {
                  ...prev.branding,
                  logoText: e.target.value
                }
              }))}
            />
          </div>

          <div className="logo-upload">
            <h4>Logo</h4>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={() => handleFileUpload('logo')}
            />
            <button 
              className="upload-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Logo
            </button>
            {styleGuide.branding.logo && (
              <div className="logo-preview">
                <img src={styleGuide.branding.logo} alt="Logo" />
              </div>
            )}
          </div>

          <div className="logo-upload">
            <h4>Logomark</h4>
            <button 
              className="upload-btn"
              onClick={() => {
                fileInputRef.current?.click();
                fileInputRef.current.onchange = () => handleFileUpload('logomark');
              }}
            >
              Upload Logomark
            </button>
            {styleGuide.branding.logomark && (
              <div className="logo-preview">
                <img src={styleGuide.branding.logomark} alt="Logomark" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderExportTab = () => (
    <div className="tab-content">
      <div className="section">
        <h3>Export Options</h3>
        <div className="export-controls">
          <div className="export-option">
            <h4>CSS Variables & Utilities</h4>
            <p>Export as a complete CSS file with custom properties and utility classes</p>
            <button className="export-btn" onClick={exportCSS}>
              Download CSS
            </button>
          </div>

          <div className="export-option">
            <h4>Figma Design Tokens</h4>
            <p>Export as JSON tokens that can be imported into Figma plugins</p>
            <button className="export-btn" onClick={exportFigmaTokens}>
              Download Tokens
            </button>
          </div>

          <div className="export-option">
            <h4>Copy to Figma</h4>
            <p>Copy formatted text that can be pasted directly into Figma</p>
            <button 
              className="export-btn"
              onClick={() => {
                const figmaText = generateFigmaText();
                navigator.clipboard.writeText(figmaText);
                alert('Copied to clipboard! Paste in Figma.');
              }}
            >
              Copy for Figma
            </button>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Preview</h3>
        <div className="style-guide-preview">
          <div className="preview-header">
            <h2>{styleGuide.project.name}</h2>
            <p>{styleGuide.project.description}</p>
          </div>
          
          <div className="preview-colors">
            <h3>Colors</h3>
            <div className="preview-color-grid">
              {Object.entries(styleGuide.colors.palette).map(([colorName, variants]) => (
                <div key={colorName} className="preview-color-family">
                  <h4>{colorName}</h4>
                  <div className="preview-swatches">
                    {[500, 600, 700].map(shade => (
                      <div 
                        key={shade}
                        className="preview-swatch"
                        style={{ backgroundColor: variants[shade] }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="preview-typography">
            <h3>Typography</h3>
            <div style={{ fontFamily: styleGuide.typography.primaryFont }}>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <p>Body text with primary font family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const generateFigmaText = () => {
    let text = `${styleGuide.project.name} Design System\n\n`;
    text += `COLORS\n`;
    
    Object.entries(styleGuide.colors.palette).forEach(([colorName, variants]) => {
      text += `${colorName.toUpperCase()}\n`;
      Object.entries(variants).forEach(([shade, hex]) => {
        text += `${shade}: ${hex}\n`;
      });
      text += '\n';
    });

    return text;
  };

  return (
    <div className="style-guide-generator">
      <header className="generator-header">
        <div className="project-info">
          <input
            type="text"
            className="project-name"
            value={styleGuide.project.name}
            onChange={(e) => setStyleGuide(prev => ({
              ...prev,
              project: {
                ...prev.project,
                name: e.target.value
              }
            }))}
          />
          <input
            type="text"
            className="project-description"
            value={styleGuide.project.description}
            onChange={(e) => setStyleGuide(prev => ({
              ...prev,
              project: {
                ...prev.project,
                description: e.target.value
              }
            }))}
          />
        </div>
      </header>

      <nav className="generator-tabs">
        {['colors', 'typography', 'branding', 'export'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <main className="generator-content">
        {activeTab === 'colors' && renderColorsTab()}
        {activeTab === 'typography' && renderTypographyTab()}
        {activeTab === 'branding' && renderBrandingTab()}
        {activeTab === 'export' && renderExportTab()}
      </main>
    </div>
  );
};

export default StyleGuideGenerator;