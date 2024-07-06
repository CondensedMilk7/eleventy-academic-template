const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const navigationPlugin = require("@11ty/eleventy-navigation");
const MarkdownIt = require("markdown-it");
const markdownItBiblatex = require("@arothuis/markdown-it-biblatex");
const mdAnchor = require("markdown-it-anchor");
const mdTableOfContents = require("markdown-it-table-of-contents");
const mdHighlightjs = require("markdown-it-highlightjs");
const mathjax3 = require("markdown-it-mathjax3");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const terser = require("terser");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await terser.minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    },
  );

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

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
      data: "data",
    },
  };
};
