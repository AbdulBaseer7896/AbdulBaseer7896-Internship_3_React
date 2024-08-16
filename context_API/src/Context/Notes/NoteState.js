
import { useState } from "react";
import noteContext from "./noteContext"

const NoteState = (props)=>{

    const [state , setState] = useState({
        "name" : "Baser",
        "class" : "i am in class"
    })


    const changeName = ()=>{
        setTimeout(()=>{
            setState({
                name  : "Abdul",
                class : "I am not in any class"
                })
        },1000)
        
    }
    return(
        <noteContext.Provider value = {{state , changeName}}>
        {props.children}
        </noteContext.Provider>
    )
};



export default NoteState;