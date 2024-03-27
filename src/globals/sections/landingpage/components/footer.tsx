import React from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { ColorsPallete, FontFamily } from "@/styles/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { whatsappNumber } from "./card-services";

const Footer = () => {
  const facebookUrl =
    "https://www.facebook.com/profile.php?id=61556356902233&mibextid=ZbWKwL";
  const instagramUrl = "https://www.instagram.com/sobmedida_planjenados";

  const openFacebook = () => window.open(facebookUrl, "_blank");
  const openInstagram = () => window.open(instagramUrl, "_blank");

  const msg = `Olá!! Gostaria de realizar um orçamento com a Bella Móveis!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    msg
  )}`;

  return (
    <Container id={"footer"}>
      <InnerContainer>
        <LogoWhite src={"/images/logo.png"} alt="" />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            fontFamily={FontFamily.primary}
            variant="subtitle1"
            color={ColorsPallete.secondary}
          >
            Nossas Redes:
          </Typography>
          <Box display="flex" alignItems="center">
            <StyledIconButton
              size="small"
              sx={{ color: ColorsPallete.secondary }}
              onClick={openInstagram}
            >
              <InstagramIcon />
            </StyledIconButton>
            {/* <IconButton
              sx={{ color: ColorsPallete.secondary }}
              onClick={openFacebook}
            >
              <FacebookIcon />
            </IconButton> */}
          </Box>
        </Box>

        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography
            fontFamily={FontFamily.primary}
            variant="body2"
            textAlign="center"
            color={ColorsPallete.secondary}
          >
            Gostou dos nossos serviços? <br />
            <StyledA href={zapHref} target="_blank">
              Solicite um orçamento!
            </StyledA>
          </Typography>
        </Box>
      </InnerContainer>
    </Container>
  );
};

const Container = styled(Box)`
  font-family: "${FontFamily.primary}";
  width: 100%;
  padding: 2rem 4rem 4rem 4rem;
  background-color: ${ColorsPallete.primary};
  color: white;
`;

const LogoWhite = styled("img")`
  max-width: 180px;
`;

const InnerContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const StyledIconButton = styled(IconButton)`
  transition: 0.4s;
  :hover {
    scale: 1.2;
  }
`;

const StyledA = styled("a")`
  font-weight: bold;
  text-decoration-line: underline;
  :hover {
    color: white;
  }
`;

export default Footer;
