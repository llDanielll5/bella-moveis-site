import Head from "next/head";
import { Box, Typography } from "@mui/material";
import LandingPage from "@/globals/sections/landingpage";

export default function Application() {
  return (
    <Box position="relative">
      <Head>
        <title>Sob Medida | Móveis e Planejados</title>
        <meta
          name="description"
          content="Sob Medida - Móveis e Planejados em Valparaíso de Goiás"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="moveis,planejados,sob,medida,valparaíso,goiás,medida"
        />
        <meta name="robôs" content="index, follow"></meta>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <LandingPage />
    </Box>
  );
}
