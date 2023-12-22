# Run decorator in javascript

## 1. Install the required packages:

`npm install @babel/core @babel/node @babel/preset-env @babel/plugin-proposal-decorators`

## 2. Create a .babelrc file in your project's root directory and configure it:

`{
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
}`

## 3. Use Babel to run your Node.js script. Instead of using node, use babel-node:

`npx babel-node your_script.js`
