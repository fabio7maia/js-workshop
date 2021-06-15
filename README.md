# Workshop Javascript

Este projeto tem como objetivo **demonstrar as potencialidades e flexibilidade do uso do JS (Javascript) em diferentes contextos**.

O repositório contém o código fonte em JS de uma aplicação para efetuar a Gestão de Tarefas, com código em contexto de Cliente (browser) e Servidor.

## 1. Funcionalidades

A aplicação de Gestão de Tarefas tem as seguintes funcionalidades:

- Criação de tarefas
- Alteração do estado das tarefas
- Validação da alteração de estados (New => In Progress => Done)
- Apresentação de mensagens de erro

### 1.1. Cliente (browser)

É utilizada a biblioteca [React.js](https://reactjs.org) para apoio na criação de toda a UI (Interface de Utilizador).

A aplicação comunica com uma WEB API (Servidor) para efetuar as respetivas operações disponíveis, usando pedidos HTTP em REST JSON.

### 1.2. Servidor

No Servidor é utilizado o [Express.js](https://expressjs.com) para auxiliar o processamento das operações recebidas, sendo utilizada uma DB (Base de Dados) local (em ficheiro) usando Sqlite para persistir os dados.

## 2. Modo desenvolvimento

Para correr localmente a aplicação e efetuar alterações é necessário alguns requisitos, devendo os mesmos serem satisfeitos pela ordem apresentada.

### 2.1. Software

- [Node.js](https://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com) (_Opcional_)
- [Git](https://git-scm.com) (_Opcional_)

### 2.2. Comandos

1. Instalação de todas as dependências da aplicação (Cliente+Servidor)<br>`yarn run setup-repo`
2. Arranque da aplicação (Cliente+Servidor)<br>`yarn run start:dev`
