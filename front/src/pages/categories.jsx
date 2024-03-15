import FormCategories from "../components/categories/formCategories";
import TableCategories from "../components/categories/tableCategories";

const Categories = () => {
  return (
    <>
      <div className="conteiner col-12">
        <FormCategories />
        <TableCategories />
      </div>
    </>
  );
};

export default Categories;
