module.exports = {
  ci: {
    collect: {
      // Build and serve the site before testing
      startServerCommand: "npm run serve",
      startServerReadyPattern: "Site running at",
      startServerReadyTimeout: 30000,
      url: [
        "http://localhost:9000/",
        "http://localhost:9000/projects/",
        "http://localhost:9000/404/",
      ],
      numberOfRuns: 3, // Run 3 times and average the results
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        // Performance
        "categories:performance": ["error", { minScore: 0.9 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 2000 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["warn", { maxNumericValue: 300 }],
        "speed-index": ["warn", { maxNumericValue: 3000 }],

        // Accessibility
        "categories:accessibility": ["error", { minScore: 0.95 }],

        // Best Practices
        "categories:best-practices": ["error", { minScore: 0.9 }],

        // SEO
        "categories:seo": ["error", { minScore: 0.95 }],

        // PWA
        "categories:pwa": ["warn", { minScore: 0.8 }],

        // Specific checks
        "uses-responsive-images": "off", // Gatsby handles this
        "offscreen-images": "warn",
        "unused-javascript": "warn",
        "modern-image-formats": "warn",
        "uses-optimized-images": "warn",
        "uses-text-compression": "error",
        "uses-rel-preconnect": "warn",
      },
    },
    upload: {
      target: "temporary-public-storage", // Free public storage for 7 days
    },
  },
};
