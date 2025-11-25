import "./NotFound.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {

  useEffect(() => {
      document.title = "TruthLens | Nie znaleziono strony";
    }, []);
  
  return (
    <main className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <p className="notfound-message">
          Ooops... Strona, której szukasz, nie istnieje.
        </p>
        <Link to="/" className="btn">
          Wróć do strony głównej
        </Link>
      </div>
      <div className="hero-visual" aria-hidden="true">
          <div className="visual-glow" />
        </div>
    </main>
  );
}
