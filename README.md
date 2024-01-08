# Argv (NodeJS)

[⚖️ MIT](./LICENSE.md)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/argv-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/argv-nodejs)

|  | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/argv-nodejs) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/argv-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/argv-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/argv-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/argv-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/argv) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/argv/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/argv/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to correctly slice off [`process.argv`](https://nodejs.org/api/process.html#processargv).

## 🔰 Begin

### Bun

> **🧪 Experimental:** Bun is still under development.

- **Target Version:** ^ v1.0.0, &:
  - TypeScript >= v5.1.0 *\[Development\]*
- **Require Permission:** *N/A*
- **Domain/Registry:**
  - [NPM](https://www.npmjs.com/package/@hugoalh/argv)
    ```sh
    bun add @hugoalh/argv[@<Tag>]
    ```
    ```js
    import ... from "@hugoalh/argv[@<Tag>]";
    ```

> **ℹ️ Notice:** It is also able to import part of the module with sub path if available, see [file `package.json`](./package.json) property `exports` for available sub paths.

### NodeJS

- **Target Version:** >= v20.9.0, &:
  - TypeScript >= v5.1.0 *\[Development\]*
- **Require Permission:** *N/A*
- **Domain/Registry:**
  - [NPM](https://www.npmjs.com/package/@hugoalh/argv)
    ```sh
    npm install @hugoalh/argv[@<Tag>]
    ```
    ```js
    import ... from "@hugoalh/argv";
    ```

> **ℹ️ Notice:** It is also able to import part of the module with sub path if available, see [file `package.json`](./package.json) property `exports` for available sub paths.

## 🧩 API

- ```ts
  const args: string;// Additional command line arguments.
  ```
- ```ts
  const binIndex: 0 | 1;// Index of bin in `process.argv`.
  ```
- ```ts
  const binPath: string;// Path of the file is execute.
  ```
- ```ts
  const isBundledElectronJSProgram: boolean;// Whether the process is execute from bundled ElectronJS program.
  ```
- ```ts
  const isElectronJSProgram: boolean;// Whether the process is execute from ElectronJS program.
  ```
- ```ts
  const isUnbundledElectronJSProgram: boolean;// Whether the process is execute from unbundled ElectronJS program.
  ```
- ```ts
  const programPath: string;// Path of the executable file is execute.
  ```

> **ℹ️ Notice:** Documentation is included inside the script file.

## ✍️ Example

| **`argv.________`** | **`node bin.js args1 args2 ...argsn`** | **`bin args1 args2 ...argsn`** | **`electron bin.js args1 args2 ...argsn`** |
|:-:|:-:|:-:|:-:|
| **`args`** | `["args1", "args2", ..., "argsn"]` | `["args1", "args2", ..., "argsn"]` | `["args1", "args2", ..., "argsn"]` |
| **`binIndex`** | `1` | `0` | `1` |
| **`binPath`** | `"/path-to/bin.js"` | `"/path-to/bin"` | `"/path-to/bin.js"` |
| **`isBundledElectronJSProgram`** | `false` | `true` | `false` |
| **`isElectronJSProgram`** | `false` | `true` | `true` |
| **`isUnbundledElectronJSProgram`** | `false` | `false` | `true` |
| **`programPath`** | `"/path-to/node"` | `"/path-to/bin"` | `"/path-to/electron"` |
