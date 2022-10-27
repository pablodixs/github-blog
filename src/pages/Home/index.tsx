import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { SearchBar } from "../../components/SearchBar";
import { UserCard } from "../../components/UserCard";
import { Container } from "../../styles/global";

export function Home() {
  return (
    <>
      <Header />
      <UserCard />
      <Container>
        <SearchBar />
        <Posts />
      </Container>
    </>
  )
}