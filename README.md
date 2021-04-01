# secomp-ui

Front-end da [IV SECOMP UEM](https://www.din.uem.br/secomp), feito com muito carinho em Vue.js 

## Build
Dependências de build
  - Node.js
  
Dentro da pasta do projeto instale as dependências de runtime:
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
 ````
  VUE_APP_API_URL: Endereço para a API da SECOMP - somente usado nas telas da organização
  Arquivo: .env
 ````
Ponto de montagem em subpath:
 ````
  publicPath: No build de produção monta o app no subpath /secomp/
  Arquivo: vue.config.js
  
  base: (VueRouter) também usado para montar as rotas relativas ao subpath /secomp/
  Arquivo: src/main.js
````
Upgrade de protocolo no cliente:
 ````
  router.beforeEach: Devido a uma limitação com os servidores da UEM o upgrade header não funciona corretamente.
  Logo, como uma solução simples, usamos o VueRouter para mandar todas as requisições para HTTPS
  Arquivo: src/main.js
  
  OBS: Ao executar o projeto é recomendado desabilitar essa guarda de navegação, 
  caso constrário você será redirecionado para o site em .env
````

## Licença

Código livre distribuído sob licença BSD-3-Clause
