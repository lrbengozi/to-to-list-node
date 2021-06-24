# To-Do List

## Regras

- Listar tarefas pendentes

- Consultar tarefas realizadas

- Incluir uma nova tarefa

  [x] Informar nome do responsável, email e descrição

  [x] Apenas e-mails válidos poderão ser incluídos (Utilizar a API do MailboxLayer)

  [x] Sugerir endereço de e-mail (did_you_mean)

- Marcar tarefas como concluídas

- Reabrir tarefas concluidas

  [x] Obigar a informação da senha "TrabalheNaSaipos"

  [x] A mesma tarefa só poderá ser aberta 2x

- Criar o "Estou sem tarefas"

## Como testar

- Clone este repositório

  - $ git clone <https://github.com/lrbengozi/to-to-list-node.git>

- Acesse a pasta do projeto no terminal/cmd

  - $ cd to-to-list-node

- Instale as dependências

  - $ npm install ou $ yarn install

- Configure o banco de dados em "ormconfig.json"

- Rode as migrations

  - $ npm typeorm migration:run ou $ yarn typeorm migration:run

- Rode a Api
  - $ npm start ou $ yarn start

## O servidor inciará na porta:3000
