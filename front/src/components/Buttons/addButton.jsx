import Button from "react-bootstrap/Button";

export default function AddButton({ type, name, texto, onClick }) {
  return (
    <>
      <Button
        type={type}
        className="mt-4 purple ml "
        name={name}
        variant="light"
        onClick={onClick}
      >
        {texto}
      </Button>
    </>
  );
}
