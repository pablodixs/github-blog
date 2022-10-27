import { SearchBarContainer, SearchContainer } from "./styles";

export function SearchBar() {
  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <SearchBarContainer action="">
        <input type="text" placeholder="Buscar conteúdo"/>
      </SearchBarContainer>
    </SearchContainer>
  )
}