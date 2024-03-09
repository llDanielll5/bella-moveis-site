import React from "react";
import { Box, Button, IconButton, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import MiniCardBanner from "./mini-card";
import { whatsappNumber } from "./card-services";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { bannerMock } from "@/_mock/landingpage";

const Banner = () => {
  const msg = `Olá!! Gostaria de saber mais sobre os serviços do Doutor Reparos!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    msg
  )}`;
  const handleOpenZap = () => window.open(zapHref, "_blank");

  return (
    <Box position="relative">
      <Carousel
        showArrows
        swipeable
        showThumbs={false}
        showIndicators
        autoPlay
        infiniteLoop
        animationHandler={"fade"}
        transitionTime={2000}
        width={"100%"}
        stopOnHover={false}
      >
        {bannerMock.map((item, index) => (
          <ItemCarousel key={index}>
            <img src={item.img} />
            <StyledParagraph>
              <TextParagraph>{item.title}</TextParagraph>
            </StyledParagraph>
          </ItemCarousel>
        ))}
      </Carousel>
    </Box>
  );
};

const ItemCarousel = styled(Box)`
  position: relative;
`;

const StyledParagraph = styled(Box)`
  position: absolute;
  z-index: 1000;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const TextParagraph = styled("p")`
  font-family: "Arbutus Slab", sans-serif;
  color: ${ColorsPallete.secondary};
  font-size: 2rem;
  @media screen and (max-width: 760px) {
    font-size: 1.6rem;
  }
`;

export default Banner;
