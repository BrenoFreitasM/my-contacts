import { Container, Header, ListContainer, Card } from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";

export default function ConctactsList() {
  return (
    <Container>
      <Header>
        <strong> 3 contato</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span><img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          ...
        </Card>
      </ListContainer>
    </Container>
  );
}
