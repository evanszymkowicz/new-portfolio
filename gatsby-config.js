module.exports = {
  siteMetadata: {
    title: "Evan Szymkowicz | Software Developer",
    description: "Washington, D.C. based developer and creative.",
    siteUrl: "https://www.evanwolf.tech",
    author: "Evan Szymkowicz",
    image: "/images/profile/evan-szymkowicz.jpeg",
  },
  plugins: [
    // Filesystem source for JSON data
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    // Filesystem source for images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`,
      },
    },

    // Modern image handling (REPLACES old custom Image component)
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // JSON transformer
    "gatsby-transformer-json",

    // Styled components with SSR support
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV !== "production",
        fileName: false,
        ssr: true,  // For consistent SSR rendering
        minify: true, //  Reduce CSS size
        transpileTemplateLiterals: true,  //  For better compatibility with older browsers
        pure: true, //  Enable dead code elimination for unused styles
      },
    },

    // PWA manifest (REPLACES gatsby-plugin-favicon)
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Evan Szymkowicz Portfolio",
        short_name: "EWS Portfolio",
        start_url: "/",
        background_color: "#013220",
        theme_color: "#013220",
        display: "minimal-ui",
        icon: "src/assets/favicon.svg",
        cache_busting_mode: "none", // Required for offline plugin
      },
    },

    // Service Worker for offline support (MUST come after manifest)
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: [
            "**/*.{js,css,html,png,jpg,jpeg,svg,gif,webp,woff,woff2,ttf}",
          ],
          runtimeCaching: [
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json$/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /^https?:.*\/app-data\.json$/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern:
                /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/.*$/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /^https?:\/\/fonts\.gstatic\.com\/.*$/,
              handler: "CacheFirst",
            },
          ],
        },
      },
    },

    // Sitemap
    "gatsby-plugin-sitemap",
  ],
};
