import { useState } from 'react'
import './App.css'
import Input from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import getCurrency from './hooks/currencyData'


function App() {

  const currencies = getCurrency()
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("INR")
  const [to, setTo] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from, to) //make the changes here

  const convert = () => {
    setConvertedAmount(amount * currencyInfo.meta.rates.to)
  }
  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="From"
          currencies={currencies}
          amount={amount}
          from={from}
          onCurrencyChange={setFrom}
          onChangeAmount={setAmount}
        ></Input>

        <Input
          label="To"
          currencies={currencies}
          amount={convertedAmount}
          to={to}
          onCurrencyChange={setTo}
          disable="true"
          onChangeAmount={setConvertedAmount}
        >
        </Input>
        <button onClick={convert}>Convert</button>
      </form>
    </div>
  )
}

export default App
