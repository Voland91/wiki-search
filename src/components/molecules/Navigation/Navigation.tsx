import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchingHistory } from "../../../environment/constans";
import { StyledHistorySelect } from "./Navigation.style";
import { Description } from "../../atoms/Description/Description";
import { SelectHistory } from "../../atoms/Select/SelectHistory";
import { Logo } from "../../atoms/Logo/Logo";

export const Navigation: React.FC = () => {
  const [history, setHistory] = useState<SearchingHistory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const searchingHistory = localStorage.getItem("searchHistory");
    if (searchingHistory != null || searchingHistory != undefined) {
      setHistory(JSON.parse(searchingHistory));
    }
  }, [navigate]);

  return (
    <>
      <Logo />
      {history.length > 0 && (
        <StyledHistorySelect>
          <Description child="See your search history" footer />
          <SelectHistory values={history} />
        </StyledHistorySelect>
      )}
    </>
  );
};
