# Argv (NodeJS)

[**⚖️** MIT](./LICENSE.md)

**🗂️**
[![GitHub: hugoalh-studio/argv-nodejs](https://img.shields.io/badge/hugoalh--studio/argv--nodejs-181717?logo=github&logoColor=ffffff&style=flat "GitHub: hugoalh-studio/argv-nodejs")](https://github.com/hugoalh-studio/argv-nodejs)
[![NPM: @hugoalh/argv](https://img.shields.io/badge/@hugoalh/argv-CB3837?logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/argv")](https://www.npmjs.com/package/@hugoalh/argv)

**🆙** ![Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/argv-nodejs?sort=semver&color=2187C0&label=&style=flat "Latest Release Version") (![Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/argv-nodejs?color=2187C0&label=&style=flat "Latest Release Date"))

A NodeJS module to correctly slice off [`process.argv`](https://nodejs.org/api/process.html#processargv).

## 🎯 Target

- NodeJS >= v16.13.0

## 🔰 Usage

1. Install via console/shell/terminal:
    - Via NPM
      ```sh
      npm install @hugoalh/argv[@<Tag>]
      ```
    - Via PNPM
      ```sh
      pnpm add @hugoalh/argv[@<Tag>]
      ```
    - Via Yarn
      ```sh
      yarn add @hugoalh/argv[@<Tag>]
      ```
2. Import at the script (`<ScriptName>.js`):
    ```js
    import ... from "@hugoalh/argv";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `package.json`](./package.json) property `exports` for available sub paths.

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
