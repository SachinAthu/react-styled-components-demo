import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import { ContainerStyled } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { GlobalStyled } from "./components/styles/Global.styled";
import content from "./content";
import Card from "./components/Card";
import FooterTop from "./components/FooterTop";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
          <title>Huddle Landing Page</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyled />

        <Header />

        <ContainerStyled>
          {content.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </ContainerStyled>

        <FooterTop />

        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
