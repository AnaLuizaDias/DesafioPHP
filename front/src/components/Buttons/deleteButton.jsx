import Button from "react-bootstrap/Button";

export default function DeleteButton({ type, name, texto, onClick }) {
  return (
    <>
      <Button
        type={type}
        className="gbt ml"
        name={name}
        onClick={onClick}
      >
        {texto}
      </Button>
    </>
  );
}
