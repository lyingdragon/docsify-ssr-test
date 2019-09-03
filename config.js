module.exports = {
  template: './ssr.html',
  maxAge: 60 * 60 * 1000, // lru-cache config
  config: {
	"basePath": "https://lyingdragon.github.io/docsify-ssr-test/",
      "loadSidebar": true,
      "loadNavbar": true

  }
}
