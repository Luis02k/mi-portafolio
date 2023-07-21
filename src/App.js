import "./App.css";
import "./styles.css";
import { HeaderMegaMenu } from "./HeaderMegaMenu";
import { FeaturesTitle } from "./FeaturesTitle";
import { FooterSocial } from "./FooterSocial";
import { ContactUs } from "./ContactUs";
import { ArticlesCardsGrid } from "./ArticlesCardsGrid";
import {
  MantineProvider,
  Title,
  createStyles,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    textAlign: "center",
    marginTop: "10px",
  },
}));

function App() {
  const { classes } = useStyles();
  return (
    <div className="app">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colorScheme: "dark",
          colors: {
            dark: [],
            light: [],
          },
        }}
      >
        <HeaderMegaMenu />
        <FeaturesTitle />
        <Title className={classes.title} order={1}>
          Proyectos
        </Title>

        <ArticlesCardsGrid />
        <ContactUs />
        <FooterSocial />
      </MantineProvider>
    </div>
  );
}

export default App;
