# Todo List Application

Uma aplicação de lista de tarefas (Todo List) desenvolvida em React usando Firestore do Firebase. Este projeto implementa funcionalidades para criar, ler, editar e deletar tarefas, utilizando o react-md como UI Kit.

## 🖼️ Funcionalidades

- **CRUD** (Create, Read, Update, Delete) de tarefas utilizando Firestore do Firebase.
- Interface de usuário responsiva e intuitiva.
- Testes unitários com Testing Library.
- Estilização usando SASS e metodologia CSS BEM.
- Validação de formulário com biblioteca dedicada.
- Utilização de Design Tokens.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React (Classes e Hooks)
- **UI Kit:** react-md@v1
- **Gerenciamento de Estado:** Context API.
- **Estilização:** SASS
- **Validação de Formulário:** Formik e Yup
- **Firebase:** Firestore
- **Testes:** Testing Library
- **Documentação:** Storybook
- **Controle de Versão:** Git

## 📂 Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── FormTodo.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   └── TodoApp.jsx
├── shared/
│   └── Loading.js
├── styles/
│   └── main.scss
├── tests/
│   ├── FormTodo.test.jsx
│   ├── TodoItem.test.jsx
│   └── TodoList.test.jsx
├── utils/
│   └── firebase.js
└── ... (outros arquivos e pastas)
```

## 🚀 Como Rodar o Projeto

### Passos para rodar localmente

- git clone https://github.com/NtidandaraBittencourt/todo_list_react
- cd todo_list_react

#### Instale as dependencias e rode a aplicação

- npm install
- npm start


#### Rodar os testes

- npm test

