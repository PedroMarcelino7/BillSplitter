import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [split, setSplit] = useState(0)
  const [billEach, setBillEach] = useState(0)

  const handleBillChange = (e) => {
    setBill(parseInt(e.target.value))
  }

  const handleTipChange = (e) => {
    const value = parseInt(e.target.value)

    setTipPercentage(value)

    const tipCalc = ((value / 100) * bill)

    setTip(parseFloat(tipCalc.toFixed(2)))
  }

  useEffect(() => {
    setTotal(bill + tip)
  }, [bill, tipPercentage])

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
              onChange={handleTipChange}
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
              <span></span>
            </div>
            <input type="range" min="1" max="10" value="1" className="range" />
          </div>

          <div className="space-between">
            <span>Bill each</span>
            <span></span>
          </div>
        </section>
      </main>
      <script src="index.js"></script>
    </>
  )
}

export default App
