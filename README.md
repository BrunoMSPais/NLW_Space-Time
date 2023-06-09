# NLW Space-Time

![NLW Space-Time cover](./public-images/Wallpaper%20-%201400x900.png)

## 💻 Projeto

Aplicação de recordação de memórias, onde o usuário poderá adicionar à uma timeline textos, fotos e vídeos de acontecimentos marcantes da sua vida, organizados por mês e ano.

## 🛠️ Tecnologias

- Typescript
- React com NextJS
- TailwindCSS
- ReactNative com Expo
- NativeWind
- NodeJS com Fastify
- Prisma
- SQLite

## ⚙️ Funcionalidades

- Autenticação pelo back-end com github através de rota que retorna uma token JWT
- CRUD de memórias
- Upload de ficheiros
- Cookies de sessão com _next/headers_ na versão web e _expo-secure-store_ com _expo-auth-session_, na versão mobile

---

## TODO

- [ ] **1. Edição de memória**

- Desenho do layout está no Figma com o título "Created (Filled)" _(só para web, para mobile terá de ser improvisado)_.
  <br>

- [ ] **2. Link para compartilhar memória**

- 1 - Quando a memória é pública, mostrar um botão "compartilhar" ou "copiar link" para poder compartilhar a memória em redes sociais, por mensagem ou e-mail.

- 2 - Criar interface de memórias onde possa ver:

  - a - todas as memórias públicas de outros utilizadores;
  - b - todas as memórias públicas do utilizador selecionado;
  - c - filtrar as memórias por utilizador
    <br>

- [ ] **3. Selecionar data da memória**

Adicionar um date-picker para definir a data da memória ao criar/editar e ser apresentado na timeline invés da data de criação.

- 1 - Adicionar data da memória ao schema da memória (base de dados - prisma);
- 2 - Adicionar o parâmetro nas rotas do backend
- 3 - Adicionar os date-pickers à interface aplicando a respetiva integração com com o back-end.
  <br>

- [x] **4. Layout responsivo**
