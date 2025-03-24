Teste Técnico - Autenticação e Cadastro de Usuários e Empresas

Sobre o Projeto

Este projeto tem como objetivo avaliar suas habilidades no desenvolvimento de uma API de autenticação de usuários e empresas, bem como a gestão de cadastros.

Requisitos

Criar um sistema de autenticação com JWT

Implementar cadastro de usuários e empresas

Implementar login de usuários e empresas

Utilizar banco de dados relacional (PostgreSQL)

Tecnologias Sugeridas

Backend: Node.js com NestJS ou Express

Banco de Dados: PostgreSQL

ORM: Prisma

Autenticação: JWT

Endpoints Esperados
tá bom?
Endpoints Esperados

Autenticação

POST /auth/login

Autentica um usuário ou empresa e retorna um token JWT.

Request:

{
"email": "exemplo@empresa.com",
"password": "senha123"
}

Response:

{
"token": "eyJhbGciOiJI..."
}
Cadastro

POST /users

Cadastra um novo usuário.

Request:

{
"name": "João Silva",
"email": "joao@email.com",
"password": "senha123"
}

Response:

{
"id": 1,
"name": "João Silva",
"email": "joao@email.com",
"createdAt": "2024-03-10T12:00:00Z"
}

POST /companies

Cadastra uma nova empresa.

Request:

{
"name": "Empresa X",
"cnpj": "12345678000199",
"email": "contato@empresa.com",
"password": "senha123"
}

Response:

{
"id": 1,
"name": "Empresa X",
"cnpj": "12345678000199",
"email": "contato@empresa.com",
"createdAt": "2024-03-10T12:00:00Z"
}
