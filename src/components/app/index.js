import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/deafault';
import { Container } from './styles';
import Header from '../header';

function App() {
  return (
    <>
      <GlobalStyles theme={defaultTheme}/>
      <Header/>
    </>
  );
}

export default App;
