import Head from "next/head";
import Header from "../components/ui/Header";
import { Button } from "../components/ui/Styled";
import Theme from "../components/ui/Theme";

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
    </Theme>
  );
}
