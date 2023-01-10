const path = require("path");
const fsp = require("fs/promises");

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-modules': ({
      // minify class name [name]__[local]___
      generateScopedName: "[hash:base64:5]",
      getJSON: async (cssFilename, json, outputFilename) => {
        // console.log(cssFilename, json, outputFilename);
        await fsp
          .mkdir(path.dirname(outputFilename), { recursive: true })
          .catch(() => { });
        await fsp.writeFile(
          `${outputFilename.replace(/\.css$/, ".json")}`,
          JSON.stringify(json)
        );
      },
    }),
  }
};
