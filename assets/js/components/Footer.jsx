import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>
          &copy; {currentYear} Juan Manuel Cornejo. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/juanmnl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github profile"
          >
            Github
          </a>
          <a
            href="https://marketplace.visualstudio.com/publishers/juanmnl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="VSCode themes"
          >
            VSCode themes
          </a>
          <a
            href="https://bsky.app/profile/juanmnl.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BlueSky Profile"
          >
            B.sky
          </a>
          <a
            href="https://x.com/_juanmnl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile"
          >
            X
          </a>
          <a
            href="https://www.instagram.com/juanmnlcornejo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            Instagram
          </a>
          <a
            href="https://www.threads.com/@juanmnlcornejo"
            target="_blank"
            aria-label="Threads Profile"
            >Threads</a
          >
        </div>
      </div>
    </footer>
  );
};

export default Footer;