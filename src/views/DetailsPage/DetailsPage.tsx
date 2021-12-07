import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsFetch } from "../../data/fetching";
import {
  API_DETAILS_URL as detailsUrl,
  DetailsLanguages,
} from "../../environment/constans";

import {
  StyledDetailsPage,
  StyledSelectWrapper,
  StyledLoader,
  StyledDetailsPageWrapper,
} from "./DetailsPage.style";
import { LanguageSwitcher } from "../../components/atoms/Select/LanguageSwitcher";
import { Description } from "../../components/atoms/Description/Description";

export const DetailsPage: React.FC = () => {
  const [DetailsPage, setDetailsPage] = useState("");
  const { lang, name } = useParams();
  const [availableLang, setAvailableLang] = useState<DetailsLanguages[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (name != undefined && lang != undefined) {
      detailsFetch(setAvailableLang, name, lang);
      setDetailsPage(`https://${lang}.${detailsUrl}/${name}/html`);
      setIsLoading(true);
    }
  }, [name, lang]);

  useEffect(() => {
    setIsLoading(true);
  }, [DetailsPage]);

  const handlehideSpinner = () => setIsLoading(false);

  return (
    <StyledDetailsPageWrapper>
      {isLoading && <StyledLoader type="Rings" color="#dadada" />}
      {!isLoading && (
        <StyledSelectWrapper>
          <Description child="Switch article language version" footer />
          <LanguageSwitcher values={availableLang} />
        </StyledSelectWrapper>
      )}
      <StyledDetailsPage
        src={DetailsPage}
        onLoad={handlehideSpinner}
      ></StyledDetailsPage>
    </StyledDetailsPageWrapper>
  );
};
