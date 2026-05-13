import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
}

const DEFAULT_URL = "https://sugamghising.com.np/";
const DEFAULT_IMAGE = "https://sugamghising.com.np/og-cover.webp";
const SITE_NAME = "Sugam Ghising Portfolio";

const Seo = ({
  title,
  description,
  canonical = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  type = "website",
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
