## Github Finder! Encontre Usuários pelo GitHub

## Para instalar as Dependencias

`npm i`

## Variável de Ambiente

É necessário você criar duas variaveis de ambiente para este projeto. Primeiramente entre em : [https://github.com/settings/applications/new], insira um nome para aplicação, no campo "Homepage URL" e no campo "Authorization callback URL", digite :

`http://localhost:3000`

Depois disso pegue os valores de "Client ID" e "Client Secret".
Agora vá até a pasta raiz da aplicação, crie um documento com o nome ".env.local" e dentro deste documento digite :

`REACT_APP_GITHUB_CLIENT_ID='< O SEU CLIENT ID >'`

`REACT_APP_GITHUB_CLIENT_SECRET='< O SEU CLIENT SECRET >'`

Para iniciar o servidor:

`npm start`

Abra [http://localhost:3000] no seu browser

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
