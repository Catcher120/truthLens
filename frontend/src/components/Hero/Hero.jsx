import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">EDUKACJA • BEZPIECZEŃSTWO • ŚWIADOMOŚĆ</p>

          <h1 className="hero-title">
            Sprawdź swoją odporność na <span className="accent">dezinformację</span>
          </h1>

          <p className="hero-lead">
            Internet nigdy nie był tak pełny sprzecznych nagłówków, zmanipulowanych obrazów 
            i treści pisanych pod emocje. Ta sekcja pomaga ci zrozumieć, jak łatwo 
            wpaść w pułapkę fałszywych informacji — i jak możesz się przed nimi chronić.
          </p>

          <p className="hero-desc">
            Nasz quiz pokazuje prawdziwe przykłady manipulacji, które codziennie 
            krążą po social mediach: sensacyjne wpisy, zdjęcia oderwane od kontekstu 
            czy wykresy przedstawione tak, by wprowadzały w błąd. 
            Każde pytanie to sytuacja „z życia internetu”, która uczy cię, 
            jak odróżnić fakt od manipulacji. Dzięki krótkim wyjaśnieniom po każdej odpowiedzi, 
            krok po kroku budujesz nawyk świadomego sprawdzania źródeł — umiejętność, 
            która dziś jest ważniejsza niż kiedykolwiek.
          </p>

          <div className="hero-cta">
            <a className="btn primary" href="#quiz" role="button">Rozpocznij quiz</a>
            <a className="btn ghost" href="#learn" role="button">Dowiedz się więcej</a>
          </div>

          <ul className="hero-features" aria-hidden="true">
            <li>🔎 realistyczne przykłady z internetu</li>
            <li>📊 omówienie każdego pytania</li>
            <li>💡 praktyczne wskazówki na co dzień</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-glow" />
        </div>
      </div>
    </header>
  );
}