import Head from "next/head";
import styled from "styled-components";
import Header from "../components/ui/Header";
import { Button, Footer, ImgWrapper } from "../components/ui/Styled";
import Image from "next/image";
import Theme from "../components/ui/Theme";
import Link from "next/link";

export default function About() {
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
      <AboutWrapper>
        <ImgWrapper>
          <Image
            alt="Image of me"
            src="/photographer-portrait.jpg"
            width={1920}
            height={2880}
          />
        </ImgWrapper>
        <Content>
          <h1>About Ryan Harman</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <Link href="/gallery">
            <Button>MY WORK</Button>
          </Link>
          <Link href="/contact">
            <Button primary>CONTACT ME</Button>
          </Link>
        </Content>
      </AboutWrapper>
      <Footer>©2021 by Ryan Harman</Footer>
    </Theme>
  );
}

const AboutWrapper = styled.main`
  height: calc(100vh - 185px); // viewport height - header + footer
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4em;
  gap: 4em;
`;

const Content = styled.section`
  max-width: 50%;
  align-self: center;

  h1 {
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  p {
    font-size: 1.25em;
  }

  ${Button} {
    margin: 3em 2em 0 0;
  }

  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`;
