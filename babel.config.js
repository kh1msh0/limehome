module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          alias: {
            assets: "./assets",
            images: "./assets/images",
            components: "./src/components",
            screens: "./src/screens",
            data: "./src/data",
            utiles: "./src/utiles",
          },
        },
      ],
    ],
  };
};
