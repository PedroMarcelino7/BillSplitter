import './App.css'

function App() {
  return (
    <>
      <main oninput="update()">
        <h1>Bill Splitter</h1>
        <section>
          <div class="bill">
            <label for="yourBill">Bill</label>
            <input type="number" placeholder="Your bill" id="yourBill" />
          </div>
          <div>
            <div class="space-between">
              <label for="">Select tip</label><span id="tipPercent"></span>
            </div>
            <input type="range" value="0" id="tipInput" class="range" />
          </div>
          <div class="space-between">
            <span>Tip</span>
            <span id="tipValue"></span>
          </div>
          <hr />
          <div class="space-between total">
            <span>Total</span>
            <span id="totalWithTip"></span>
          </div>
        </section>

        <section>
          <div>
            <div class="space-between">
              <label for="splitInput">Split</label>
              <span id="splitValue"></span>
            </div>
            <input type="range" min="1" max="10" value="1" id="splitInput" class="range" />
          </div>
          <div class="space-between">
            <span>Bill each</span>
            <span id="billEach"></span>
          </div>
        </section>
      </main>
      <script src="index.js"></script>
    </>
  )
}

export default App
