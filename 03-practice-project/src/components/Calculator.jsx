export default function Calculator({ inputValue, handleChange }) {

    function handleChangeValue(e) {
        // Value를 객체로 넣기
        handleChange({
            ...inputValue,
            [e.target.id]: +e.target.value
        });
    }


    return (
        <section id="user-input">
        <div className="input-group">
            <p>
            <label for="initialInvestment">Initial Investment</label>
            <input id="initialInvestment" type="number" required value={inputValue['initialInvestment']} onChange={handleChangeValue} />

            <label for="annualInvestment">Annual Investment</label>
            <input id="annualInvestment" type="number" required value={inputValue['annualInvestment']} onChange={handleChangeValue} />
            </p>
            <p>
            <label for="expectedReturn">Expected Return</label>
            <input id="expectedReturn" type="number" required value={inputValue['expectedReturn']} onChange={handleChangeValue} />

            <label for="duration">Duration (years)</label>
            <input id="duration" type="number" required value={inputValue['duration']} onChange={handleChangeValue}/>
            </p>        
        </div>
        </section>
    )
}