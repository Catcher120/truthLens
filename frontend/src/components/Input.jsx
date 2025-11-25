import { useState } from "react";
import "./style/Input.css";

export default function Input({ inputType, setInput }) {
  function handleFileChange(e) {
    setInput(e.target.files[0]);
  }

  function handleTextChange(e) {
    setInput(e.target.value);
  }

  return (
    <section className="input-wrapper">
      {!inputType && (
        <textarea
          onChange={handleTextChange}
          name="input-text"
          className="input-textarea"
          placeholder="Wklej tutaj tekst do analizy"
        ></textarea>
      )}

      {inputType && (
        <label className="file-input-label">
          <input
            onChange={handleFileChange}
            type="file"
            name="input-img"
            accept="image/*"
            className="file-input"
          />
          <span>Prześlij obraz</span>
        </label>
      )}
    </section>
  );
}