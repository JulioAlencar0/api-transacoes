
# 💸 API de Transações Financeiras

API simples e funcional construída com **Node.js**, **Express** e **PostgreSQL**. Permite cadastrar, listar, consultar e obter o resumo de transações financeiras.

---

## 🚀 Tecnologias

- Node.js
- Express
- PostgreSQL
- Nodemon (dev)
- pg (PostgreSQL driver)

---

## 🛠️ Instalação e Uso

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/api-transacoes.git
cd api-transacoes
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Criar banco e tabela no PostgreSQL

Execute o SQL abaixo no seu banco chamado `caixa`:

```sql
CREATE TABLE tb_transacao (
  id SERIAL PRIMARY KEY,
  descricao TEXT NOT NULL,
  valor NUMERIC(10,2) NOT NULL,
  tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('entrada', 'saida'))
);
```

### 4. Ajustar credenciais no arquivo `db.js`

```js
const pool = new Pool({
    user: 'nome de usuário',
    host: 'localhost',
    database: 'nome do seu banco',
    password: 'sua senha',
    port: 5432,
});
```

> ⚠️ Para projetos públicos, mova essas credenciais para um arquivo `.env`!

### 5. Iniciar servidor

```bash
npm start
```

Servidor disponível em:  
➡️ `http://localhost:3000`

---

## 📮 Endpoints da API

Base URL: `/transacao`

### 🔹 Criar nova transação

- **POST** `/transacao`
- **Body:**

```json
{
  "descricao": "Venda online",
  "valor": 150.00,
  "tipo": "entrada"
}
```

### 🔹 Listar todas as transações

- **GET** `/transacao`

### 🔹 Buscar transação por ID

- **GET** `/transacao/:id`

Exemplo:
```bash
GET /transacao/2
```

### 🔹 Obter resumo financeiro

- **GET** `/transacao/resumo`

Retorna:
```json
{
  "total_entradas": 1500.00,
  "total_saidas": 300.00,
  "saldo": 1200.00
}
```

---

## 📁 Estrutura de Arquivos

```
src/
├── app.js                # Configuração principal do Express
├── server.js             # Inicia o servidor
├── config/
│   └── db.js             # Conexão com PostgreSQL
├── controllers/
│   └── controleTransacao.js  # Lógica das transações
├── routes/
│   └── rotasTransacao.js     # Rotas da API
```

---

## 🔧 Scripts disponíveis

- `npm start`: inicia o servidor com Nodemon

---

## 🧪 Testes com Insomnia ou Postman

1. Crie as requisições com base nos endpoints acima.
2. Use o tipo `application/json` no Body das requisições `POST`.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Júlio Alencar** — estudante de ADS, focado em criar soluções práticas com tecnologia.  

---

## 📝 Licença

Uso livre para fins de estudo e aprendizado.
