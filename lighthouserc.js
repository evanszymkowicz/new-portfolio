module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run serve",
      startServerReadyPattern: "Site running at",
      startServerReadyTimeout: 30000,
      url: ["http://localhost:9000/"],
      numberOfRuns: 1,
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
      },
    },
  },
};
