## Terminology 

### 1-Entry point
An entry point for webpack is the starting point from which all the dependencies of a frontend project are collected. In practice, it's a simple JavaScript file.


### 2-Output
The output is where the resulting JavaScript and static files are collected during the build process. The default output folder for webpack is dist/, configurable as well.


### 3-Loaders
Loaders are third-party extensions that help webpack deal with various file extensions. For example there are loaders for CSS, for images, or for txt files.

The goal of a loader is to transform files in modules. Once the file becomes a module, webpack can use it as a dependency in your project.


### 4-Plugins
Plugins are third-party extensions that can alter how webpack works. For example there are plugins for extracting HTML, CSS, or for setting up environment variables.


### 5-Mode
webpack has two modes of operations: development and production.

## Getting satrted: 

mkdir webpack-tutorial && cd webpack-tutorial

npm init -y

## Dependencies

npm i webpack webpack-cli webpack-dev-server --save-dev

### To work with HTML in webpack we need to install a plugin, html-webpack-plugin
npm i html-webpack-plugin --save-dev

### To work with CSS in webpack we need to install at least two loaders.

npm i css-loader style-loader --save-dev

### To work with SASS in webpack we need to install at least the appropriate loaders.

Loaders here are necessary for helping webpack to understand how to deal with .scss files.

npm i css-loader style-loader sass-loader sass --save-dev

### Working with modern JavaScript

webpack doesn't know on its own how to transform JavaScript code. This task is outsourced to a third-party loader, specifically babel-loader, with babel.

npm i @babel/core babel-loader @babel/preset-env --save-dev

Then configure babel by creating a new file, babel.config.json




touch webpack.config.js
