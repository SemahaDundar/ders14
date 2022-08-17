import { useContext } from "react";
import Component3 from "./Component3";
import { OrtakBaglam1 } from "./OrtakBaglam1";

function Component2(props){
    const yas  =useContext(OrtakBaglam1);


    return(
        <>
        <p>Burası Component 2 Hanesi Yaş:{54}</p>
        <Component3 prop1={props.isim}/>
        </>
    )
};



export default Component2;