const fs = require('fs')
const path = require('path')
const { sitemapBaseFileName } = require('../next-sitemap.config')

// script opens out/sitemap.xml and removes trailing slash from base path "https://www.modepharm.pl/" to "https://www.modepharm.pl"
// I wasn't able to configure that from next-sitemap.config.js file
fs.readFile(path.resolve(__dirname, '../out/sitemap.xml'), { encoding: 'utf8' }, function (err, data) {
  if (err) return console.log(err)
  var formatted = data.replace(/<loc>https:\/\/www.modepharm.pl\/<\/loc>/g, '<loc>https://www.modepharm.pl</loc>')

  fs.writeFile(path.resolve(__dirname, '../out/sitemap.xml'), formatted, 'utf8', function (err) {
    if (err) return console.log(err)
  })
})
