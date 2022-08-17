import React, { useState } from "react";
import Component1 from "./Component1";

function App() {
  const [isim,isimGuncelle]= useState("Ahmet Yıldı");

 


  return (
    <>
   <Component1 v1={isim}/>
    </>
  );
}

export default App;
