# build-mern-ecommerce-site
Contains a MongoDB, ExpressJS, React, and NodeJS project

# Technology Stack
- Visual Studio Code
- git
- Postman
- NodeJS
- React Developer Tools (Chrome)
- Redux DevTools (Chrome)

# VS Code Extensions
- ES7+ React/Redux/React-Native Code Snippets
- Prettier
- JavaScript (ES6) Code Snippets
- Github Copilot

# Set Up
```
nvm install 20.5
nvm use 20.5
```

```
npx create-react-app front-end
```

# Troubleshooting
```
yarn start
...
odules/babel-loader/lib/index.js:51:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
...
Switch to nvm use 20.5
```
https://nodejs.org/api/cli.html#node_optionsoptions

```
yarn start
...

    at Object.<anonymous> (/Users/alexanderlopez/Desktop/Github/build-mern-ecommerce-site/front-end-2/node_modules/react-scripts/config/webpack.config.js:28:17) {
  code: 'MODULE_NOT_FOUND'
}
...
```

# Material UI Components
- Card
- NavBar
- Grid
- Ratings

# Styled Components

# Next
- Understand the differences in `import` statements
- Build the product details page
- Add note on ATOMIC Design Pattern to the README
- Consider StoryBook components
- Consider unit tests
- Consider moving the README to project documentation in GH

# Documentation
- https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
- https://stackoverflow.com/questions/75426501/how-to-wrap-jsx-in-parent-div-with-shortcut-in-vs-code
- https://m3.material.io/styles/color/dynamic-color/overview
