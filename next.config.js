const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
