const fs = require("fs");
const path = require("path");

/**
 * Generate a readable Lighthouse report summary
 */
function generateReport() {
  const manifestPath = path.join(__dirname, "../. lighthouseci/manifest.json");

  if (!fs.existsSync(manifestPath)) {
    console.log(
      '⚠️  No Lighthouse results found. Run "npm run lighthouse: local" first.'
    );
    return;
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

  console.log("\n🏠 Lighthouse Audit Results\n");
  console.log("═".repeat(60));

  manifest.forEach((result, index) => {
    const report = JSON.parse(fs.readFileSync(result.jsonPath, "utf8"));
    const { categories, audits } = report;

    console.log(`\n📄 ${result.url}\n`);

    // Scores
    Object.entries(categories).forEach(([key, category]) => {
      const score = Math.round(category.score * 100);
      const emoji = score >= 90 ? "🟢" : score >= 50 ? "🟡" : "🔴";
      console.log(`${emoji} ${category.title}: ${score}/100`);
    });

    // Key metrics
    console.log("\n⚡ Performance Metrics: ");
    const metrics = {
      "First Contentful Paint": audits["first-contentful-paint"],
      "Largest Contentful Paint": audits["largest-contentful-paint"],
      "Total Blocking Time": audits["total-blocking-time"],
      "Cumulative Layout Shift": audits["cumulative-layout-shift"],
      "Speed Index": audits["speed-index"],
    };

    Object.entries(metrics).forEach(([name, audit]) => {
      if (audit) {
        console.log(`  • ${name}: ${audit.displayValue}`);
      }
    });

    console.log("\n" + "─".repeat(60));
  });

  console.log("\n✅ Full reports available in . lighthouseci/ directory\n");
}

generateReport();
