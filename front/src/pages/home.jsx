const Home = () => {
    return (
        <div class="main">
      <div class="col-6">
        <form id="form">
          <select name="text" id="selectProducts"></select>
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            class="col6 clearInput"
            min="1"
          />
          <input
            readonly
            id="tax"
            type="text"
            placeholder="Tax unit"
            class="col6 clearInput"
          />
          <input
            readonly
            id="price"
            type="text"
            placeholder="Price"
            class="col6 clearInput"
            required
          />
        </form>
        <button class="add purplebutton" id="save">Add Product</button>
      </div>

      <div class="col-6">
        <table id="tbCompra">
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div class="canto">
          <p>Tax: <span id="taxTotal"></span></p>
          <p>Total: <span id="total"></span></p>
        </div>
        <div class="but">
          <button id="cancel">Cancel</button>
          <button class="purplebutton" id="finish">Finish</button>
        </div>
      </div>
    </div>
    );
  };
  
  export default Home;