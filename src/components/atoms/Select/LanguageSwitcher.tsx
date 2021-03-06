import { DetailsLanguages } from "../../../environment/interfaces";
import { useNavigate } from "react-router-dom";
import { StyledOption, StyledSelect } from "./Select.style";

interface SelectProps {
  values: DetailsLanguages[];
}

export const LanguageSwitcher: React.FC<SelectProps> = ({ values }) => {
  const navigate = useNavigate();

  const handleChangeSearchLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const data = e.target.value.split(",");
    navigate(`/details/${data[0]}/${data[1]}`);
  };

  return (
    <StyledSelect onChange={handleChangeSearchLanguage}>
      <StyledOption disabled selected value="">
        languages...
      </StyledOption>
      {values.map((value) => (
        <StyledOption key={value.code} value={[value.code, value.key]}>
          {value.name.toLowerCase()}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
