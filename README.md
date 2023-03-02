# Boas-vindas ao repositório do projeto Star Wars Planets Search!

<h3 align="center">
  Projeto desenvolvido enquanto aluno na Trybe
</h3>

<details>
<summary><strong>PS</strong></summary><br />

- Projetos desenvolvidos na Trybe serão deixados **as is**, para meu próprio acompanhamento de evolução.
- Infelizmente o link em que se encontrava hospedado os planetas não está mais no ar por conta do heroku.
</details>


<details>
<summary><strong>👨‍💻 Descrição do projeto</strong></summary><br />

Este projeto consiste em uma lista com filtros de planetas do universo de Star Wars.
</details>

<details>
<summary><strong>📝 Detalhes do desenvolvimento</strong></summary><br />

Esse projeto foi desenvolvido utilizado **React**, **Context API** para gerenciamento de estados, **Hooks** como **useState** e **useEffect** para estruturação dos componentes.

Requisitos desenvolvidos:
- Criado uma requisição para o endpoint `/planets` da API de Star Wars e preenchido uma tabela com os dados retornados, com exceção dos da coluna `residents`;
- Criado um filtro para a tabela através de um texto, exibindo assim somente os planetas cujos nomes incluam o texto digitado;
- Criado um filtro para valores numéricos;
- Implementado múltiplos filtros numéricos;
- Os filtros foram desenvolvidos de modo que não é possível utilizar filtros repetidos;
- Desenvolvido métodos para remover os filtros, tanto individualmente, como todos de uma única vez;
- Criado métodos para ordenar as colunas de forma ascendente ou descendente;
</details>

# Instruções para rodar o Projeto

<details>
<summary><strong>🛠 Passo a passo</strong></summary><br />

Clone o repositório

```bash
git@github.com:RodrigoFreitas-L/Starwars-Planet-Search.git
```

Entre na pasta do repositório

```bash
cd Starwars-Planet-Search
```

Instale as dependências

```bash
npm install
```

Inicie o projeto

```bash
npm start
```

All in one

```bash
git@github.com:RodrigoFreitas-L/Starwars-Planet-Search.git && cd Starwars-Planet-Search && npm i && npm start
```
</details>
