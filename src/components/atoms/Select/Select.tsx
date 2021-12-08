import { SearchingLanguages } from "../../../environment/interfaces";
import { StyledOption, StyledSelect } from "./Select.style";

interface SelectProps {
  handleChangeSearchLanguage: React.ChangeEventHandler<HTMLSelectElement>;
  values: SearchingLanguages[];
}

export const Select: React.FC<SelectProps> = ({
  handleChangeSearchLanguage,
  values,
}) => {
  return (
    <StyledSelect onChange={handleChangeSearchLanguage}>
      {values.map((value) => (
        <StyledOption key={value.code} value={value.code}>
          {value.name.toLowerCase()}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
