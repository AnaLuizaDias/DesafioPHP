import Form from "react-bootstrap/Form";


export default function InputComp({
  value,
  min,
  placeholder,
  onChange,
  type,
  name,
  texto,
  className,
}) {
  return (
    <>
      <Form.Group className={className}>
        <Form.Control
          value={value}
          min={min}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          name={name}
          texto={texto}
          variant="light"
        />
      </Form.Group>
    </>
  );
}
