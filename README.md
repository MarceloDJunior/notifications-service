<h1 align="center">Ignite Lab Node.js | Notification Service</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#running-the-app">Running the app</a>&nbsp;&nbsp;&nbsp;
</p>

## Description

Project created during the Ignite Lab Node.js from RocketSeat.

This project was designed to be a NestJS microservice for managing notifications. It contains functionality to create, list, read/unread and count notifications. It explore come concepts of Clean Architecture, DDD, and TDD.

The project was divided into two main layers.
- Application: Contains all of the entities, usecases and business logic, along with unit tests.
- Infra: Contains specific framework implementation, in this case, NestJS and Prisma.

It also explores the following design patterns:
- Factory Method
- Data Mapper
- In-memory Database (for testing)

## Technologies

This project was created using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/)

## Running the app

Install node packages

```bash
$ npm install
```

Run the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
