/** @type {import('next').NextConfig} */
const path = require('path');
const loaderUtils = require('loader-utils');
const withWindboxes = require('next-transpile-modules')(['@windboxes/core']);



const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`,
      ),
      'md4',
      'hex',
      4,
    )
    .replace(/^(-?\d|--|\+)/, '_$1');



const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config) => {
    // Important: return the modified config

    // loader config
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader?.includes('css-loader') &&
          !moduleLoader.loader?.includes('postcss-loader')
        ) {
          moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
        }
      });
    });

    return config
  },
}



module.exports = withWindboxes(nextConfig);
