module.exports = {
  "testMatch": [
    "*",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
    "**/__tests__/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}