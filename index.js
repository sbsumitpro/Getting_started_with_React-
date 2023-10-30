const heading = document.createElement("h1");
        heading.textContent = "Hello Javascript";
        heading.className = "header";
        document.getElementById("root").append(heading)

        console.log ("JS heading", heading);

// const reactHeading = React.createElement("h1",{className:"header"},"Hello React");

const reactHeading =<><h1>Hello React!</h1> <p>I am learning React</p></> 

console.log("React header", reactHeading)
const header = <h2>I am Good  boy</h2>
function App(){
    return(
         <>
        <h1>Hello React!</h1> 
        {header}
        <p>I am learning React</p>

        </> 
    )
    
}

const App1 = ()=> 
     <>
    <h1>Hello React!</h1> <p>I am learning React</p>
    <App/>
    </> 


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
