import { InputContainer } from "./InputContainer";
import { FormText } from "./FormText";
import { InputLabel } from "./InputLabel";
import { Input } from "./Input";

const InputForm = ({ name, placeHolder, defaultValue, text, className }) => {
  return (
    <InputContainer className={className}>
      <InputLabel>{name}</InputLabel>
      <Input placeholder={placeHolder} defaultValue={defaultValue} />
      <FormText>{text}</FormText>
    </InputContainer>
  );
};

export default InputForm;
