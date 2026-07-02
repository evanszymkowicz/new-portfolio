import React from "react";
import { META, SITE_CONFIG } from "../../utils/constants";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: boolean;
  author?: string;
  keywords?: string[];
  lang?: string;
  children?: React.ReactNode;
}

const { siteUrl, author: defaultAuthor, social } = SITE_CONFIG;

export function SEO({
  title,
  description,
  image,
  pathname = "/",
  article = false,
  author = defaultAuthor,
  keywords = [],
  lang = "en",
  children,
}: SEOProps) {
  const seo = {
    title: title || `${defaultAuthor} | Software Developer`,
    description:
      description || "Washington, D.C. based developer and creative.",
    image: `${siteUrl}${image || META.common.image}`,
    url: `${siteUrl}${pathname}`,
  };

  // Structured data for search engines
  const schemaOrgWebPage = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : "WebPage",
    url: seo.url,
    headline: seo.title,
    description: seo.description,
    image: seo.image,
    author: {
      "@type": "Person",
      name: author,
      url: siteUrl,
      jobTitle: "Software Developer",
    },
  };

  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content="Evan Szymkowicz's Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={social.twitter} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>

      {/* Additional meta tags from parent */}
      {children}
    </>
  );
}
