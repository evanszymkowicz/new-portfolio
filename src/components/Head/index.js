// Reusable SEO component using Head API

export function SEO({ title, description, image, pathname }) {
  const siteUrl = "https://www.evanwolf.tech";
  const fullUrl = `${siteUrl}${pathname || ""}`;
  const ogImage = `${siteUrl}${
    image || "/images/profile/evan-szymkowicz.jpeg"
  }`;

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}

export default SEO;