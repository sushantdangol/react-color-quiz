import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const getRandomHexColor = () => {
  const randomHex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
  ];

  const color =  new Array(6).fill('')
  .map(() => randomHex[Math.floor(Math.random() * randomHex.length)])
  .join('');

  return `#${color}`;
}

function App() {

  const [color, setColor] = useState();
  const [answers, setAnswers] = useState([]);
  const [isWrong, setIsWrong] = useState(false);

  function pickColor() {
    getRandomHexColor();

    const randomColor = getRandomHexColor();

    setColor(randomColor);

    setAnswers([randomColor, getRandomHexColor(), getRandomHexColor()].sort(
      () => 0.5 - Math.random()
    ));
  }

  useEffect(() => {
    pickColor();
  }, []);

  function checkAnswer(answer) {
    if(answer === color) {
      setIsWrong(false);
      pickColor();
    } else {
      setIsWrong(true);
    }
  }

  return (
    <div className="App">
      <div>
        <div className="color-guess"
            style={{ background: color }}
        ></div>   

        {answers.map((answer) => (
          <button key={answer}
          onClick={() => checkAnswer(answer)}>
            {answer}
          </button>
        ))}

        {isWrong && <div className="wrong">Wrong Answer</div>}
      </div>
    </div>
  );
}

export default App;
