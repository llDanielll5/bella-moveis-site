import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import ShieldIcon from "@mui/icons-material/Shield";
import SavingsIcon from "@mui/icons-material/Savings";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { ColorsPallete } from "@/styles/colors";
import TitleText from "@/globals/components/title";
import SpeedIcon from "@mui/icons-material/Speed";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SellIcon from "@mui/icons-material/Sell";

const CardDifferences = (props: {
  title: string;
  icon: any;
  color?: string;
}) => {
  const msg = `Olá!! Gostaria de saber mais sobre a o Doutor Reparos!`;
  const zapHref = `https://api.whatsapp.com/send?phone=5561991711401&text=${encodeURIComponent(
    msg
  )}`;
  return (
    <CardContainer>
      {props.icon ?? undefined}

      <Typography
        variant="h5"
        textAlign="center"
        color={props.color ?? ColorsPallete.primary}
      >
        {props.title}
      </Typography>
    </CardContainer>
  );
};

const Differences = () => {
  return (
    <Box id={"differences"}>
      <Box mt={5}>
        <TitleText title={"Diferenciais"} />
      </Box>
      <CardsContainer>
        <CardDifferences
          icon={
            <EngineeringIcon
              style={{ fontSize: 100, color: ColorsPallete.secondary }}
            />
          }
          title="Serviço de Qualidade"
          color={ColorsPallete.secondary}
        />
        <CardDifferences
          icon={<ShieldIcon style={{ fontSize: 100, color: "#5F1CED" }} />}
          title="Serviços com Garantia!"
          color="#5F1CED"
        />
        <CardDifferences
          icon={<SpeedIcon style={{ fontSize: 100, color: "#1CED7C" }} />}
          title="Atendimento Rápido!"
          color={"#1CED7C"}
        />
        <CardDifferences
          icon={<SellIcon style={{ fontSize: 100, color: "#ED741C" }} />}
          title="Orçamento Gratuito!"
          color="#ED741C"
        />
      </CardsContainer>
    </Box>
  );
};

const CardContainer = styled(Box)`
  border-radius: 0.3rem;
  border: 2px solid #d5d5d5;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e4e4e4;
  transition: 0.5s;
  row-gap: 2rem;
  min-width: 150px;
  :hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 580px) {
    min-width: 100px;
  }
`;

const CardsContainer = styled(Box)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 25%);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 2rem 4rem;
  @media screen and (max-width: 980px) {
    display: grid;
    grid-template-columns: repeat(3, 32%);
  }
  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
  }
  @media screen and (max-width: 580px) {
    display: grid;
    grid-template-columns: repeat(1, 80%);
  }
`;

export default Differences;
