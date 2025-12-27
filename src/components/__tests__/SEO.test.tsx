import React from "react";
import { render } from "@testing-library/react";
import { SEO } from "../SEO";

describe("SEO Component", () => {
  it("renders default meta tags", () => {
    render(<SEO />);

    const title = document.querySelector("title");
    expect(title?.textContent).toBe("Evan Szymkowicz | Software Developer");

    const description = document.querySelector('meta[name="description"]');
    expect(description?.getAttribute("content")).toBe(
      "Washington, D.C. based developer and creative."
    );
  });

  it("renders custom title and description", () => {
    render(<SEO title="Custom Title" description="Custom description" />);

    const title = document.querySelector("title");
    expect(title?.textContent).toBe("Custom Title");

    const description = document.querySelector('meta[name="description"]');
    expect(description?.getAttribute("content")).toBe("Custom description");
  });

  it("renders Open Graph meta tags", () => {
    render(<SEO title="Test Title" />);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute("content")).toBe("Test Title");

    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute("content")).toBe("website");
  });

  it("renders article type for blog posts", () => {
    render(<SEO article={true} />);

    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute("content")).toBe("article");
  });

  it("renders Twitter Card meta tags", () => {
    render(<SEO title="Test" />);

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    expect(twitterCard?.getAttribute("content")).toBe("summary_large_image");
  });

  it("includes keywords when provided", () => {
    render(<SEO keywords={["react", "gatsby", "testing"]} />);

    const keywords = document.querySelector('meta[name="keywords"]');
    expect(keywords?.getAttribute("content")).toBe("react, gatsby, testing");
  });

  it("renders canonical URL", () => {
    render(<SEO pathname="/profile" />);

    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute("href")).toBe(
      "https://www.evanwolf.tech/profile"
    );
  });

  it("includes JSON-LD structured data", () => {
    render(<SEO />);

    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();

    const structuredData = JSON.parse(script?.textContent || "{}");
    expect(structuredData["@context"]).toBe("https://schema.org");
    expect(structuredData["@type"]).toBe("WebPage");
  });
});
