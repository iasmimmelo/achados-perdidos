Achados+

O Achados+ é uma plataforma para registro e divulgação de objetos perdidos e encontrados.
O sistema permite que os usuários façam login, adicionem itens com descrição, local, tipo, contato e imagem (opcional).
Além disso, apenas o usuário que cadastrou um item pode excluí-lo, garantindo controle sobre seus próprios registros.

---

Tecnologias Utilizadas

- React: criação da interface e componentização (Form, Lista, Item, Login).
- Firebase:
  - Auth para login/cadastro por e-mail e senha.
  - Firestore para armazenar os itens em tempo real.
- Vite: bundler rápido para desenvolvimento React.
- CSS: estilização moderna e responsiva.

---

Funcionamento do Sistema

1. Login/Cadastro
   - Usuário entra com e-mail e senha ou cria conta.
   - Após login, o usuário acessa o formulário para adicionar itens.

2. Formulário de Cadastro
   - Campos: Objeto, Local, Tipo (Achado/Perdido), Nome, Contato, Comentário e Imagem (opcional).
   - Exemplo de preenchimento nos placeholders.
   - Logo centralizada dentro do formulário.
   - Ao salvar, o item recebe o `uid` do usuário logado para controle de acesso.

3. Lista de Itens
   - Exibe todos os itens cadastrados.
   - Botão "WhatsApp" para contato direto com o dono.
   - Botão "Excluir" visível apenas para o usuário que cadastrou o item.

---

Design e Usabilidade

- Página principale elementos centralizados.
- Formulário e login em caixas, com logo centralizada.
- Placeholders explicativos nos campos para guiar o usuário.
- Botões coloridos e destacados:
  - Azul para "Salvar/Entrar/Cadastrar".
  - Verde para "WhatsApp".
  - Vermelho para "Excluir" (somente usuário dono).

---

Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone <seu-repo-url>
cd achados-perdidos
Instale as dependências:
npm install
Configure o Firebase (firebase.js):
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
Inicie o projeto:
npm run dev

Acesse: http://localhost:5174/
