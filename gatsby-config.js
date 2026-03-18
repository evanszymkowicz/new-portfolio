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
        icon: "src/assets/favicon.png", // Source for all icon sizes
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        cache_busting_mode: "none", // Required for offline plugin
      },
    },

    // Service Worker for offline support (MUST come after manifest)
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: [
            "**/*.{js,css,html,png,jpg,jpeg,svg,gif,webp,woff,woff2, ttf}",
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
