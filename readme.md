# Project Title

**BookStore Api with Authentication** perform CRUD operation

Categories : ---

- Trending Crypto News
- Lifestyle and Shopping - Dubai Based (Coming soon...)
- Financial (coming soon...)
- Tech & Gadgets (coming soon...)
- Editors Choice (coming soon...)

Third party Api's : ---

- Link: [CryptoNewsApi](https://cryptonews-api.com/documentation)
- others (coming soon...)

## Authors

- Mohd Waqas [Github Link](https://github.com/Mohdwaqas816)

## Tech Stack

**Backend:** Nodejs, , Expressjs
**Database:** MongoDB

## Pre-requisites

<details open>
<summary>JavaScript</summary>
<br>

- [NodeJS Download](https://nodejs.org/en/download/package-manager)

</details>
<details open>
<summary>Code Editor (Preferred)</summary>
<br>

- [VS Code Download](https://code.visualstudio.com/download)
</details>

<details open>
<summary>Docker Desktop Download</summary>
<br>

- [Docker Desktop Download](https://www.docker.com/products/docker-desktop/)
</details>

<details open>
<summary>Microsoft Visual Studio Build Tools</summary>
<br>

- [Build Tool Download](https://visualstudio.microsoft.com/downloads/)
</details>

## Running project Locally

Clone the project

```bash
  git clone https://github.com/Mohdwaqas816/bookstore-API.git
```

Go to the project directory

```bash
  cd bookstore-API
```

Download the required packages and libraries

```bash
  npm install
```

Local Folder Structure looks like

```bash
├── controller
│      ── book-controller.js
│      ── user-controller.js
│
├── database
│      ── db.js
│
├── helpers
│      ── jwt-helper.js
│
├── middlewares
│      ── auth-middleware.js
│      ── logger-middleware.js
│
├── models
│      ── book.js
│      ── user.js
│
├── routes
│      ── book-routes.js
│      ── user-routes.js
├── .env
├── .gitignore
├── server.js
├── Dockerfile
├── package.json
├── readme.md

-- Note:  Remember required files and place accordingly [env file]

```

Start the server

```bash
  npm run dev
```

Confirm by pasting this url in browser

```bash
  http://localhost:3000/api/health
```

# Woyila! congrats 🎊🎊🎉
