import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [perguntas, setperguntas] = useState([]);
  const [respostas, setrespostas] = useState([]);

  const url = 'https://opentdb.com/api.php?amount=30&category=15'

  fetch(url)
  .then(response => response.json())
  .then(data => {
    setperguntas(data);  
    setrespostas(data); 
  });

 
  

  return (
    <>
    <header>
           
                <h1>Prova Framework</h1>
            
        </header>
        <div>
          <h1>perguntas {frase.question} : {frase.correct_answer}</h1>
          
        </div>
        <footer>Feito por Rafael</footer>
    </>
  )
}

export default App
