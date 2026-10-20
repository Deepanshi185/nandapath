import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, canonical }) {
  const siteName = "NandaPath Adventures";
  const defaultTitle = "NandaPath Adventures | Himalayan Trekking & Expeditions Dehradun";
  const defaultDesc = "Explore Himalayas with NandaPath. Expert-led treks in Uttarakhand, Himachal Pradesh, and Kashmir including Kedarkantha, Har Ki Dun, and Bali Pass.";
  const defaultKeywords = "Himalayan Treks, Kedarkantha Trek, Har Ki Dun, Trekking in Uttarakhand, Dehradun Trekking Guide, Rahul Jaraut";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:site_name" content={siteName} />

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}