# Questão 3 - Carrinho de compras (Cypress + TypeScript)

Teste E2E em https://www.saucedemo.com/:

1. Faz login com sucesso (`standard_user` / `secret_sauce`, credenciais públicas de demonstração do site).
2. Adiciona três produtos diferentes ao carrinho ("Add to cart").
3. Clica em "Remove" em um deles.
4. Valida que o emblema vermelho do carrinho exibe exatamente `2`.

Há também um teste extra que confere a cor de fundo vermelha do emblema.

## Pré-requisitos
- Node.js 18 ou superior

## Como rodar
```bash
npm install
npm run cy:run    # modo headless
npm run cy:open   # modo interativo
```

## Como enviar pelo GitHub
```bash
git init
git add .
git commit -m "Questão 3 - Carrinho de compras (Cypress + TypeScript)"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## Estrutura
```
cypress/
  e2e/carrinho.cy.ts
  support/e2e.ts
cypress.config.ts
tsconfig.json
package.json
```
