import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Set active link based on current path
    const currentPath = window.location.pathname;
    const pathMap = {
      '/': 'index.html',
      '/index.html': 'index.html',
      '/about.html': 'about.html',
      '/garden.html': 'garden.html',
      '/archive.html': 'archive.html',
      '/contact.html': 'contact.html'
    };
    if (currentPath.includes('/projects/')) {
      setActiveLink('index.html');
    } else {
      setActiveLink(pathMap[currentPath] || '');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const preloadPage = (href) => {
    // Avoid preloading the same page
    if (href === window.location.pathname || href === window.location.pathname.replace('/', '')) {
      return;
    }

    // Check if already preloaded
    const existingLink = document.querySelector(`link[rel="prefetch"][href="${href}"]`);
    if (existingLink) return;

    // Create prefetch link
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  };

  const handleLinkClick = (e, href) => {
    const currentPath = window.location.pathname;
    const normalizedCurrent = currentPath === '/' ? '/index.html' : currentPath;
    const normalizedHref = href === '/' ? '/index.html' : href;

    // If clicking on the same page, prevent navigation
    if (normalizedCurrent === normalizedHref) {
      e.preventDefault();
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(false);
    document.body.classList.add('page-transitioning');
    
    setTimeout(() => {
      window.location.href = href;
    }, 50);
  };

  const handleMouseEnter = (href) => {
    preloadPage(href);
  };

  return (
    <header>
      <div className="container">
        <div className="logo-status">
          <div className="status-indicator"></div>
          <a 
            href="/index.html" 
            className="logo"
            onMouseEnter={() => handleMouseEnter('/index.html')}
            onClick={(e) => handleLinkClick(e, '/index.html')}
          >
            Designer @Huridocs -
            <span className="highlight">
              <small>Available for work!</small>
            </span>
          </a>
        </div>
        <nav>
          <button
            className="menu-toggle"
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <ul 
            id="main-navigation" 
            className={isMenuOpen ? 'active' : ''}
          >
            <li>
              <a 
                href="/index.html" 
                className={activeLink === 'index.html' ? 'button active' : 'button'}
                onClick={(e) => handleLinkClick(e, '/index.html')}
                onMouseEnter={() => handleMouseEnter('/index.html')}
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="/about.html" 
                className={activeLink === 'about.html' ? 'button active' : 'button'}
                onClick={(e) => handleLinkClick(e, '/about.html')}
                onMouseEnter={() => handleMouseEnter('/about.html')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/garden.html" 
                className={activeLink === 'garden.html' ? 'button active' : 'button'}
                onClick={(e) => handleLinkClick(e, '/garden.html')}
                onMouseEnter={() => handleMouseEnter('/garden.html')}
              >
                Garden
              </a>
            </li>
            <li>
              <a 
                href="/archive.html" 
                className={activeLink === 'archive.html' ? 'button active' : 'button'}
                onClick={(e) => handleLinkClick(e, '/archive.html')}
                onMouseEnter={() => handleMouseEnter('/archive.html')}
              >
                Archive
              </a>
            </li>
            <li>
              <a 
                href="/contact.html" 
                className={activeLink === 'contact.html' ? 'button active' : 'button'}
                onClick={(e) => handleLinkClick(e, '/contact.html')}
                onMouseEnter={() => handleMouseEnter('/contact.html')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;