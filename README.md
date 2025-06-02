# API – Node.js + Express + Prisma

API REST simples desenvolvida com Express, Prisma ORM e PostgreSQL. Usada para armazenar e listar atividades de um portfólio acadêmico da disciplina de Web.

---

## Endpoints

| Método | Rota                   | Descrição                                 | Autenticação |
|--------|------------------------|-------------------------------------------|--------------|
| GET    | `/atividades`          | Retorna todas as atividades               | ❌           |
| GET    | `/atividades/:id`      | Retorna uma atividade específica *(em breve)* | ❌       |
| POST   | `/atividades`          | Cria uma nova atividade                   | ✅ `x-api-key` |
| DELETE | `/atividades/:id`      | Deleta uma atividade existente            | ✅ `x-api-key` |

> 🔐 As rotas protegidas devem conter o header:  
> `x-api-key: sua_chave_aqui`




