import { StyledOption, StyledSelect } from "./Select.style";

interface SelectProps {
  handleChangeSearchLanguage: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select: React.FC<SelectProps> = ({
  handleChangeSearchLanguage,
}) => {
  return (
    <StyledSelect onChange={handleChangeSearchLanguage}>
      <StyledOption value="en">english</StyledOption>
      <StyledOption value="pl">polish</StyledOption>
    </StyledSelect>
  );
};
