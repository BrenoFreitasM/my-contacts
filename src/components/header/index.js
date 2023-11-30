import { Container, InpuSearchContainer } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201"/>

      <InpuSearchContainer >
        <input type="text" placeholder='Pesquise pelo nome...'/>
      </InpuSearchContainer>
    </Container>
  )
}
