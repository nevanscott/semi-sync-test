module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy any .png file to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("*.png");
};
