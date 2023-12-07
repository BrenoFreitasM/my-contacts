import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/deafault";

import Header from "../Header";
import Routes from "../../Routes";

import { Container } from "./styles";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Passo 1");
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
