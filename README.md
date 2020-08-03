<h1 align=center>
<img src="public/assets/logo.png" alt="Logo foodfy" width="350px">

---

🚀 Site de Receitas e Chefs e gerenciador de ambos ✔️ <br>

<img src="https://camo.githubusercontent.com/a45bd10a7ea5a30b5665d9869b0ce1324fa90350/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d6163746976652d737563636573732e737667" alt="Status" data-canonical-src="https://img.shields.io/badge/status-active-success.svg" style="max-width:100%;">
<img src="https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg" style="max-width:100%;">
</h1>

## 📑️ Índice

- [O projeto](#📝️-Sobre)
- [Links desafios](#📝️-Links)
- [Tecnologias utilizadas](#🚀️-Tecnologias-utilizadas)
- [Acrescentado ao projeto original](#💻️-Acrescentado-ao-projeto-original)
- [Como usar](#💾️-Como-baixar/testar-o-projeto)
- [Bootcamp LaunchBase](#ℹ️-O-que-é-o-LaunchBase)
- [Contato](#-Desenvolvido-com-💙️-por)
- [Licença](#-Licença)

---

## 📝️ Sobre

O projeto trata-se de uma série de desafios apresentandos durante o Bootcamp. 
Onde eu precisava criar um site de receitas, utilizando as tecnologias HTML, CSS, 
JavaScript, NodeJS, Express, Template Engine Nunjucks, banco de dados PostgreSQL,
contendo menus, página sobre, página receitas, com apresentação em nova página 
com os detalhes completos da receita ao clicar, página chefs, com apresentação 
em nova página com os detalhes completos da receita ao clicar, paginação e busca de receitas. 
Criar também um administrador do site, contendo opções de, Cadastrar, Visualizar, Editar e excluir RECEITAS e CHEFS, totalmente integrada com o front-end.

## Apresentação do Site

<h1>
<img src="/public/assets/foodfy-site-com-db.mp4" alt="Foodfy Site Gif">
</h1>

---

## Apresentação do Gerenciador

<h1>
<img src="/public/assets/foodfy-admin-com-db.mp4" alt="Foodfy Site Admin Gif">
</h1>

## Links
<ol>
<li>
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-02/blob/master/desafios/02-foodfy.md">CONSTRUINDO O SITE</a>
</li>
<li>
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-03/blob/master/desafios/03-refatorando-foodfy.md" target="_blank">REFATORANDO O SITE</a>
</li>
<li>
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-04/blob/master/desafios/04-admin-foodfy.md" target="_blank">CONSTRUINDO O ADMINISTRADOR DO SITE</a>
</li>
<li>
<a href="https://github.com/Rocketseat/bootcamp-launchbase-desafios-05/blob/master/desafios/05-persistindo-dados-foodfy.md" target="_blank">PERSISTINDO DADOS DA APLICAÇÃO</a>
</li>
</ol>

---

## 🚀️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- Express
- Template Engine Nunjucks
- PostgreSQL

---

## 💻️ Acrescentado ao projeto proposto

- Responsividade com media query baseado no toogle device toolbar do chrome.
- Menu dinâmico.
- Estilizações próprias.

---

## 💾️ Como baixar/testar o projeto

- Você irá precisar instalar o [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/pt-br/download/), [PostgreSQL](https://www.postgresql.org/), [Postbird](https://www.electronjs.org/apps/postbird) + [Visual Studio code](https://code.visualstudio.com/).

```bash
# Versões mínimas ou superiores.
$ node -v
v12.16.3

$ npm -v
6.14.5
```

- Para configurar, no bash digite os seguinte códigos:

```bash
# Clonar o repositório
$ git clone https://github.com/RicardoMejolaro/Projeto-Foodfy.git

#Entrar no diretório
$ cd foodfy

#Abrir projeto no VsCode ou com seu prompt de comando de preferência
code . ||  cd foodfy (Passo acima) 

#Com o terminal aberto rodar o comando
$ npm install (para instalar as dependências necessárias)

#Criar o banco de dados no seu PostgreSQL
O meu está nomeado como: foodfy

#No arquivo db.js
No campo "database", incluir o nome do banco criado. (Passo acima)
Incluir o seus dados PostgreSQL nos campos: "user" e "password"

```

```bash
#Criar a tabela recipes
```
 <table>
      <thead>
        <tr>
          <th>column</th>
          <th>type</th>
          <th>max length</th>
          <th>default</th>
          <th>primary key</th>
          <th>null</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>id</td>
            <td>integer</td>
            <td></td>
            <td>auto increment</td>
            <td>yes</td>
            <td>no</td>
          </tr>
          <tr>
            <td>chef_id</td>
            <td>integer</td>
            <td></td>
            <td></td>
            <td></td>
            <td>yes</td>
          </tr>
          <tr>
            <td>image</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>title</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>ingredients</td>
            <td>text[]</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>preparation</td>
            <td>text[]</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>information</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
      </tbody>
</table>

```bash
#Criar a tabela chefs
```
 <table>
      <thead>
        <tr>
          <th>column</th>
          <th>type</th>
          <th>max length</th>
          <th>default</th>
          <th>primary key</th>
          <th>null</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>id</td>
            <td>integer</td>
            <td></td>
            <td>auto increment</td>
            <td>yes</td>
            <td>no</td>
          </tr>
          <tr>
            <td>avatar_url</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>name</td>
            <td>text</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
          <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td></td>
            <td></td>
            <td></td>
            <td>no</td>
          </tr>
      </tbody>
</table>

```bash

#Agora só rodar o projeto com o comando
$ npm start

#Pronto projeto abrirá em seu navegador padrão
Agora é só testar em seu navegador!

```
---

## ℹ️ O que é o LaunchBase?

O LaunchBase é um treinamento no formato de bootcamp online que tem duração de 8 semanas. A cada semana os conteúdos são liberados de acordo com um cronograma, guiando o aluno pelas ferramentas e conceitos mais modernos de desenvolvimento web para entrar com o pé direito nesse universo e ir direto ao ponto naquilo que realmente importa para alcançar seus maiores objetivos como dev..

---

### Desenvolvido com 💙️ por

***Ricardo Mejolaro*** 
<br/> 
<a href="https://www.linkedin.com/in/ricardo-mejolaro/">
<img src="public/assets/linkedin.png">
</a>

### Licença

Este projeto está licenciado sob a licença MIT - consulte a página [LICENSE](https://opensource.org/licenses/MIT) para obter detalhes.
