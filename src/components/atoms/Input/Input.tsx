import { StyledInput } from "./Input.style";

interface InputProps {
  handleSetSearch: React.ChangeEventHandler<HTMLInputElement>;
  search: string;
}

export const Input: React.FC<InputProps> = ({ handleSetSearch, search }) => {
  return (
    <StyledInput
      type="text"
      value={search}
      onChange={handleSetSearch}
      placeholder="Click to search..."
      debounceTimeout={500}
      minLength={1}
    />
  );
};
