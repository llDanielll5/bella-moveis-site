//@ts-nocheck

import React, { useRef, useState } from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import { servicesMock } from "@/_mock/services";
import { useRouter } from "next/router";
import useWindowSize from "@/globals/hooks/useWindowSize";
import TitleText from "@/globals/components/title";

const dynamicImages = [
  {
    img: "https://img.freepik.com/fotos-premium/interior-elegante-do-apartamento-com-cozinha-moderna-ideia-para-design-de-casa_999766-53.jpg?w=826",
    class: "one",
    title: "Cozinha",
    slug: "cozinha",
  },
  {
    img: "https://img.freepik.com/fotos-premium/luxo-piscina-interior-design-villa-na-area-da-cozinha-que-conta-com-balcao-ilha-construido-em-f_41487-174.jpg",
    class: "two",
    title: "Sala",
    slug: "sala",
  },
  {
    img: "https://img.freepik.com/fotos-premium/moderna-sala-de-estar-em-casa-espacosa_41487-822.jpg",
    class: "three",
    title: "Quartos",
    slug: "quarto",
  },
  {
    img: "https://img.freepik.com/fotos-premium/sala-de-estar-elegante_305343-5910.jpg",
    class: "four",
    title: "Escritórios",
    slug: "escritorio",
  },
  // {
  //   img: "https://img.freepik.com/fotos-premium/sala-de-estar-elegante-com-um-sofa-grande-e-confortavel_305343-13234.jpg",
  //   class: "five",
  //   title: ''
  // },
];

const Services = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  const hoverRef = useRef<HTMLDivElement>(null);

  const mouseHover = (className: string) => {
    if (width < 760) return;
    let element = document.getElementById(className);
    element?.style.setProperty("display", "flex");
  };
  const mouseExit = (className: string) => {
    if (width < 760) return;
    let element = document.getElementById(className);
    element?.style.setProperty("display", "none");
  };

  return (
    <Box sx={{ backgroundColor: ColorsPallete.primary }} id={"services"}>
      <Stack pt={4} alignItems="center">
        <TitleText title="Catálogo" textColor={ColorsPallete.primary} />
        <Typography variant="caption" color={ColorsPallete.secondary} mt={4}>
          Clique para saber mais..
        </Typography>
      </Stack>

      <div className="container">
        {dynamicImages.map((item, index) => (
          <div
            className={`box ${item.class}`}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={() => window.open(`/${item.slug}`)}
            data-text="Texto"
            onMouseEnter={(e) => mouseHover(`hovered-${item.class}`)}
            onMouseLeave={() => mouseExit(`hovered-${item.class}`)}
          >
            <div id={`hovered-${item.class}`}>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 500px;
  position: relative;

  #div1 {
    grid-area: 1 / 1 / 5 / 2;
    z-index: 100;
    border: 0.1px solid white;
    position: relative;
  }
  #div2 {
    grid-area: 1 / 2 / 5 / 3;
    z-index: 100;
    border: 0.1px solid white;
    position: relative;
  }
  #div3 {
    grid-area: 1 / 3 / 5 / 4;
    z-index: 100;
    border: 0.1px solid white;
    position: relative;
  }
  #div4 {
    grid-area: 1 / 4 / 5 / 5;
    z-index: 100;
    border: 0.1px solid white;
    position: relative;
  }
`;

const ContainerServices = styled(Box)`
  transition: all 0.4s;
  :hover {
    transition: 0.5s;
  }
`;

const InnerText = styled(Typography)`
  padding: 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CoverImage = styled("img")`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 0.4s;

  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Services;
