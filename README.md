# Oto Filmes 🎬
Este projeto permite aos usuários explorar uma lista de filmes melhor avaliados no TMDB, visualizar detalhes de cada filme e gerenciar uma lista de favoritos.

![app preview](https://i.imgur.com/sS5Hp4F.gif)

- [VueJs] - O Framework JavaScript Progressivo;
- [Vue Router] - O Roteador oficial para Vue.js;
- [Vuex] - Vuex é um padrão de gerenciamento de estado + biblioteca para aplicações Vue.js;
- [TMDB] - Um banco de dados de filmes e séries de TV construído pela comunidade.

## Funcionalidades
- 📺 Ver uma lista dos filmes mais bem avaliados no [TMDB];
- 🕵️ Ver detalhes do filme selecionado;
- 😍 Adicionar um filme na sua lista de favoritos.


## Instalação
A aplicação precisa do [Node.js](https://nodejs.org/) v16+ para iniciar.

#### API Key do TMDB
Este projeto faz uso da API do The Movie Database (TMDB) para buscar as informações dos filmes. Para configurar a API Key:
1. Acesse o [site do TMDB] e crie uma conta.
2. Gere sua API Key na seção de configurações de API do TMDB.
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
    ```sh
     VITE_TMDB_BASE_URL=https://api.themoviedb.org/3/
     VITE_TMDB_TOKEN=<CHAVE_DA_API>
    ```

Instale as dependências e inicie o servidor:
```sh
git clone https://github.com/ewertonfrnc/oto-movies.git
cd oto-movies
npm install
npm run dev
```

[//]: #
[VueJs]: https://vuejs.org
[Vuex]: https://vuex.vuejs.org/
[Vue Router]: https://router.vuejs.org
[TMDB]: https://www.themoviedb.org/
[site do TMDB]: https://developer.themoviedb.org/docs/getting-started