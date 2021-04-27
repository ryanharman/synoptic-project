import Head from "next/head";
import BlogItem from "../components/Blog/BlogItem";
import Header from "../components/ui/Header";
import { Button } from "../components/ui/Styled";
import Theme from "../components/ui/Theme";
import imagepaths from "../img-paths";

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3001/blogs`);
  const blogs = await res.json();

  if (!blogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogs }, // will be passed to the page component as props
  };
}

export default function Blogs({ blogs }) {
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
      {blogs.map((blog) => {
        return (
          <BlogItem
            img={imagepaths[Math.floor(Math.random() * imagepaths.length)]}
            key={blog.id}
          >
            <div>
              <h2>{blog.title}</h2>
              <h3>{blog.datecreated}</h3>
            </div>
            <p>{blog.content}</p>
            <div>
              <Button primary>Read More</Button>
            </div>
          </BlogItem>
        );
      })}
    </Theme>
  );
}
