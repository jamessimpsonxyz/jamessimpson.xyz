module.exports = function (eleventyConfig) {
  // Keep your custom domain (so CNAME file isn’t deleted)
  eleventyConfig.addPassthroughCopy("CNAME");

  // Optional: copy an assets folder if you have one
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // 🔹 Tell Eleventy where to find your posts
  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("./posts/**/*.md").sort((a, b) => b.date - a.date)
  );

  // 🔹 Directory settings (you already have these)
  return {
    dir: {
      input: "src",          // where your source files live
      output: "_site",       // where Eleventy builds to
      includes: "_includes", // layouts live here
      data: "_data"          // data files
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
