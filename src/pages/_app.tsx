import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import createEmotionCache from "@/globals/configs/mui/createEmotionCache";
import { useNProgress } from "@/globals/hooks/useNProgress";
import { createTheme } from "@/globals/configs/theme";
import { CacheProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { CssBaseline, ThemeProvider } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}
