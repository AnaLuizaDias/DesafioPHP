const Categories = () => {
    return (
        <div class="main">
      <div class="col-6">
        <form id="form">
          <input
            name="name"
            id="categoryName"
            type="text"
            placeholder="Category name"
            class="col6 clearInput"
            required
          />
          <input
            name="tax"
            id="tax"
            type="number"
            placeholder="Tax"
            class="col6 clearInput"
            min="1"
            required
          />
          <input
            class="add purplebutton"
            type="submit"
            value="add category"
          />
        </form>
      </div>

      <div class="col-6">
        <table id="tbCategoria">
          <thead>
            <tr>
              <th>Code</th>
              <th>Category</th>
              <th>Tax</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    );
  };
  
  export default Categories;