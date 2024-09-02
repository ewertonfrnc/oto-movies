# 🎬 Oto Filmes 
Este projeto permite aos usuários explorar uma lista de filmes melhor avaliados no TMDB, visualizar detalhes de cada filme e gerenciar uma lista de favoritos.

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

***

# 🎬 Oto Movies (EN)

This project allows users to explore a list of highly-rated movies on TMDB, view details of each movie, and manage a favorites list.

- [VueJs] - The Progressive JavaScript Framework;
- [Vue Router] - The official Router for Vue.js;
- [Vuex] - Vuex is a state management pattern and library for Vue.js applications;
- [TMDB] - A community-built movie and TV series database.

## Features
- 📺 View a list of the highest-rated movies on [TMDB];
- 🕵️ View details of the selected movie;
- 😍 Add movies to your favorites list.

## Installation
The application requires [Node.js](https://nodejs.org/) v16+.

#### TMDB API Key
This project uses The Movie Database (TMDB) API to fetch movie information. To configure the API Key:

1. Go to the [TMDB website] and create an account.
2. Generate your API Key in the API settings section of TMDB.
3. Create a `.env` file in the root of the project with the following environment variables:
    ```sh
    VITE_TMDB_BASE_URL=https://api.themoviedb.org/3/
    VITE_TMDB_TOKEN=<YOUR_API_KEY>
    ```

Install the dependencies and start the server:
```sh
git clone https://github.com/ewertonfrnc/oto-movies.git
cd oto-movies
npm install
npm run dev
```

[VueJs]: https://vuejs.org
[Vuex]: https://vuex.vuejs.org/
[Vue Router]: https://router.vuejs.org
[TMDB]: https://www.themoviedb.org/
[site do TMDB]: https://developer.themoviedb.org/docs/getting-started