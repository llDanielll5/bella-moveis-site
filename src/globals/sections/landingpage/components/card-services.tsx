import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  Typography,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import { ColorsPallete } from "@/styles/colors";

interface CardServicesInterface {
  title: string;
  subtitle: string;
  img: string;
  slug: string;
}

export const whatsappNumber = "556191967884";

const CardServices = (props: CardServicesInterface) => {
  const router = useRouter();
  const msg = `Olá!! Gostaria de saber mais sobre a o Doutor Reparos!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    msg
  )}`;

  const getServicesDetails = () => {
    router.push({
      pathname: `/servicos/${props.slug}`,
    });
  };
  return (
    <Container onClick={getServicesDetails}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
        rowGap={1}
      >
        <ImageHead src={props.img} alt="" />

        <Typography variant="h6" textAlign="center">
          {props.title}
        </Typography>

        <CardActions>
          <Button
            variant="text"
            fullWidth
            sx={{ textTransform: "uppercase", color: ColorsPallete.primary }}
          >
            Saber Mais
          </Button>
        </CardActions>
      </Box>
    </Container>
  );
};

const Container = styled(Card)`
  background-color: white;
  -webkit-box-shadow: 7px 7px 12px 0px #e4e4e4;
  -moz-box-shadow: 7px 7px 12px 0px #e4e4e4;
  box-shadow: 7px 7px 12px 0px #e4e4e4;
  min-width: 250px;
  max-width: 250px;

  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 580px) {
    max-width: 80%;
  }
`;

const ImageHead = styled("img")`
  width: 100%;
`;

export default CardServices;
