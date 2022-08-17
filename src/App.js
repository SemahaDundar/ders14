import React, {useState } from "react";
import Component1 from "./Component1";
import { OrtakBaglam1 } from './OrtakBaglam1';




function App() {
  const [isim,isimGuncelle]= useState("Ahmet Yıldı");
  const [yas, yasGuncelle]= useState(76);

 


  return (
    <>
    <OrtakBaglam1.Provider value={yas}>
   <Component1 v1={isim}/>
   </OrtakBaglam1.Provider>
    </>
  );
}



export default App;
