/*
Pattern of `process.argv`:

[Standard NodeJS Program] node bin.js argv1 argv2 ...argvn
[Bundled ElectronJS Program] bin argv1 argv2 ...argvn
[Unbundled ElectronJS Program] electron bin.js argv1 argv2 ...argvn
*/
/*
`process.defaultApp` is set by unbundled ElectronJS program, see https://github.com/electron/electron/blob/main/docs/api/process.md#processdefaultapp-readonly
*/
/*
`process.versions.electron` is set by ElectronJS program, see https://github.com/electron/electron/blob/main/docs/api/process.md#processversionselectron-readonly
*/
/**
 * @constant {boolean} isElectronJSProgram
 * @description Whether the process is execute from ElectronJS program.
 */
const isElectronJSProgram = typeof process.versions.electron !== "undefined";
/**
 * @constant {boolean} isBundledElectronJSProgram
 * @description Whether the process is execute from bundled ElectronJS program.
 */
const isBundledElectronJSProgram = isElectronJSProgram && typeof process.defaultApp === "undefined";
/**
 * @constant {0 | 1} binIndex
 * @description Index of bin in `process.argv`.
 */
const binIndex = isBundledElectronJSProgram ? 0 : 1;
/**
 * @constant {readonly string[]} args
 * @description Additional command line arguments.
 */
const args = Object.freeze(process.argv.slice(binIndex + 1));
/**
 * @constant {string} binPath
 * @description Path of the file is execute.
 */
const binPath = process.argv[binIndex];
/**
 * @constant {boolean} isUnbundledElectronJSProgram
 * @description Whether the process is execute from unbundled ElectronJS program.
 */
const isUnbundledElectronJSProgram = !isBundledElectronJSProgram;
/**
 * @constant {string} programPath
 * @description Path of the executable file is execute.
 */
const programPath = process.argv[0];
module.exports = {
	args,
	binIndex,
	binPath,
	isBundledElectronJSProgram,
	isElectronJSProgram,
	isUnbundledElectronJSProgram,
	programPath
};
