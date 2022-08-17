import React from "react";
import Todos from './Todos';
import {useState}from 'react';




const cokZamanFonksiyon =(num)=>{
  console.log("Hesaplanıyorr...");
  for (let i = 0; i < 1000000; i++){
    num += 1;
  }
  return num;
}




function App() {
  const [sayac, sayacGuncelle] =React.useState(0);
  const [todos, setTodos] = useState([]);
  const hesaplamaSonucu = React.useMemo((sayac) =>cokZamanFonksiyon(sayac), []);
  //hiçbir fonksiyona bağımlı değil anlamındadır boş array[]
 

  const increment = () => {
    sayacGuncelle((oncekiSayac) => oncekiSayac + 1);//!  tekrar render olacak
  };
  const addTodo = React.useCallback(() => {
    let saniye = new Date().getSeconds();
    setTodos((oncekiDizi) => [...oncekiDizi, "Yapılacak iş" + saniye]);//!!!
  }, []);



  return (
    <>
    <p>Hesaplama Sonucu: {hesaplamaSonucu}</p>
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
