# Argv (NodeJS)

![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square "License")
[![GitHub Repository](https://img.shields.io/badge/Repository-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub Repository")](https://github.com/hugoalh-studio/argv-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/argv-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/argv-nodejs/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/argv-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square "GitHub Contributors")](https://github.com/hugoalh-studio/argv-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/argv-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square "GitHub Issues")](https://github.com/hugoalh-studio/argv-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/argv-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square "GitHub Pull Requests")](https://github.com/hugoalh-studio/argv-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/argv-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square "GitHub Discussions")](https://github.com/hugoalh-studio/argv-nodejs/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/argv-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/argv-nodejs)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/argv-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/argv-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/argv-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/argv-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/argv-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/argv-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/argv) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/argv?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/argv/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/argv/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

## 📝 Description

A NodeJS module to correctly slice off [`process.argv`](https://nodejs.org/api/process.html#processargv).

## 📚 Documentation

### Getting Started

- NodeJS >= v6.9.0

```sh
npm install @hugoalh/argv
```

```js
/* Either */
const argv = require("@hugoalh/argv");// [CommonJS] Require
import argv from "@hugoalh/argv";// [ModuleJS] Default Import
```

### API

#### Value

- **`args`:** `<string[]>` Additional command line arguments.
- **`binIndex`:** `<0 | 1>` Index of bin in `process.argv`.
- **`binPath`:** `<string>` Path of the file is execute.
- **`isBundledElectronJSProgram`:** `<boolean>` Whether the process is execute from bundled ElectronJS program.
- **`isElectronJSProgram`:** `<boolean>` Whether the process is execute from ElectronJS program.
- **`isUnbundledElectronJSProgram`:** `<boolean>` Whether the process is execute from unbundled ElectronJS program.
- **`programPath`:** `<string>` Path of the executable file is execute.

### Example

| **`argv.________`** | **`node bin.js args1 args2 ...argsn`** | **`bin args1 args2 ...argsn`** | **`electron bin.js args1 args2 ...argsn`** |
|:-:|:-:|:-:|:-:|
| **`args`** | `["args1", "args2", ..., "argsn"]` | `["args1", "args2", ..., "argsn"]` | `["args1", "args2", ..., "argsn"]` |
| **`binIndex`** | `1` | `0` | `1` |
| **`binPath`** | `"/path-to/bin.js"` | `"/path-to/bin"` | `"/path-to/bin.js"` |
| **`isBundledElectronJSProgram`** | `false` | `true` | `false` |
| **`isElectronJSProgram`** | `false` | `true` | `true` |
| **`isUnbundledElectronJSProgram`** | `false` | `false` | `true` |
| **`programPath`** | `"/path-to/node"` | `"/path-to/bin"` | `"/path-to/electron"` |
