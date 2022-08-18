import { useContext } from "react";
import TemaContext from "./context/TemaContext";


function Baglanti({url, children}){
    const renk = useContext(TemaContext);
    


return(
<a  className={renk} href={url}>{children}</a>
);

}

export default Baglanti;