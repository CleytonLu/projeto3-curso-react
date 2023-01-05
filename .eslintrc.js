módulo . exporta  =  {
    ambiente : {
      navegador : verdadeiro ,
      es6 : verdadeiro ,
    } ,
    estende : [
      'plugin:reagir/recomendado' ,
      'airbnb' ,
      'mais bonita' ,
      'mais bonita/reagir' ,
    ] ,
    globais : {
      Atomics : 'somente leitura' ,
      SharedArrayBuffer : 'somente leitura' ,
    } ,
    analisador : 'babel-eslint' ,
    parserOptions : {
      Recursosdoecma : {
        jsx : verdadeiro ,
      },
      versaoecma : 2018 ,
      sourceType : 'módulo' ,
    },
    plugins: [
      'reagir' ,
      'mais bonita' ,
      'ganchos de reação'
    ] ,
    regras:{
      'mais bonito/mais bonito' : 'erro' ,
      'reagir/jsx-uma-expressão-por-linha' : 0 ,
      'react/jsx-filename-extension' : 0 ,
      "ganchos de reação/regras de ganchos" : "erro" ,
      "react-hooks/exhaustive-deps" : "avisar"
    },
  } ;