# Argv (NodeJS)

[⚖️ MIT](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/argv-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/argv-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/argv-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/argv-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/argv-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/argv-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/argv-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/argv-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/argv) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/argv?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/argv/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/argv/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to correctly slice off [`process.argv`](https://nodejs.org/api/process.html#processargv).

## 📓 Documentation

### Getting Started

- NodeJS ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/argv
```

```js
/* Either */
import { ... } from "@hugoalh/argv";// Named Import
import * as argv from "@hugoalh/argv";// Namespace Import
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
