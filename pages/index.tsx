import Head from "next/head";
import Image from "next/image";
import { Box, Container, Typography, Button } from "@material-ui/core";
import React from "react";
import useMobile from "../hooks/useMobile";
import InputNumber from "../components/InputNumber";

export default function Home() {
  const isMobile = useMobile();
  
  return (
    <>
      <Container>
        <Head>
          <title>Dina Challenge</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box display="flex" alignItems="center">
          <Image
            src="/dina-logo.jpeg"
            alt="digital-natives"
            width={100}
            height={100}
          />
          <Box marginLeft={isMobile ? 1 : 12}>
            {isMobile ? (
              <Typography variant="h6">
                Arabic number conversion tool
              </Typography>
            ) : (
              <Typography variant="h3">
                Arabic number conversion tool
              </Typography>
            )}
          </Box>
        </Box>
        <Box p={2}>
          <InputNumber/>
        </Box>
      </Container>
      <Box
        style={{
          textAlign: "center",
          bottom: 0,
          position: "absolute",
          width: "100%",
          height: "5%",
        }}
      >
        <Typography>Antolina Gonzalez - 2021</Typography>
      </Box>
    </>
  );
}
