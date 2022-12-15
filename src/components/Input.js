import Generate from "./Generate";

const Range = ({ inputs, setInputs, setResult }) => {
    function submitHandler(event) {
        event.preventDefault();
        console.log(inputs)
    }

    function inputChangeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="minimum">Minimum</label>
            <input
                type="text"
                id="minimum"
                name="minimum"
                onChange={inputChangeHandler}
            />

            <label htmlFor="maximum">Maximum</label>
            <input
                type="text"
                id="maximum"
                name="maximum"
                onChange={inputChangeHandler}
            />
            <Generate
                minimum={inputs.minimum}
                maximum={inputs.maximum}
                setResult={setResult}
            />
        </form>
    )
};

export default Range;