import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandReactNative,
  IconBrandNextjs,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconBrandReact,
    title: "React",
    description:
      "React es una biblioteca de JavaScript utilizada para crear interfaces de usuario en aplicaciones web. Permite construir componentes reutilizables que representan partes específicas de una página",
  },
  {
    icon: IconBrandJavascript,
    title: "Javascript",
    description:
      "JavaScript es un lenguaje de programación utilizado para hacer que las páginas web sean más interactivas y dinámicas.",
  },
  {
    icon: IconBrandReactNative,
    title: "React Native",
    description:
      "React Native es un framework de desarrollo de aplicaciones móviles que utiliza JavaScript y la biblioteca React. Con React Native, los desarrolladores pueden crear aplicaciones móviles nativas para iOS y Android utilizando un único código base. ",
  },
  {
    icon: IconBrandNextjs,
    title: "Next Js",
    description:
      "Next.js es un framework de desarrollo web de React que se enfoca en la creacion de aplicaciones web de servidor y cliente. Proporcina una arquitectura escalablre  escalable y eficiente para construir aplicaciones web modernas. ",
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Bienvedo a mi portafolio como desarrollador web
          </Title>
          <Text c="dimmed">
            Desarrollador web con experiencia en JavaScript, HTML y CSS,
            enfocado en React, React Native y Next.js. Experto en construcción
            de interfaces interactivas y receptivas para aplicaciones web y
            móviles. Habilidades en creación de componentes reutilizables y
            estructura modular.
          </Text>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
