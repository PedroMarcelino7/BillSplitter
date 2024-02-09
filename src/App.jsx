import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [split, setSplit] = useState(1)
  const [billEach, setBillEach] = useState(0)

  const handleBillChange = (e) => {
    setBill(parseInt(e.target.value))
  }

  const handleTipPercentageChange = (e) => {
    const value = parseInt(e.target.value)

    setTipPercentage(value)
  }

  useEffect(() => {
    const tipCalc = (tipPercentage / 100) * bill

    setTip(tipCalc.toFixed(2))
    setTotal(bill + tipCalc)
  }, [bill, tipPercentage])

  const handleSplit = (e) => {
    setSplit(parseInt(e.target.value))
  }

  useEffect(() => {
    setBillEach((total / split).toFixed(2))
  }, [bill, tipPercentage, split])

  return (
    <>
      <main>
        <h1>Bill Splitter</h1>
        <section>
          <form className="bill">
            <label htmlFor="yourBill">Bill</label>
            <input
              onChange={handleBillChange}
              type="number"
              placeholder="Your bill"
            />
          </form>

          <form>
            <div className="space-between">
              <label>Select tip</label><span>{tipPercentage} %</span>
            </div>
            <input
              onChange={handleTipPercentageChange}
              type="range"
              value={tipPercentage}
              className="range"
            />
          </form>

          <div className="space-between">
            <span>Tip</span>
            <span>$ {tip}</span>
          </div>

          <hr />

          <div className="space-between total">
            <span>Total</span>
            <span>$ {total}</span>
          </div>
        </section>

        <section>
          <div>
            <div className="space-between">
              <label htmlFor="splitInput">Split</label>
              <span>{split}</span>
            </div>
            <input 
            onChange={handleSplit}
            type="range" min="1" max="10" className="range" value={split} />
          </div>

          <div className="space-between">
            <span>Bill each</span>
            <span>$ {billEach}</span>
          </div>
        </section>
      </main>
      <script src="index.js"></script>
    </>
  )
}

export default App
