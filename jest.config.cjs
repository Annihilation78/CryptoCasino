module.exports = {
  // ...otras configuraciones...
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ["/node_modules/"],
};

