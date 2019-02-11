---
layout: page
---
# Dev Docs

## WebPack

This page will give a basic overview setting up webpack for your project.

### Setup

#### NPM Installation Command

```
npm i --save-dev webpack webpack-cli babel-core babel-loader babel-preset-env ts-loader node-sass sass-loader css-loader style-loader
```

##### WebPack

The `webpack` and `webpack-cli` libraries are required to bundle the code.

##### Babel

The `@babel/core`, `babel-loader` and `@babel/preset-env` are required to compile the code to ESCurrent, for support of all browsers. The `ts-loader` plugin is required for compiling TypeScript code to JavaScript.

##### Styles

The `node-sass` and `sass-loader` libraries are required if you are using `.sass` code. The `css-loader` and `style-loader` libraries are required if you want to include `.css` code in the bundle.

### Basic Example

#### tsconfig.json

```js
{
    "compilerOptions": {
        "lib": [
            "dom",
            "es2015"
        ],
        "target": "es5"
    },
    "include": [
        "src/**/*"
    ]
}
```

#### webpack.config.js

```js
var path = require("path");
var webpack = require("webpack");

// Return the configuration
module.exports = {
    // Main entry point(s) of your libraries/applications
    entry: "./src/index.ts",

    // Output location
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },

    // Resolve the file names
    resolve: {
        extensions: [".js", ".css", ".scss", ".ts"]
    },

    // Loaders
    module: {
        rules: [
            // SASS to JavaScript
            {
                // Target the sass and css files
                test: /\.s?css$/,
                // Define the compiler to use
                use: [
                    // Create style nodes from the CommonJS code
                    { loader: "style-loader" },
                    // Translate css to CommonJS
                    { loader: "css-loader" },
                    // Compile sass to css
                    { loader: "sass-loader" }
                ]
            },
            // TypeScript to JavaScript
            {
                // Target TypeScript files
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    // JavaScript (ES5) -> JavaScript (Current)
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env"] }
                    },
                    // TypeScript -> JavaScript (ES5)
                    { loader: "ts-loader" }
                ]
            }
        ]
    }
}
```

### Externals

If your application uses a core/common file, then applications requiring the `gd-sprest` and/or `gd-sprest-bs` libraries to be excluded from their bundle will need to add the following configuration.

```js
// Return the configuration
module.exports = {
    // Basic Configuration Here

    // Exclude the gd-sprest and/or gd-sprest-bs libraries
    // This would be dependent on the libraries you are using
    externals: {
        "gd-sprest": "$REST",
        "gd-sprest-bs": "$REST"
    }
}
```