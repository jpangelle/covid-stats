# Covid State Statistics

Demo: [https://covid19-state-stats.now.sh](https://covid19-state-stats.now.sh)

##### Statistics web app to display cases per capita and deaths per capita of US states

<div style="border: 1px solid #D8D8D8; border-radius: 2px;">
  <img alt="app-screenshot" src="https://i.imgur.com/DDhwc1r.png" />
</div>

## Requirements

- [`node`](https://nodejs.org/) >= 8.10
- [`yarn`](https://classic.yarnpkg.com/en/docs/install#mac-stable) CLI
- [`vercel`](https://vercel.com/download) CLI

## Setup

Clone the repository:

```sh
$ git clone git@github.com:jpangelle/covid-stats.git
```

Install dependencies:

```sh
$ yarn
```

## Link `vercel`

```sh
$ vercel
```

## Start

Start the development server at [http://localhost:3000](http://localhost:3000):

```sh
$ vercel dev
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
