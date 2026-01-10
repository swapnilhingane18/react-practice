function onFormSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
}

export default function Form(){
    return(
        <form onSubmit={onFormSubmit}>

        <input  placeholder="Enter text here" />
        <button type="submit">Submit</button>        

        </form>
       
    )
}