export const IS_PROD = process.env.NODE_ENV === "production";

export const SITE_CONFIG = {
  siteUrl: "https://www.evanwolf.tech",
  author: "Evan Szymkowicz",
  defaultImage: "/images/profile/evan-szymkowicz.jpeg",
  social: {
    twitter: "@evanszymkowicz", // Update with your actual Twitter handle
    github: "https://github.com/evanszymkowicz",
    linkedin: "https://www.linkedin.com/in/evanszymkowicz", // Update with actual URL
    email: "ews-tech.pages.dev@protonmail.com",
  },
};

export const META = {
  common: {
    image: SITE_CONFIG.defaultImage,
    keywords: [
      "web developer",
      "software developer",
      "React",
      "Gatsby",
      "JavaScript",
    ],
  },
  index: {
    title: "Evan Szymkowicz | Developer",
    description: "Washington, D.C. based developer and creative.",
    keywords: [
      "web developer",
      "software developer",
      "portfolio",
      "React",
      "Gatsby",
    ],
  },
  profile: {
    title: "Evan Szymkowicz | About",
    description: "My profile, experience and skills as a software developer.",
    keywords: ["about", "experience", "skills", "developer profile"],
  },
  projects: {
    title: "Evan Szymkowicz | Featured",
    description:
      "Some of what I have been working on - featured web development projects.",
    keywords: ["projects", "portfolio", "web development", "featured work"],
  },
};
