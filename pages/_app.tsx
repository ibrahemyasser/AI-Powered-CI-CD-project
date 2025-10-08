import type { AppProps } from "next/app";
import React from "react";
import Providers from "../components/Providers";
import "../tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers children={<Component {...pageProps} />} />
  );
}

