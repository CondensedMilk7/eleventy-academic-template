// Note: changing this requires restarting the server to reflect the changes
module.exports = {
  siteName: "Eleventy Academic Template",
  defaultAuthor: "John Doe",
  navigation: [
    { title: "About", path: "/", fullMatch: true },
    { title: "Posts", path: "/posts", fullMatch: false },
    { title: "RSS", path: "/feed.xml" },
  ],
};
