import { useState } from "react";
function onFormSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
}

export default function Form(){
    let [fullname, setFullname] = useState("");
    return(
        <form onSubmit={onFormSubmit}>

        <input  placeholder="Enter text here" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
        <button type="submit">Submit</button>        

        </form>
       
    )
}