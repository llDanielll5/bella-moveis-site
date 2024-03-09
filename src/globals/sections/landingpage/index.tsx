import React from "react";
import { Box } from "@mui/material";
import HeaderNavigation from "@/globals/components/headerNavigation";
import Banner from "./components/banner";
import Services from "./components/services";
import Footer from "./components/footer";
import Ratings from "./components/ratings";
import Differences from "./components/differences";
import CreditsFooter from "./components/credits";

const LandingPage = () => {
  return (
    <Box position="relative" sx={{ overflowX: "hidden" }}>
      <HeaderNavigation />
      <Banner />
      <Services />
      <Ratings />
      <Footer />
      <CreditsFooter />
    </Box>
  );
};

export default LandingPage;
