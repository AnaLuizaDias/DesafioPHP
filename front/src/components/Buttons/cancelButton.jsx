import Button from "react-bootstrap/Button";

const CancelButton = () => {

  function deleteCart() {
    const response = window.confirm("deseja realmente cancelar a compra?");
    if (response) {
      window.location.reload();
    }
  }

  return (
    <Button
      variant="dark"
      type="button"
      className="mt-4 gbt ml"
      onClick={deleteCart}
    >
      Cancel
    </Button>
  );
};
export default CancelButton;
