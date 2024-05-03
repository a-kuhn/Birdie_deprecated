const aliases = require('./aliases');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    ['module-resolver', {
      alias: aliases
    }],
  ]
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [['module:react-native-dotenv']],
// };