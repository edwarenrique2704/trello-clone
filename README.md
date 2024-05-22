# Trello Clone
This entire project is a clone of Trello, made for educational purposes to test Next.js 14 capabilities

*Next.js, React, Auth.js, Prisma, PostgreSQL, Docker, Tailwind*

#### [Try demo](https://xtrello.vercel.app/) 

## Project preview 🖼️
![Preview](./PREVIEW-1.jpeg)
![Preview](./PREVIEW-2.jpeg)
![Preview](./PREVIEW-3.jpeg)

### Table of contents 📃
- [Trello Clone](#trello-clone)
      - [Try demo](#try-demo)
  - [Project preview 🖼️](#project-preview-️)
    - [Table of contents 📃](#table-of-contents-)
  - [Starting 🚀](#starting-)
    - [Pre-requirements 📋](#pre-requirements-)
    - [Installation 🔧](#installation-)
  - [Deployment 📦](#deployment-)
  - [Built with 🛠️](#built-with-️)



## Starting 🚀
### Pre-requirements 📋

* [Git](https://git-scm.com/)
* [Node.js (npm)](https://nodejs.org/)
* [PostgreSQL DB](https://www.postgresql.org/)

### Installation 🔧

Local installation:

```bash
# Clone this repository
$ git clone https://github.com/juanpmachadob/trello-clone.git

# Open terminal in project path
$ cd trello-clone

# Install dependencies
$ npm install

# Copy .env file
$ cp .env.example .env

# Fill .env variables

# Deploy database with docker compose
$ docker compose up -d

# Setup PostgreSQL database
$ npx prisma migrate deploy
$ npx prisma generate

# Seed PostgreSQL database
$ npx prisma db seed
```

## Deployment 📦

```bash
# Open terminal in project path and run
$ cd trello-clone
$ npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Built with 🛠️

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Auth.js](https://authjs.dev/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)
* [React Hook Form](https://react-hook-form.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Tiptap](https://tiptap.dev/)
* [Framer Motion](https://www.framer.com/motion/reorder/)
  
---
⌨️ with ❤️ by [Juan Pablo Machado](https://github.com/juanpmachadob) 😊 