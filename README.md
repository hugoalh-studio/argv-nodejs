# Argv (NodeJS)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/argv-nodejs](https://img.shields.io/github/v/release/hugoalh-studio/argv-nodejs?label=hugoalh-studio/argv-nodejs&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/argv-nodejs")](https://github.com/hugoalh-studio/argv-nodejs)
[![NPM: @hugoalh/argv](https://img.shields.io/npm/v/@hugoalh/argv?label=@hugoalh/argv&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/argv")](https://www.npmjs.com/package/@hugoalh/argv)

A NodeJS module to correctly slice off [`process.argv`](https://nodejs.org/api/process.html#processargv).

## 🔰 Begin

### 🎯 Targets

|  | **Registry - NPM** |
|:--|:--|
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) |

> **ℹ️ Note**
>
> It is possible to use this module in other methods/ways which not listed in here, however it is not officially supported.

### #️⃣ Registries Identifier

- **NPM:**
  ```
  @hugoalh/is-primitive
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `package.json`](./package.json) property `exports` for available sub paths.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Permissions

*This module does not require any permission.*

## 🧩 APIs

- ```ts
  const args: string;// Additional command line arguments.
  ```
- ```ts
  const binIndex: 0 | 1;// Index of bin in the `process.argv`.
  ```
- ```ts
  const binPath: string;// Path of the file is execute.
  ```
- ```ts
  const isBundledElectronJSProgram: boolean;// Whether the process is execute from the bundled ElectronJS program.
  ```
- ```ts
  const isElectronJSProgram: boolean;// Whether the process is execute from the ElectronJS program.
  ```
- ```ts
  const isUnbundledElectronJSProgram: boolean;// Whether the process is execute from the unbundled ElectronJS program.
  ```
- ```ts
  const programPath: string;// Path of the executable file is execute.
  ```

## ✍️ Examples

| **`argv.________`** | **`node bin.js args1 args2 ...argsN`** | **`bin args1 args2 ...argsN`** | **`electron bin.js args1 args2 ...argsN`** |
|:-:|:-:|:-:|:-:|
| **`args`** | `["args1", "args2", ..., "argsN"]` | `["args1", "args2", ..., "argsN"]` | `["args1", "args2", ..., "argsN"]` |
| **`binIndex`** | `1` | `0` | `1` |
| **`binPath`** | `"/path-to/bin.js"` | `"/path-to/bin"` | `"/path-to/bin.js"` |
| **`isBundledElectronJSProgram`** | `false` | `true` | `false` |
| **`isElectronJSProgram`** | `false` | `true` | `true` |
| **`isUnbundledElectronJSProgram`** | `false` | `false` | `true` |
| **`programPath`** | `"/path-to/node"` | `"/path-to/bin"` | `"/path-to/electron"` |
