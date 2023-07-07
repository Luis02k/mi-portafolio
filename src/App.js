import logo from "./logo.svg";
import "./App.css";

import Portfolio from "./Portafolio";
import Footer from "./Footer";
import "./styles.css";
import HeaderBase from "./Header";
import { HeaderMegaMenu } from "./HeaderMegaMenu";
import { FeaturesTitle } from "./FeaturesTitle";
import { EmailBanner } from "./EmailBanner";
import { FooterSocial } from "./FooterSocial";
import { ContactUs } from "./ContactUs";
import { ArticlesCardsGrid } from "./ArticlesCardsGrid";

function App() {
  return (
    <div className="app">
      <HeaderMegaMenu />
      <FeaturesTitle />
      <h1 style={{ textAlign: "center" }}>Proyectos</h1>
      <ArticlesCardsGrid />
      <ContactUs />
      <FooterSocial />
    </div>
  );
}

export default App;
