module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.css$": "jest-transform-css"
    },
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    }
  };