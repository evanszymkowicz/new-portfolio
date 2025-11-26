// Modern font loading with CSS
export const onClientEntry = () => {
  // Preload fonts for better performance
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Roboto+Mono&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};
