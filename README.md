# API Connect

API REST para gerenciamento de usuários, desenvolvida como um MVP com Node.js e Express.

O projeto foi estruturado com foco em organização, separação de responsabilidades, padronização de respostas HTTP e facilidade de evolução. A API disponibiliza operações completas de CRUD para usuários, utilizando JSON como formato de comunicação.

## Objetivo

A API Connect foi criada para fornecer ao front-end uma camada de serviços responsável pelo gerenciamento de usuários.

O projeto simula um cenário real de desenvolvimento de uma API para uma startup, permitindo:

- Cadastro de usuários;
- Listagem de usuários;
- Busca de usuário por ID;
- Atualização de dados;
- Remoção de usuários;
- Validação básica das informações recebidas;
- Respostas padronizadas em JSON;
- Tratamento de recursos inexistentes.

A persistência utilizada neste MVP ocorre em memória, por meio de uma estrutura JavaScript. Essa abordagem é adequada para prototipação e demonstração da arquitetura antes da integração com um banco de dados.

## Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript
- API REST
- HTTP
- JSON
- Git e GitHub

## Arquitetura

O projeto utiliza uma organização modular baseada na separação de responsabilidades.

```text
api-connect-kaoa-henrique/
│
├── controllers/
│   └── userController.js
│
├── data/
│   └── users.js
│
├── routes/
│   └── userRoutes.js
│
├── .gitignore
├── package.json
└── server.js
Responsabilidade dos componentes

server.js

É o ponto de entrada da aplicação. Inicializa o Express, configura o middleware de interpretação JSON, registra as rotas e inicia o servidor HTTP.

routes/userRoutes.js

Define os endpoints disponíveis e direciona cada requisição para o controlador responsável.

controllers/userController.js

Concentra as regras de negócio e o tratamento das operações CRUD, incluindo validações, localização de registros e definição dos códigos de status HTTP.

data/users.js

Mantém os usuários em memória e fornece a geração de identificadores incrementais.

Fluxo de uma requisição

A comunicação segue o modelo cliente-servidor:

Cliente
   │
   │ Requisição HTTP
   ▼
server.js
   │
   ▼
userRoutes.js
   │
   ▼
userController.js
   │
   ▼
data/users.js
   │
   ▼
Resposta JSON + Status HTTP
   │
   ▼
Cliente

Essa divisão permite que as responsabilidades sejam mantidas isoladas, facilitando manutenção, testes e futuras evoluções do sistema.

Instalação

É necessário possuir o Node.js instalado no ambiente.

Clone o repositório:

git clone https://github.com/Kaoahenrique/api-connect-kaoa-henrique.git

Acesse o diretório:

cd api-connect-kaoa-henrique

Instale as dependências:

npm install
Execução

Para iniciar a API:

npm start

O servidor será iniciado na porta 3000:

http://localhost:3000

Para verificar o funcionamento básico da aplicação, acesse:

GET http://localhost:3000/

Resposta esperada:

{
  "message": "API Connect funcionando corretamente",
  "status": "online"
}
Endpoints
Método	Endpoint	Descrição
GET	/	Verifica o status da API
POST	/api/users	Cadastra um usuário
GET	/api/users	Lista todos os usuários
GET	/api/users/:id	Busca um usuário pelo ID
PUT	/api/users/:id	Atualiza um usuário
DELETE	/api/users/:id	Remove um usuário
Exemplos de utilização
1. Criar usuário

POST

/api/users

Corpo da requisição:

{
  "name": "Maria Santos",
  "email": "maria.santos@email.com"
}

Em caso de sucesso, a API retorna:

HTTP 201 Created

{
  "data": {
    "id": 3,
    "name": "Maria Santos",
    "email": "maria.santos@email.com"
  }
}
2. Listar usuários

GET

/api/users

Resposta:

HTTP 200 OK

{
  "data": [
    {
      "id": 1,
      "name": "Ana Silva",
      "email": "ana.silva@email.com"
    },
    {
      "id": 2,
      "name": "Carlos Oliveira",
      "email": "carlos.oliveira@email.com"
    }
  ]
}
3. Buscar usuário por ID

GET

/api/users/1

Resposta:

HTTP 200 OK

{
  "data": {
    "id": 1,
    "name": "Ana Silva",
    "email": "ana.silva@email.com"
  }
}

Caso o identificador não exista:

HTTP 404 Not Found

{
  "error": "Usuário não encontrado"
}
4. Atualizar usuário

PUT

/api/users/1

Corpo:

{
  "name": "Ana Souza",
  "email": "ana.souza@email.com"
}

Resposta:

HTTP 200 OK

{
  "data": {
    "id": 1,
    "name": "Ana Souza",
    "email": "ana.souza@email.com"
  }
}
5. Remover usuário

DELETE

/api/users/1

Em caso de sucesso:

HTTP 204 No Content

Quando o usuário não existe:

HTTP 404 Not Found

{
  "error": "Usuário não encontrado"
}
Validação e tratamento de erros

As operações de criação e atualização verificam a presença dos campos obrigatórios name e email.

Quando os dados obrigatórios não são enviados, a API interrompe o processamento e retorna:

HTTP 400 Bad Request

{
  "error": "Nome e e-mail são obrigatórios"
}

Também existe tratamento para endpoints inexistentes:

HTTP 404 Not Found

{
  "error": "Endpoint não encontrado"
}
Códigos HTTP utilizados
Código	Significado	Aplicação
200	OK	Consultas e atualizações realizadas com sucesso
201	Created	Cadastro de novo usuário
204	No Content	Exclusão realizada com sucesso
400	Bad Request	Dados obrigatórios ausentes
404	Not Found	Usuário ou endpoint inexistente
Persistência

Nesta versão do projeto, os dados são armazenados em memória no arquivo data/users.js.

Essa estratégia foi adotada por se tratar de um MVP, mantendo o projeto simples e permitindo concentrar os esforços nos fundamentos da arquitetura REST, comunicação HTTP, organização do código e manipulação de dados.

Como consequência, os registros são reiniciados quando o processo do servidor é encerrado.

Em uma evolução para ambiente de produção, a camada de persistência poderá ser substituída por um banco de dados sem alterar a finalidade dos endpoints.

Boas práticas aplicadas

O projeto considera princípios importantes para desenvolvimento de APIs modernas:

Separação de responsabilidades;
Organização modular;
Uso adequado dos métodos HTTP;
Códigos de status coerentes;
Comunicação exclusivamente em JSON;
Validação de dados de entrada;
Tratamento de erros;
Versionamento com Git;
Exclusão de dependências locais por meio do .gitignore;
Estrutura preparada para futuras evoluções.
Próximas evoluções

Como evolução natural do MVP, a API poderá incorporar:

Banco de dados relacional ou NoSQL;
ORM ou camada de acesso a dados;
Autenticação e autorização;
Hash de senhas;
Variáveis de ambiente;
Validação mais robusta de e-mails;
Testes automatizados;
Documentação com OpenAPI/Swagger;
Logs estruturados;
Docker;
Pipeline de CI/CD;
Monitoramento e observabilidade.
Status do projeto

MVP funcional desenvolvido para demonstrar os fundamentos de uma API REST, arquitetura cliente-servidor, comunicação HTTP, CRUD, validação e organização modular de um projeto back-end.

Autor

Kaoã Henrique

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Back-end.
