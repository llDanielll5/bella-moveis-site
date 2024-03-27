//@ts-nocheck

import React, { useRef, useState } from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { ColorsPallete } from "@/styles/colors";
import { dynamicImages } from "@/_mock/services_2";
import { useRouter } from "next/router";
import useWindowSize from "@/globals/hooks/useWindowSize";
import TitleText from "@/globals/components/title";

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
            onClick={() => window.open(`/servico/${item.slug}`)}
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

export default Services;
