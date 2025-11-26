import Layout from "../components/Layout";
import Intro from "../components/Intro";
import { META } from "../utils/constants";

// MODERN: Use Gatsby Head API (REPLACES react-helmet)
export function Head() {
  return (
    <>
      <title>{META.index.title}</title>
      <meta name="description" content={META.index.description} />
      <meta property="og:image" content={META.common.image} />
    </>
  );
}
