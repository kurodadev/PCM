# PCM Frontend

## Configuração do Ambiente de Desenvolvimento

### Requisitos
- Node.js >= 14.0.0
- npm >= 6.14.0

### Dependências Principais
- React 18.2.0
- Material-UI 5.15.5
- TypeScript 4.9.5
- React Router DOM 6.21.3

### Configuração do Editor
Recomendamos usar o Visual Studio Code com as seguintes extensões:
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Material Icon Theme

### Scripts Disponíveis
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Criar build de produção
npm run build

# Executar testes
npm test
```

### Estrutura do Projeto
```
frontend/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   └── layout/
  │   ├── contexts/
  │   │   ├── ThemeContext.tsx
  │   │   └── AuthContext.tsx
  │   ├── pages/
  │   ├── routes/
  │   ├── App.tsx
  │   └── index.tsx
  └── package.json
```

### Solução de Problemas Comuns

#### Erro do Webpack
Se encontrar erro relacionado ao html-webpack-plugin:
1. Remover node_modules e package-lock.json
2. Limpar cache do npm
3. Reinstalar dependências

```powershell
Remove-Item -Path node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path package-lock.json -Force -ErrorAction SilentlyContinue
npm cache clean --force
npm install
```

#### Quirks Mode
Se o navegador mostrar warning sobre Quirks Mode:
1. Verificar se o DOCTYPE está correto no public/index.html
2. Garantir que não há caracteres ou espaços antes do DOCTYPE

### Backup e Versionamento
- Backups das alterações são mantidos em `BACKUP_[DATA].md`
- Último backup: BACKUP_2025_01_19.md
