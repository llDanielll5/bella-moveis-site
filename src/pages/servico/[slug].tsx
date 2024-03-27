import React, { useCallback, useEffect, useState } from "react";
import Footer from "@/globals/sections/landingpage/components/footer";
import HeaderNavigation from "@/globals/components/headerNavigation";
import { dynamicImages } from "@/_mock/services_2";
import { ColorsPallete, FontFamily } from "@/styles/colors";
import { Box, Button, Divider, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CreditsFooter from "@/globals/sections/landingpage/components/credits";
import Head from "next/head";

// import { Container } from './styles';

const ServiceItem: React.FC = () => {
  const router = useRouter();
  const [service, setService] = useState<any | null>(null);

  const getServiceBySlug = useCallback(() => {
    const finder = dynamicImages.find((v) => v.slug === router.query.slug);
    setService(finder);
  }, [router.query.slug]);

  useEffect(() => {
    getServiceBySlug();
  }, [getServiceBySlug]);

  if (service === null) return;

  return (
    <Container>
      <Head>
        <title>Sob Medida | {service?.title}</title>
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
      <Box p={2}>
        <HeaderNavigation notNav />
        <Divider />
        <Typography
          py={2}
          variant="h4"
          fontFamily={FontFamily.primary}
          color={ColorsPallete.secondary}
          textAlign={"center"}
        >
          {service?.title}
        </Typography>
        <Divider />
        <section className="grid-1">
          <div className="grid-wrapper">
            <div className="big">
              <img className="img-gallery" src={service?.images?.[0]} alt="" />
            </div>
            <div className="wide">
              <img className="img-gallery" src={service?.images?.[1]} alt="" />
            </div>
            <div>
              <img className="img-gallery" src={service?.images?.[2]} alt="" />
            </div>
            <div className="tall">
              <img className="img-gallery" src={service?.images?.[3]} alt="" />
            </div>
            <div className="big">
              <img className="img-gallery" src={service?.images?.[4]} alt="" />
            </div>
            <div>
              <img className="img-gallery" src={service?.images?.[5]} alt="" />
            </div>
            <div>
              <img className="img-gallery" src={service?.images?.[6]} alt="" />
            </div>
          </div>
        </section>

        <Divider />
        <Stack alignItems="center" justifyContent="center" py={2}>
          <Button
            variant="contained"
            endIcon={<WhatsAppIcon />}
            onClick={() => {}}
            sx={{
              fontFamily: FontFamily.primary,
              backgroundColor: "white",
              color: "black",
              transition: "0.3s",
              ":hover": {
                backgroundColor: "white",
                opacity: 0.8,
              },
            }}
          >
            Quero Construir meu Sonho!
          </Button>
        </Stack>
        <Divider />

        <Footer />
      </Box>
      <CreditsFooter />
    </Container>
  );
};

const Container = styled(Box)`
  background-color: ${ColorsPallete.primary};
  height: 100%;
  width: 100%;
`;

export default ServiceItem;
