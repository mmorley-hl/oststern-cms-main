# eleventy-webpack :balloon:

A barebone [eleventy](https://www.11ty.dev/) and [webpack](https://webpack.js.org/) template. Fork and go.

## Features

- :zap: Fast build with per env configs ([babel-env](https://babeljs.io/docs/en/babel-preset-env), [postcss-preset-env](https://github.com/csstools/postcss-preset-env), [webpack](https://webpack.js.org/configuration/#use-different-configuration-file)...)
- `.js` (ES6, Babel)
- `.css` (Sass, PostCSS, Autoprefixer)


Live demo https://oststern.netlify.app

## Usage
First Make sure you use the correct node.js version
[Node-js](https://nodejs.org/en/)

Second install the dependencies:

```sh
npm install
```

Then you can:

| Command               | Description                                   |
| --------------------- | --------------------------------------------- |
| **`npm run dev`**     | Run your website on http://localhost:8080     |
| **`npm run prod`**    | Build your production website inside `/_site` |            |




## Webpack

A very simple `webpack.config.js` is included. Feel free to change it.
