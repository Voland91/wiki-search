import { Input } from "../atoms/Input/Input";

interface SearchBarProps {
  handleSetSearch: React.ChangeEventHandler<HTMLInputElement>;
  search: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  handleSetSearch,
  search,
}) => {
  return <Input handleSetSearch={handleSetSearch} search={search} />;
};
