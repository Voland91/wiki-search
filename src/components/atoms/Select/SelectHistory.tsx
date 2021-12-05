import { SearchingHistory } from "../../../environment/constans";
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
    navigate(e.target.value);
  };

  return (
    <StyledSelect onChange={handleChangeSearchLanguage}>
      {/* {values.map((value) => (
        <StyledOption key={value} value={value}>
          {value}
        </StyledOption>
      ))} */}
    </StyledSelect>
  );
};
