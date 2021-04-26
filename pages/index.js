import Head from "next/head";
import HomeBackground from "../components/HomeBackground";
import HomeTitle from "../components/HomeTitle";
import Header from "../components/ui/Header";
import { Footer } from "../components/ui/Styled";
import Theme from "../components/ui/Theme";

export default function Home() {
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
      <HomeTitle />
      <Footer white>©2021 by Ryan Harman</Footer>
      <HomeBackground />
    </Theme>
  );
}
