const Products = () => {
    return (
        <div class="main">
      <div class="col-6">
        <form id="form">
          <input
            name="name"
            id="nameProd"
            type="text"
            placeholder="Product name"
            class="col6 clearInput"
            required
          />
          <input
            name="amount"
            id="amount"
            type="number"
            min="1"
            placeholder="Amount"
            class="col6 clearInput"
            required
          />
          <input
            name="price"
            id="price"
            type="number"
            min="1"
            placeholder="Unit Price"
            class="col6 clearInput"
            required
          />
          <select name="category" id="selectCategories"></select>
          <input
            onclick="createProduto()"
            class="add purplebutton"
            type="submit"
            value="add product"
          />
        </form>
      </div>

      <div class="col-6">
        <table id="tbProduto">
          <thead>
            <tr>
              <th>Code</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Unit price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    );
  };
  
  export default Products;