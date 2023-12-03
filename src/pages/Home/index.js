import {
  Container,
  InpuSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";

export default function Home() {
  return (
    <Container>
      <InpuSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InpuSearchContainer>

      <Header>
        <strong> 3 contato</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Breno Freitas</strong>
              <small>Instagram</small>
            </div>
            <span>brenofreitasmendes@gmail.com</span>
            <span>(35) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Breno Freitas</strong>
              <small>Instagram</small>
            </div>
            <span>brenofreitasmendes@gmail.com</span>
            <span>(35) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Breno Freitas</strong>
              <small>Instagram</small>
            </div>
            <span>brenofreitasmendes@gmail.com</span>
            <span>(35) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
