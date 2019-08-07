module.exports = {
  "extends": ["airbnb"],
  "plugins": ["react"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", "jsx"]
      }
    ],
    "max-len": ["error", 128]
  },
  "env": {
    "browser": true
  }
}