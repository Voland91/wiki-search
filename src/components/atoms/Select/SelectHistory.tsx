import { SearchingHistory } from "../../../environment/interfaces";
import { useNavigate } from "react-router-dom";
import { StyledOption, StyledSelect } from "./Select.style";

interface SelectProps {
  values: SearchingHistory[];
}

export const SelectHistory: React.FC<SelectProps> = ({ values }) => {
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
        history...
      </StyledOption>
      {values.map((value) => (
        <StyledOption
          key={`${value.lang + value.name + values.indexOf(value)}`}
          value={[value.lang, value.name]}
        >
          {`${value.name}`}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
