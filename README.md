# Sistema PCM - Planejamento e Controle de Manutenção

Sistema web responsivo para gerenciamento de manutenção industrial.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

### Frontend
- React com TypeScript
- Interface responsiva
- Gerenciamento de estado com Redux
- Componentes reutilizáveis

### Backend
- Node.js com TypeScript
- API RESTful
- Prisma ORM
- PostgreSQL

## Configuração do Ambiente

### Pré-requisitos
- Node.js
- PostgreSQL
- npm ou yarn

### Instalação

1. Clone o repositório
2. Configure as variáveis de ambiente (copie `.env.example` para `.env`)
3. Instale as dependências:

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

4. Execute as migrações do banco de dados:
```bash
cd backend
npx prisma migrate dev
```

5. Inicie o projeto:
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

## Documentação

Mais detalhes sobre a API e o banco de dados podem ser encontrados na pasta `docs/`.
