import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Case Studies</h4>
            <ul>
              <li>
                <a href="/projects/uwazi-ui-refactor.html">
                  Interface Modernization & System Consistency
                </a>
              </li>
              <li>
                <a href="/projects/uwazi-ml.html">
                  ML-Powered Information Extraction
                </a>
              </li>
              <li>
                <a href="/projects/uwazi-preserve.html">
                  Evidence Collection for the Web
                </a>
              </li>
              <li>
                <a href="/projects/ktn-ryms.html">
                  Railcar Management Automation System
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Specials</h4>
            <ul>
              <li><a href="/garden.html">Digital Garden</a></li>
            </ul>
            <h4>Downloads</h4>
            <ul>
              <li><a href="/assets/docs/Juan_Manuel_Cornejo_CV_2025.pdf" target="_blank">Resume</a></li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/publishers/juanmnl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VSCode themes"
                >
                  VSCode themes
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Pages</h4>
            <ul>
              <li><a href="/index.html">Work</a></li>
              <li><a href="/about.html">About</a></li>
              <li><a href="/archive.html">Archive</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/juanmnl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github profile"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/juanmnl.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BlueSky Profile"
                >
                  BlueSky
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/_juanmnl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Profile"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/juanmnlcornejo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Juan Manuel Cornejo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;