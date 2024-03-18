import { useState, useEffect } from "react";
import axios from "axios";
import FormProducts from "../components/Products/formProducts";
import TableProducts from "../components/Products/tableProducts";


const Products = () => {
  return (
    <>
      <div className="conteiner col-12">
        <FormProducts />
        <TableProducts />
      </div>
    </>
  );
};

export default Products;

