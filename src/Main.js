import React from 'react';
import Parent from './Parent';
const MyContext=React.createContext()
function Main(){
    const bdayGiftMsg="Hai younger son! here's the bday goft for you..."
    return(
         <>
         <h1>I am Main component</h1>
         <MyContext.Provider value={bdayGiftMsg}>
            <Parent/>
         </MyContext.Provider>
         </>
    )
}
export default Main;
export {MyContext}