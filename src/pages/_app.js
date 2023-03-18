import "bootstrap/dist/css/bootstrap.min.css";
import Swiper from "swiper";
import 'swiper/css';
import "@/styles/globals.css";

import Layout from "@/Components/Layout/Layout";
import Head from "next/head";
import Script from "next/script";
import Home from "@/Components/Home/Home";
import OurDevelopment from "@/Components/OurDevelopment/OurDevelopment";
import Trending from "@/Components/Trending/Trending";
import LeadingGallery from "@/Components/LeadingGallery/LeadingGallery";
import WhoWeAre from "@/Components/WhoWeAre/WhoWeAre";
import First from "@/Components/First/First";
import Latest from "@/Components/Latest/Latest";

export default function App({ Component, pageProps }) {
  const swiper = new Swiper();

  return (
    <>
      <Layout>
        <Head>
        </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></Script>

        <Component {...pageProps} />
        <Home />
        <OurDevelopment />
        <Trending/>
        <LeadingGallery />
        <WhoWeAre />
        <First/>
        <Latest />


      </Layout>
    </>
  );
}
