import { useContext } from "react";
import {OrtakBaglam1} from "./OrtakBaglam1";

function Component4({isim}){
    const yas = useContext(OrtakBaglam1);


    return(
        <>
        <p> Component 4 İsim: {isim} Yaş:{yas}</p>
        </>
    )
};



export default Component4;