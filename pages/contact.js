import Head from "next/head";
import Header from "../components/ui/Header";
import {
  Button,
  Content,
  ContentWrapper,
  Footer,
  ImgWrapper,
} from "../components/ui/Styled";
import Theme from "../components/ui/Theme";
import Image from "next/image";

export default function Contact() {
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
      <ContentWrapper>
        <ImgWrapper>
          <Image
            alt="Image of me"
            src="/photographer-portrait.jpg"
            width={1920}
            height={2880}
          />
        </ImgWrapper>
        <Content>
          <h1>Contact me!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <a href="mailto:no-reply@ryan.com">
            <Button primary>CONTACT ME</Button>
          </a>
        </Content>
      </ContentWrapper>
      <Footer>©2021 by Ryan Harman</Footer>
    </Theme>
  );
}
