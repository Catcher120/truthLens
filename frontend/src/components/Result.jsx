import "./style/Result.css";

export default function Result({ data, setData }) {
  let trustColor;
  let riskColor;

  if (data !== null) {
    
    trustColor =
      data.credibilityScore < 50
        ? "var(--red-600)"
        : data.credibilityScore < 75
        ? "var(--yellow-600)"
        : "var(--green-600)";

    const level = data.riskLevel?.toLowerCase();

    if (level === "niski") {
      riskColor = "var(--green-600)";
    } else if (level === "średni") {
      riskColor = "var(--yellow-600)";
    } else {
      riskColor = "var(--red-600)";
    }
    
  }

  return (
    <section className="result-wrapper">
      {data == null && <p className="placeholder">Tutaj pojawi się wynik twojej analizy</p>}

      {data && (
        <div className="data-wrapper">
          <div className="credibility-score">
            <h3>Poziom zaufania: {data.credibilityScore}%</h3>
            <div className="progress-bar">
              <div
                className="fill"
                style={{ width: data.credibilityScore + "%", backgroundColor: trustColor }}
              ></div>
            </div>
          </div>

          <div className="risk-level">
            <h3>
              Poziom ryzyka: <span style={{ color: riskColor }}>{data.riskLevel}</span>
            </h3>
          </div>

          <div className="flags">
            <h2>Tematy:</h2>
            {data.flags.map((element, idx) => (
              <h3 key={idx}>- {element}</h3>
            ))}
          </div>

          <div className="section explanation">
            <h2>Wyjaśnienie:</h2>
            <p>{data.explanation}</p>
          </div>

          <div className="section advice">
            <h2>Porada:</h2>
            <p>{data.advice}</p>
          </div>

          <div className="section truth">
            <h2>Prawda:</h2>
            <p>{data.truth}</p>
          </div>
        </div>
      )}
    </section>
  );
}
