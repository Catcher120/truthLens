import { useState, useEffect } from "react";
import questionsData from "../../data/questions.json";
import "./Quiz.css";

function shuffleArray(array) {
  return array
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(shuffleArray([...questionsData]));
  }, []);

  const question = questions[current] || null;

  useEffect(() => {
    if (!question) return;

    const entries = Object.entries(question.answers);
    setShuffledAnswers(shuffleArray(entries));

    setSelected(null);
    setIsCorrect(null);
  }, [current, question]);

  if (!question && !finished) return <div>Ładowanie…</div>;

  const handleAnswer = (key) => {
    setSelected(key);
    const correct = key === question.correct;
    setIsCorrect(correct);

    if (correct) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-text">
        <h1 className="quiz-title">QUIZ</h1>
        <p className="quiz-description">
          Ten quiz ma na celu pomóc Ci rozpoznać mechanizmy dezinformacji i nauczyć, jak nie dać się zmanipulować fałszywym informacjom. 
          Testując swoją wiedzę, zyskujesz świadomość, jak ważne jest krytyczne myślenie w codziennym odbiorze wiadomości.
        </p>
      </div>

      {finished ? (
        <div className="quiz-container">
          <h2>Quiz zakończony!</h2>
          <h3>
            Twój wynik: {score} / {questions.length}
          </h3>
          <button
            className="next-btn"
            onClick={() => {
              setQuestions(shuffleArray([...questionsData]));
              setCurrent(0);
              setScore(0);
              setFinished(false);
            }}
          >
            Zagraj ponownie
          </button>
        </div>
      ) : (
        <div className="quiz-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>

          <h2 className="question-text">{question.question}</h2>
          <p className="counter">
            Pytanie {current + 1} / {questions.length}
          </p>

          <div className="answers">
            {shuffledAnswers.map(([key, text]) => (
              <button
                key={key}
                onClick={() => handleAnswer(key)}
                disabled={selected !== null}
                className={
                  selected === key
                    ? isCorrect
                      ? "answer-btn correct"
                      : "answer-btn wrong"
                    : "answer-btn"
                }
              >
                {text}
              </button>
            ))}
          </div>

          {selected && (
            <button className="next-btn" onClick={handleNext}>
              {current < questions.length - 1 ? "Następne pytanie" : "Zakończ quiz"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}