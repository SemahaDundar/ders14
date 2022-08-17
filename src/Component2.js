import Component3 from "./Component3";

function Component2(props){


    return(
        <>
        <p>Burası Component 2 Hanesi</p>
        <Component3 prop1={props.isim}/>
        </>
    )
};



export default Component2;