import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="truthlens-header">
      <div className="header-content">
        
        <a href="/" className="brand-logo">
          <div className="icon-wrapper">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <span className="brand-name">TruthLens</span>
        </a>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Sprawdź wiargodność tekstu</Link>
          <Link to="/learn" className="nav-link">Jak rozpoznać fake newsa</Link>
        </nav>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

      </div>
    </header>
  );
};

export default Header;