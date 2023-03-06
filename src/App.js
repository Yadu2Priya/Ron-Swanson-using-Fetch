import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("");

  const apiQuote = () => {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomQuote = Math.floor(Math.random() * data.length);
        setQuote(data[randomQuote]);
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      apiQuote();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>{quote}</p>
    </div>
  );
};

export default App;
