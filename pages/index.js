import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
// Dynamic import
const Home = dynamic(() => import("../components/home/Home"));
const About = dynamic(() => import("../components/about"));
const Works = dynamic(() => import("../components/showCase"));
const ContactMe = dynamic(() => import("../components/contact"));
const Layout = dynamic(() => import("../components/layout/Layout"));

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="A freelance software engineer specialized in both front-end and back-end web development."
        />
        <meta
          name="keywords"
          content="JavaScript,ReactJs, NextJs, NodeJs, TypeScript, GraphQL, Redux"
        />
        <meta name="author" content="Heran Aregawi" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Heran Aregawi | Fullstack Developer</title>
      </Head>
      <NextSeo
        title="Heran Aregawi | Fullstack Developer"
        description="A freelance software engineer specialized in both front-end and back-end web development."
        openGraph={{
          type: "website",
          url: `${process.env.SELF_URL}/`,
          title: "Heran Aregawi | Fullstack Developer",
          description:
            "A freelance software engineer specialized in both front-end and back-end web development.",
          images: [
            {
              url: `${process.env.SELF_URL}/og/Brhane-Giday.png`,
              width: 800,
              height: 600,
              alt: "Heran Aregawi",
            },
          ],
        }}
      />
      <Layout>
        <Home />
        <About />
        <Works />
        <ContactMe />
      </Layout>
    </React.Fragment>
  );
}
