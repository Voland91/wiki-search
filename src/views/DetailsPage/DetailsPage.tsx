import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsFetch } from "../../data/fetching";
import { DetailsLanguages } from "../../environment/constans";

import {
  StyledDetailsPage,
  StyledSelectWrapper,
  StyledSelectsWrapper,
} from "./DetailsPage.style";
import { LanguageSwitcher } from "../../components/atoms/Select/LanguageSwitcher";
import { Description } from "../../components/atoms/Description/Description";

export const DetailsPage: React.FC = () => {
  const [DetailsPage, setDetailsPage] = useState("");
  const { lang, name } = useParams();
  const [availableLang, setAvailableLang] = useState<DetailsLanguages[]>([]);

  useEffect(() => {
    if (name != undefined && lang != undefined) {
      detailsFetch(setDetailsPage, setAvailableLang, name, lang);
    }
  }, [name, lang]);

  return (
    <>
      <StyledSelectsWrapper>
        <StyledSelectWrapper>
          <Description child="Switch article language version" footer />
          <LanguageSwitcher values={availableLang} />
        </StyledSelectWrapper>
      </StyledSelectsWrapper>
      <StyledDetailsPage srcDoc={DetailsPage}></StyledDetailsPage>
    </>
  );
};
