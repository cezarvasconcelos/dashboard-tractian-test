import { InputContainer } from "./InputContainer";
import { FormText } from "./FormText";
import { InputLabel } from "./InputLabel";
import { Input } from "./Input";

const InputForm = ({ name, label, placeHolder, value, onChange, text, className }) => {
  return (
    <InputContainer className={className}>
      <InputLabel>{label}</InputLabel>
      <Input placeholder={placeHolder} value={value} name={name} onChange={onChange} />
      <FormText>{text}</FormText>
    </InputContainer>
  );
};

export default InputForm;
