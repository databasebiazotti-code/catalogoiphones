# Área de Membros Limpa

## Como instalar

1. Abra o Supabase > SQL Editor.
2. Rode o arquivo `sql/banco.sql`.
3. Envie `index.html`, a pasta `css` e a pasta `js` para sua hospedagem.
4. Teste login e PIN.

## Estrutura

- `products`: produtos, links de visualizar e links finais.
- `pins`: PINs e quais produtos cada PIN libera.
- `user_access`: acessos liberados por usuário.
- `auth.users`: usuários do Supabase.

## Botões

- Visualizar: abre `preview_url`.
- Liberar: pede PIN.
- Abrir Produto: aparece depois da liberação e abre `product_url`.
