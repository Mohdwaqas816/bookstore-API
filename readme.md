# Project Title

**BookStore Api with Authentication** perform CRUD operation

#### API routes Include

- User Registration
- User login (JWT)
- View all book
- View single book
- Add a book
- Update book
- delete book
- others (Will be added soon...)

## Authors

- Mohd Waqas [Github Link](https://github.com/Mohdwaqas816)

## Tech Stack

**Backend:** Nodejs, Expressjs <br>
**Database:** MongoDB

## Pre-requisites

<details open>
<summary>Nodejs</summary>
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

-- Note:  Remember required files and place accordingly [env file], don't forget to add environment variable like databaseURI, jwt_key, without this project will not going to run

```

Start the server

```bash
  npm run dev
```

Confirm by pasting this url in browser

```bash
  http://localhost:3000/api/health
```

## Woyila! congrats 🎊🎊🎉

## API Reference

# 1. User Authentication System:

#### User register

```http
  POST /api/user/register
```

| Parameter   | Type       | Description                                                             |
| :---------- | :--------- | :---------------------------------------------------------------------- |
| `email`     | `string`   | **Required**. email of user                                             |
| `firstName` | `string`   | **Required**. first name of user                                        |
| `lastName`  | `string`   | **Required**. last name of user                                         |
| `password`  | `string`   | **Required**. user password Length should be minimum of 8 and max of 25 |
| `createdAt` | `Datetime` | **Optional** Default - current date time                                |

#### User login

```http
  POST /api/user/login
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. email of user |
| `password` | `string` | **Required**. user password |

### 😇 Remaining Authentication routes will be added soon...

# 2. Bookstore API's:

#### Retrieve all books

```http
  GET /api/books
```

#### Retrieve single book

```http
  GET /api/books/{bookId}
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `id`      | `string` | **Required**. Book id |

#### add a book

```http
  POST /api/books/
```

| Parameter   | Type       | Description                                                                                                    |
| :---------- | :--------- | :------------------------------------------------------------------------------------------------------------- |
| `title`     | `string`   | **Required**. Id of vendor to delete<br> **Max-length**. 100                                                   |
| `author`    | `string`   | **Required**. Id of vendor to delete                                                                           |
| `year`      | `Number`   | **Required**. book pulbished year <br> **Minimum**. 1000 <br> **Maximum**. Current Year, it can't be in future |
| `createdAt` | `Datetime` | **Optional**. If not provided current datetime will be considered                                              |

```
example json

{
    "title": "Merchant of Venice",
    "author": "William Shakespear",
    "year": 1990
}

```

#### update a book

```http
  PUT /api/books/{bookId}
```

parameters that you can update

```
example json

{
    "title": "Merchant of Venice",
    "author": "William Shakespear",
    "year": 1990
}

```

#### delete a book

```http
  DELETE /api/books/{bookId}
```

## Rest documentation coming 🔜
