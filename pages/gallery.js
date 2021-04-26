import Head from "next/head";
import styled from "styled-components";
import Header from "../components/ui/Header";
import { Button, Footer } from "../components/ui/Styled";
import Theme from "../components/ui/Theme";

export default function Gallery() {
  return (
    <Theme>
      <Head>
        <title>Ryan's Photography Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <GalleryWrapper>
        <ButtonWrapper>
          <Button primary>All Images</Button>
          <Button>Tech Images</Button>
          <Button>Portraits</Button>
        </ButtonWrapper>
      </GalleryWrapper>
      <Footer>©2021 by Ryan Harman</Footer>
    </Theme>
  );
}

const GalleryWrapper = styled.main`
  width: 100%auto;
  height: calc(100vh - 185px); // viewport height - header + footer
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2em;
`;
