const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const navigationPlugin = require("@11ty/eleventy-navigation");
const MarkdownIt = require("markdown-it");
const markdownItBiblatex = require("@arothuis/markdown-it-biblatex");
const mdAnchor = require("markdown-it-anchor");
const mdTableOfContents = require("markdown-it-table-of-contents");
const mdHighlightjs = require("markdown-it-highlightjs");
const mathjax3 = require("markdown-it-mathjax3");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("shorten", (path) => {
    if (path.length > 19) {
      return path.substring(0, 16) + "...";
    } else {
      return path;
    }
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  md = new MarkdownIt({
    typographer: true,
    linkify: true,
  });

  md.use(markdownItBiblatex, {
    bibPath: "src/assets/bibliography.bib",
    bibliographyTitle: '<h2 class="bibliography-title">References</h2>',
    wrapBibliography: true,
    bibliographyContentsWrapper: "ul",
    bibliographyEntryWrapper: "li",
  });

  md.use(mdAnchor, {
    permalink: mdAnchor.permalink.headerLink(),
  });

  md.use(mdTableOfContents, {
    containerHeaderHtml: "<h2>Table of Contents</h2>",
    containerClass: "table-of-contents",
  });

  md.use(mdHighlightjs, { auto: false });

  md.use(mathjax3);

  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "includes/partials",
      layouts: "includes/layouts",
      data: 'data',
    },
  };
};
