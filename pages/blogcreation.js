import NewBlogSubmission from "../components/Blog/NewBlogSubmission";
import Head from "next/head";
import Header from "../components/ui/Header";
import Theme from "../components/ui/Theme";

export default function BlogCreation() {
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
      <NewBlogSubmission />
    </Theme>
  );
}
