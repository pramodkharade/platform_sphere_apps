module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@store': './src/store',
            '@components': './src/components',
            '@screens': './src/screens',
            '@features': './src/features',
            '@theme': './src/theme',
            '@types': './src/types',
            '@i18n': './src/i18n',
            '@assets': './src/assets',
            '@navigation': './src/navigation',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
