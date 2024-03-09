import { ColorsPallete } from "@/styles/colors";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

interface TitleTextProps {
  title: string;
}

const TitleText = (props: TitleTextProps) => {
  const titleArr = props.title.split("");
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {titleArr.map((v, i) => {
        if (v === " ") return <Box mx={1} />;
        else
          return (
            <StyledText variant="h4" key={i} textTransform={"uppercase"}>
              {v}
            </StyledText>
          );
      })}
    </Box>
  );
};

const StyledText = styled(Typography)`
  background-color: ${ColorsPallete.secondary};
  color: white;
  margin: 0 2px;
  padding: 2px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  font-size: 1.8rem;
  @media screen and (max-width: 760px) {
    height: 2rem;
    width: 2rem;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 580px) {
    height: 2.3rem;
    width: 2.3rem;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    height: 1.9rem;
    width: 1.9rem;
    font-size: 1.2rem;
  }
`;

export default TitleText;
