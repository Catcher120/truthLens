import { useState } from "react";
import Toast from "../Toast/Toast";
import "./Footer.css";

export default function Footer() {
  const [toastVisible, setToastVisible] = useState(false);
  const email = "kontakt@truthlens.pl";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    });
  };

  return (
    <>
      <footer className="main-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>TruthLens</h2>
            <p className="footer-tagline">
              Edukacja i walka z dezinformacją poprzez wiedzę i krytyczne myślenie.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>O nas</h3>
              <ul>
                <li><a href="/about">Co to jest TruthLens?</a></li>
                <li>
                  <button onClick={handleCopyEmail} className="email-copy-btn">
                    Kontakt
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-column mission-column">
              <h3>Nasza misja</h3>
              <p>
                Zwiększamy świadomość i wspieramy krytyczne myślenie wobec informacji.
              </p>
            </div>

            <div className="footer-column footer-creators">
              <h3>Twórcy</h3>
              <ul>
                <li>Bartosz Bartocha</li>
                <li>Piotr Słomka</li>
                <li>Filip Jastrzębski</li>
                <li>Władysław Waśkiewicz</li>
                <li>Jakub Pluczak</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-disclaimer">
            TruthLens jest narzędziem edukacyjnym. Wyniki analizy mają charakter pomocniczy i
            nie zastępują profesjonalnego fact‑checkingu ani oficjalnych komunikatów instytucji.
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} TruthLens. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>

      <Toast message="Email skopiowany!" visible={toastVisible} />
    </>
  );
}