# Test Task for Lazy Ants

RESTful API for products built using NestJS framework + TypeScript.

Main features:
- CRUD operations for products (including pagination, autotrimming, validation, name uniqueness)
- Authorization with JWT (sign-in, sign-up for the user)
- PostgreSQL database with Sequelize ORM (including migrations)
- Full swagger support (go to /swagger)

Plans for:
- E2E tests
- Request caching using Redis
- Cloud deployment with CI/CD

## Installation

```bash
$ npm install
```

## Running the app

```bash
# dev mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

