import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ListExpenses from './components/ListExpenses';
import ControlBudget from './components/ControlBudget';

function App() {

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setQuestion] = useState(true);
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);


  useEffect( () => {
    //add new budget
    if (createExpense) {
      setExpenses([
        ...expenses, expense
      ]);
      setCreateExpense(false);
    

      // substract budget
      const remainingBudget = remaining - expense.quantity;
      console.log('remaining', remaining)
      console.log('quantity',expense.quantity)

      setRemaining(remainingBudget);
    }
  }, [expense, createExpense, expenses, remaining ])


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
                setCreateExpense={setCreateExpense}
                setExpense={setExpense}
              />
            </div>
            <div className="one-half column">
              <ListExpenses
                expenses={expenses}
                />
              <ControlBudget
                budget={budget}
                remaining={remaining} 
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
