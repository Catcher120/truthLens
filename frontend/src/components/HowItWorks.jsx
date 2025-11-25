import "./style/HowItWorks.css";
export default function HowItWorks() {
  return (
    <section className="how-wrapper">
      <p className="how-top-label">BEZPIECZEŃSTWO • ŚWIADOMOŚĆ</p>

      <h2 className="how-title">
        Sprawdź jak działa <span>nasza analiza</span>
      </h2>

      <p className="how-desc">
        System pomaga zrozumieć, jak działa proces analizy — od momentu, gdy wklejasz tekst lub dodajesz zdjęcie,
        aż po otrzymanie pełnego, klarownego raportu. Dzięki temu wiesz, co dokładnie dzieje się z Twoimi danymi.
      </p>

      <ol className="how-list">
        <li>
          <span className="step-number">1.</span> Wklejasz treść lub dodajesz obraz — możesz przesłać dokument, tekst
          lub grafikę, a system automatycznie przygotuje dane do analizy.
        </li>
        <li>
          <span className="step-number">2.</span> Model AI analizuje informacje — wykrywa kontekst, kluczowe fragmenty,
          elementy graficzne oraz ich znaczenie.
        </li>
        <li>
          <span className="step-number">3.</span> Dostajesz jasny raport — czytelne podsumowanie z wnioskami,
          interpretacją i wskazówkami.
        </li>
      </ol>
    </section>
  );
}