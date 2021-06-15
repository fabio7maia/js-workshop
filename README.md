# Workshop Javascript

Este projeto tem como objetivo **demonstrar as potencialidades e flexibilidade do uso do JS (Javascript) em diferentes contextos**.

O repositório contém o código fonte em JS de uma aplicação para efetuar a Gestão de Tarefas, com código em contexto de Cliente (browser) e Servidor.

## 1. Funcionalidades

A aplicação de Gestão de Tarefas tem as seguintes funcionalidades:

- [x] Criação de tarefas
- [x] Alteração do estado das tarefas
- [x] Validação da alteração de estados (New => In Progress => Done)
- [x] Apresentação de mensagens de erro

### 1.1. Cliente (browser)

É utilizada a biblioteca <a href="https://reactjs.org" target="_blank">React.js</a> para apoio na criação de toda a UI (Interface de Utilizador).

A aplicação comunica com uma WEB API (Servidor) para efetuar as respetivas operações disponíveis, usando pedidos HTTP em REST JSON.

### 1.2. Servidor

No Servidor é utilizado o [Express.js](https://expressjs.com){:target="\_blank"} para auxiliar o processamento das operações recebidas, sendo utilizada uma DB (Base de Dados) local (em ficheiro) usando Sqlite para persistir os dados.

Na operação que permite a alteração de estado de uma tarefa é feita a validação de forma a garantir que a troca de estados é respeitada.

**New** => **In Progress** => **Done**

## 2. Modo desenvolvimento

Para correr localmente a aplicação e efetuar alterações é necessário alguns requisitos, devendo os mesmos serem satisfeitos pela ordem apresentada.

### 2.1. Software

- [Node.js](https://nodejs.org){:target="\_blank"}
- [Visual Studio Code](https://code.visualstudio.com){:target="_blank"} (\_Opcional_)
- [Git](https://git-scm.com){:target="_blank"} (\_Opcional_)

### 2.2. Ficheiro .env

Com o objetivo de garantir a execução em diferentes ambientes é necessária a criação do ficheiro **_.env_** na pasta **_client_**.

Para tal basta copiar o ficheiro **_.env.template_** lá existente e renomear para **_.env_**.

### 2.3. Comandos

1. Instalação de todas as dependências da aplicação (Cliente+Servidor)<br>`yarn run setup-repo`
2. Arranque da aplicação (Cliente+Servidor)<br>`yarn run start:dev`

## 3. Demos

Para a demonstração da aplicação de Gestão de Tarefas, nomeadamente os 2 contextos, Cliente e Servidor, podem ser consultados os seguintes URL's.

- [Cliente](https://js-workshop.netlify.app){:target="\_blank"}
- [Servidor](https://js-workshop.herokuapp.com){:target="\_blank"}

## 4. Tecnologias utilizadas

- [x] [Vite.js](https://vitejs.dev){:target="\_blank"}
- [x] [React.js](https://reactjs.org){:target="\_blank"}
- [x] [Express.js](https://expressjs.com){:target="\_blank"}
- [x] [Tailwindcss](https://tailwindcss.com){:target="\_blank"}
- [x] [Sqlite](https://www.sqlite.org){:target="\_blank"}
