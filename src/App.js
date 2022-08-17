import React from "react";
import Todos from './Todos';
import {useState}from 'react';

function App() {
  const [sayac, sayacGuncelle] =React.useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    sayacGuncelle((oncekiSayac) => oncekiSayac + 1);//!  tekrar render olacak
  };
  const addTodo = React.useCallback(() => {
    let saniye = new Date().getSeconds();
    setTodos((oncekiDizi) => [...oncekiDizi, "Yapılacak iş" + saniye]);//!!!
  }, []);
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Sayac: {sayac}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
