module.exports = function (eleventyConfig) {
  // keep your custom domain
  eleventyConfig.addPassthroughCopy("CNAME");
  // optional assets folder
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // IMPORTANT: no "src/" prefix here (input dir is already src)
  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("posts/**/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
