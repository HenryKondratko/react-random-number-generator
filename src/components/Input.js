const Range = () => {
    return (
        <div>
            <label htmlFor="minimum">Minimum</label>
            <input
                type="text"
                id="minimum"
            />

            <label htmlFor="maximum">Maximum</label>
            <input
                type="text"
                id="maximum"
            />
        </div>
    )
};

export default Range;