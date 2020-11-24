# secomp-ui

Front end da IV SECOMP UEM, feito com muito carinho em Vue.js 

## Build
Dependências de build
  - Node.js
  
Dentro da pasta do projeto instale as dependências de run-time:
````bash
npm install
````
Para execução no modo de desenvolvimento use:
````bash
npm run serve
````
Para build em modo produção use:
````bash
npm run build
````

## Configurações
Variáveis de Ambiente:
 ````bash
  VUE_APP_API_URL: Endereço para a API de SECOMP - somente usado nas telas da organização
  Arquivo: .env
 ````
Ponto de montagem em subpath:
 ````bash
  publicPath: No build de produção monta o app no subpath /secomp/
  Arquivo: vue.config.js
  
  base: (VueRouter) também usado para montar as rotas relativas ao subpath /secomp/
  Arquivo: src/main.js
````

## Licença

Código livre distribuído sob licença BDS - 3 Clause
