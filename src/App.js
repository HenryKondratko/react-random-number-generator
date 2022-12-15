import './App.css';
import Instructions from "./components/Instructions";
import Range from "./components/Input";
import Result from "./components/Result";
import {useState} from "react";

function App() {
    const [inputs, setInputs] = useState({});

    return (
        <div>
            <Instructions/>
            <Range
                inputs={inputs}
                setInputs={setInputs}
            />
            <Result/>
        </div>
    );
}

export default App;
