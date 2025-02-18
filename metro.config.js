const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**

Metro configuration
https://facebook.github.io/metro/docs/configuration
@type {import('metro-config').MetroConfig}
*/
const defaultConfig = getDefaultConfig(__dirname);
const customConfig = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/font/'],
};
module.exports = mergeConfig(defaultConfig, customConfig);
