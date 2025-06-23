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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="logo-status">
          <div className="status-indicator"></div>
          <a href="index.html" className="logo">
            Designer @Huridocs -
            <span className="highlight">
              <small>Available for hire soon!</small>
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
                onClick={handleLinkClick}
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="/about.html" 
                className={activeLink === 'about.html' ? 'button active' : 'button'}
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/archive.html" 
                className={activeLink === 'archive.html' ? 'button active' : 'button'}
                onClick={handleLinkClick}
              >
                Archive
              </a>
            </li>
            <li>
              <a 
                href="/contact.html" 
                className={activeLink === 'contact.html' ? 'button active' : 'button'}
                onClick={handleLinkClick}
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