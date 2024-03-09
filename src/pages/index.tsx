import Head from "next/head";
import { Box, Typography } from "@mui/material";
import LandingPage from "@/globals/sections/landingpage";

export default function Application() {
  return (
    <Box position="relative">
      <Head>
        <title>Bella Móveis | Móveis e Planejados</title>
        <meta
          name="description"
          content="Bella Móveis - Móveis e Planejados em Valparaíso de Goiás"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="moveis, planejados, bella, valparaíso, goiás"
        />
        <meta name="robôs" content="index, follow"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </Box>
  );
}
