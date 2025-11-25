import "./Learn.css";


export default function Learn() {


  
  return (
    <section className="learn" id="learn">
      <div className="learn-inner">
        <p className="learn-eyebrow">ZROZUM • ROZPOZNAJ • DZIAŁAJ</p>
        <h2 className="learn-title">
          Jak działa <span className="accent">dezinformacja?</span>
        </h2>

        <p className="learn-lead">
          Zanim zaczniesz rozwiązywać quiz, warto poznać najczęstsze techniki manipulacji. 
          To właśnie dzięki nim fałszywe informacje potrafią rozprzestrzeniać się 
          szybciej niż fakty – szczególnie w mediach społecznościowych.
        </p>

        <div className="learn-grid">
          <div className="learn-card" tabIndex="0" aria-label="Manipulacja emocjami">
            <div className="icon" aria-hidden="true">🧠</div>
            <h3 className="card-title">Manipulacja emocjami</h3>
            <p className="card-text">
              Fake newsy często odwołują się do strachu, złości lub szoku. 
              Gdy reagujemy emocjonalnie, rzadziej sprawdzamy fakty.
            </p>
          </div>

          <div className="learn-card" tabIndex="0" aria-label="Obrazy wyrwane z kontekstu">
            <div className="icon" aria-hidden="true">🖼️</div>
            <h3 className="card-title">Obrazy wyrwane z kontekstu</h3>
            <p className="card-text">
              Zdjęcie z innego miejsca lub wydarzenia może zostać podpisane tak, 
              by sugerowało coś zupełnie innego niż w rzeczywistości.
            </p>
          </div>

          <div className="learn-card" tabIndex="0" aria-label="Fałszywe statystyki">
            <div className="icon" aria-hidden="true">📊</div>
            <h3 className="card-title">Fałszywe statystyki</h3>
            <p className="card-text">
              Liczby brzmią wiarygodnie, dlatego są częstym narzędziem manipulacji. 
              Wykresy mogą być zmienione tak, by wyglądały przekonująco.
            </p>
          </div>

          <div className="learn-card" tabIndex="0" aria-label="Nieprawdziwe cytaty">
            <div className="icon" aria-hidden="true">🎤</div>
            <h3 className="card-title">Nieprawdziwe cytaty</h3>
            <p className="card-text">
              Wymyślony cytat znanej osoby rozchodzi się błyskawicznie, 
              bo wygląda jak rzetelna wypowiedź.
            </p>
          </div>

          <div className="learn-card" tabIndex="0" aria-label="Udawane autorytety">
            <div className="icon" aria-hidden="true">🔗</div>
            <h3 className="card-title">Udawane autorytety</h3>
            <p className="card-text">
              Profile podszywające się pod ekspertów tworzą fałszywe wrażenie wiarygodności, 
              choć nie mają żadnego związku z daną instytucją.
            </p>
          </div>

          <div className="learn-card" tabIndex="0" aria-label="Brak źródeł">
            <div className="icon" aria-hidden="true">🔍</div>
            <h3 className="card-title">Brak źródeł</h3>
            <p className="card-text">
              Informacje bez linków, badań i oficjalnych danych są szczególnie podejrzane. 
              Warto zawsze sprawdzić, skąd pochodzą.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
