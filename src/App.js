import './App.css';
import Instructions from "./components/Instructions";
import Range from "./components/Input";
import Result from "./components/Result";
import {useState} from "react";

function App() {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState();

    return (
        <div className="container">
            <h1>Random Number Generator</h1>
            <Instructions/>
            <Range
                inputs={inputs}
                setInputs={setInputs}
                setResult={setResult}
            />
            <Result result={result}/>
        </div>
    );
}

export default App;
