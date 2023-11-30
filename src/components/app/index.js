import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/deafault';

import Header from '../header';
import ConctactsList from '../contactsList';

import { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
        <ConctactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
