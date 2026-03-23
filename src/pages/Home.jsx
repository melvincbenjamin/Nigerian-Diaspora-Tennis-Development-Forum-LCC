import Hero from "../components/Hero";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Home | Nigerian Tennis Development Forum LCC</title>

        <meta
          name="description"
          content="Learn about the Nigerian Tennis Development Forum LCC. We are dedicated to growing lawn tennis in Nigeria by nurturing talent, organizing tournaments, and creating sponsorship opportunities for players."
        />

        <meta
          name="keywords"
          content="Nigeria tennis, tennis Nigeria, Nigerian tennis players, tennis development Nigeria, tennis sponsorship Nigeria, lawn tennis Nigeria, tennis tournaments Nigeria"
        />

        <meta name="author" content="Nigerian Diaspora Tennis Development Forum LCC" />

        {/* Open Graph */}
        <meta property="og:title" content="About Nigerian Tennis Development Forum" />
        <meta
          property="og:description"
          content="Learn how we are growing tennis in Nigeria through training, tournaments, and sponsorship opportunities."
        />
        <meta property="og:image" content="/Logo.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nigerian Tennis Development Forum" />
        <meta
          name="twitter:description"
          content="Growing tennis in Nigeria through structured development and sponsorship opportunities."
        />
      </Helmet>
      <Hero />
    </div>
  );
}

export default Home;