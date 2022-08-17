import Component4 from "./Component4";

function Component3({prop1}){


    return(
        <>
        <p>Burası Component 3 Hanesi</p>
        <Component4 isim={prop1}/>
        </>
    )
};



export default Component3;