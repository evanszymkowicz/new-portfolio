import Helmnet from "react-helmet";

const Head = ({ title, description, image }) => {
  return (
    <Helmnet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmnet>
  );
};

export default Head;
