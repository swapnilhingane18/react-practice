function doSomething(){
    console.log("Button is clicked");
}


export default function Button() {
    return(
        <div>

            <button onClick={doSomething}>Click Me!</button>

        </div>
    )
}