/** @type {import('next').NextConfig} */
const {withFrameWorkConfg} = require('./framework/common/config');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", 'es'],
    defaultLocale: 'en-US',
  }
}

module.exports = withFrameWorkConfg(nextConfig)
