module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");                  // keep your domain working
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });// optional static assets

  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("src/posts/**/*.md").sort((a,b) => b.date - a.date)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk","md","html"]
  };
};
