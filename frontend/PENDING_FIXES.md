# Correções Pendentes - Frontend

## Problemas Identificados
1. Erro de resolução de módulos no frontend:
   - ThemeContext
   - AuthContext
   - Routes
   
Erro específico: "Module not found" para estes componentes

## Alterações Necessárias

### 1. Estrutura de Arquivos
- Mover/manter arquivos em localizações únicas:
  - Contextos em `src/contexts/`
  - Rotas em `src/routes/`
- Remover quaisquer arquivos duplicados

### 2. Arquivos Afetados
- `src/App.tsx`
- `src/contexts/ThemeContext.tsx`
- `src/contexts/AuthContext.tsx`
- `src/routes/Routes.tsx`

### 3. Correções de Imports em App.tsx
```typescript
// De:
import ... from './ThemeContext'
import ... from './AuthContext'
import ... from './Routes'

// Para:
import ... from './contexts/ThemeContext'
import ... from './contexts/AuthContext'
import ... from './routes/Routes'
```

## Como Testar
1. Iniciar o servidor de desenvolvimento: `npm start`
2. Verificar se não há erros de módulo não encontrado
3. Verificar se todas as funcionalidades continuam funcionando:
   - Troca de tema (claro/escuro)
   - Autenticação
   - Navegação entre rotas
