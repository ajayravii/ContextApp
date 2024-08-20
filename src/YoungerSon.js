import React, {useContext} from "react";
import { MyContext } from "./Main";
function YoungerSon(){
    const data = useContext(MyContext)
    return (
       <h6>I am younger son {data}</h6>
    )
}
export default YoungerSon;