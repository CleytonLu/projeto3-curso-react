module.exports = {
    environment:{
      browser: true,
      es6: true,
    },
    extends:[
      'plugin:react/recommended',
      'airbnb',
      'more-beautiful',
      'prettier/react',
    ],
    globals: {
      Atomics: 'read-only',
      SharedArrayBuffer: 'read-only',
    },
    parser: 'babel-eslint',
    parserOptions:{
      ECMAResources :{
        jsx:true,
      },
      version: 2018,
      sourceType: 'module',
    },
    plugins: [
      'to-react',
      'more-beautiful',
      'reaction-hooks'
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-one-expression-per-line': 0 ,
      'react/jsx-filename-extension': 0,
      "reaction-hooks/hook-rules": "error",
      "react-hooks/exhaustive-deps": "warn"
    } ,
  } ;
