/* eslint-disable react/prop-types */
import { Container, Description, Illustration, Logo, Title } from "./styles";

export const Main = ({
  title = "NextJS Boilerplate",
  description = "TypeScript, ReactJS, NextJS e Styled Components"
}) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/assets/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </Container>
);
