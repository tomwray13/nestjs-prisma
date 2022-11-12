
# NestJS + Prisma Tutorial!

Check out [the blog post](https://tomray.dev/nestjs-prisma) this repo comes from for a full walkthrough of this code.

## Installation

```bash
$ npm install
```

## Create env variables

Copy the variables in the example and update them:

```bash
$ copy .env.example .env
```

## Running the app locally

Running the NestJS app:

```bash
$ npm run start:dev
```

Running the Postgres database:

```bash
$ docker compose up -d
```

After your local Postgres server is up and running, you'll need to run database migrations. 

To do this, run the following command:

```bash
$ npm run migrate
```


## Running tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
