//@ts-nocheck

import React from "react";
import { Avatar, Box, Paper, Rating, Typography, styled } from "@mui/material";
import { ColorsPallete, FontFamily } from "@/styles/colors";
import { ratingsMock } from "@/_mock/landingpage";
import Carousel from "react-elastic-carousel";
import TitleText from "@/globals/components/title";

const Ratings = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 780, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Box id={"ratings"}>
      <Container>
        <TitleText title="avaliações" textColor={ColorsPallete.primary} />

        <StyledCarousel breakPoints={breakPoints}>
          {ratingsMock.map((v, i) => (
            <StyledPaper key={i}>
              <RatingsImage src={v.userImage} />
              <Typography variant="h6" textAlign="center">
                {v.user}
              </Typography>
              <Typography variant="caption" fontWeight="bold" my={1}>
                {v.city}
              </Typography>
              <Typography variant="subtitle2" textAlign="center" mb={1}>
                {v.text}
              </Typography>
              <Rating name="read-only" value={v.stars} readOnly />
            </StyledPaper>
          ))}
        </StyledCarousel>
      </Container>
    </Box>
  );
};

const Container = styled(Box)`
  background-color: ${ColorsPallete.primary};
  width: 100%;
  z-index: 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: min-content;
`;

const StyledCarousel = styled(Carousel)`
  align-self: center;
  padding-top: 3rem;
`;

const RatingsImage = styled(Avatar)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -40px;
  z-index: 999;
  width: 5rem;
  height: 5rem;
  border: 5px solid white;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(150, 150, 150, 0.75);
  -moz-box-shadow: 0px 4px 4px 0px rgba(150, 150, 150, 0.75);
  box-shadow: 0px 4px 4px 0px rgba(150, 150, 150, 0.75);
`;

const StyledPaper = styled(Paper)`
  margin: 2.5rem 1rem;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  max-width: 280px;
`;

export default Ratings;
