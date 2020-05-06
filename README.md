## Covid Stats

Statistics web app to display cases per capita and deaths per capita of US states

## Requirements

- `node` >= 8.10
- [`yarn`](https://classic.yarnpkg.com/en/docs/install#mac-stable) CLI
- [`now`](https://vercel.com/download) CLI

## Setup

Clone the repository:

```sh
$ git clone git@github.com:angelle-sw/covid-stats.git
```

Install dependencies:

```sh
$ yarn
```

## Link `now`

Assuming you are part of the [team](https://vercel.com/covid-state-stats) on `vercel`, to link the project:

```sh
$ now
```

## Start

Start the development server at [http://localhost:3000](http://localhost:3000):

```sh
$ now dev
```

## Lint and Test

### Lint

Run ESLint

```sh
$ yarn lint
```

### Unit Tests

Run unit tests (implicitly re-runs on code changes):

```sh
$ yarn test
```

### Cypress Tests

Run cypress tests

```sh
$ yarn cypress
```
