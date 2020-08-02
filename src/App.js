import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ListExpenses from './components/ListExpenses';

function App() {

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([])


  const addNewExpense = expense => {
    setExpenses([
      ...expenses, expense
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {
            showQuestion ? 
              <Question
                setBudget={setBudget}
                setRemaining={setRemaining}
                setQuestion={setQuestion}
              />
            :
          <div className="row">
            <div className="one-half column">
              <Form
                addNewExpense={addNewExpense}
              />
            </div>
            <div className="one-half column">
              <ListExpenses
                expenses={expenses}
                />

            </div>
          </div>
        }
        </div>
      </header>

    </div>
  );
}

export default App;
