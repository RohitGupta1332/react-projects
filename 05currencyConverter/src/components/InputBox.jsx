import './inputBox.css'

function Input({
    label,
    currencies,
    amount,
    from,
    onChangeAmount,
    onCurrencyChange,
    disable
}) {
    return (
        <div className="box">
            <div className="input">
                <label>{label}</label>
                <input type="number" name="amount" id="" disabled={disable} value={amount} onChange={(e) => onChangeAmount && onChangeAmount(e.target.value)}/>
            </div>
            <div className="currency">
                <p>Currency Type</p>
                <select name="currency" id="" value={from} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {
                       currencies && currencies.map((currency, index) => ( // Use index as key
                            <option key={index} value={currency.symbol}>
                                {currency.symbol}
                            </option>
                        ))
                    }
                </select>

            </div>
        </div>
    )
}
export default Input