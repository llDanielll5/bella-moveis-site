import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";

const CreditsFooter = () => {
  return (
    <Container>
      <Typography variant="subtitle1" textAlign="center">
        Página desenvolvida por{" "}
        <Linked href="https://sofx.com.br" target="_blank">
          <b>SOFX - Soluções Digitais</b>
        </Linked>
      </Typography>
      <Typography variant="subtitle1" textAlign="center">
        2024© Todos Direitos Reservados!
      </Typography>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: white;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  color: ${ColorsPallete.primary};
`;
const Linked = styled("a")`
  :hover {
    text-decoration-line: underline;
  }
`;

export default CreditsFooter;
