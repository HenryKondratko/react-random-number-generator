const Generate = ({ minimum, maximum, setResult }) => {
    function clickHandler() {
        const min = parseInt(minimum);
        const max = parseInt(maximum);
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        setResult(result);

    }

    return (
        <button
            type="submit"
            onClick={clickHandler}
        >
            Generate
        </button>
    )
};

export default Generate;