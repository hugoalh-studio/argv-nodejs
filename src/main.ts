/*
Pattern of `process.argv`:

[Standard NodeJS Program] node bin.js args1 args2 ...argsn
[Bundled ElectronJS Program] bin args1 args2 ...argsn
[Unbundled ElectronJS Program] electron bin.js args1 args2 ...argsn
*/
/*
`process.defaultApp` is set by unbundled ElectronJS program, see https://github.com/electron/electron/blob/main/docs/api/process.md#processdefaultapp-readonly
*/
/*
`process.versions.electron` is set by ElectronJS program, see https://github.com/electron/electron/blob/main/docs/api/process.md#processversionselectron-readonly
*/
interface ElectronJSProcess extends NodeJS.Process {
	defaultApp?: boolean;
	versions: NodeJS.ProcessVersions & {
		electron: string;
	};
}
/**
 * @constant {boolean} isElectronJSProgram
 * @description Whether the process is execute from ElectronJS program.
 */
const isElectronJSProgram: boolean = typeof (process as ElectronJSProcess).versions.electron !== "undefined";
/**
 * @constant {boolean} isBundledElectronJSProgram
 * @description Whether the process is execute from bundled ElectronJS program.
 */
const isBundledElectronJSProgram: boolean = isElectronJSProgram && typeof (process as ElectronJSProcess).defaultApp === "undefined";
/**
 * @constant {0 | 1} binIndex
 * @description Index of bin in `process.argv`.
 */
const binIndex: 0 | 1 = isBundledElectronJSProgram ? 0 : 1;
/**
 * @constant {readonly string[]} args
 * @description Additional command line arguments.
 */
const args: readonly string[] = Object.freeze(process.argv.slice(binIndex + 1));
/**
 * @constant {string} binPath
 * @description Path of the file is execute.
 */
const binPath: string = process.argv[binIndex];
/**
 * @constant {boolean} isUnbundledElectronJSProgram
 * @description Whether the process is execute from unbundled ElectronJS program.
 */
const isUnbundledElectronJSProgram = !isBundledElectronJSProgram;
/**
 * @constant {string} programPath
 * @description Path of the executable file is execute.
 */
const programPath: string = process.argv[0];
export {
	args,
	binIndex,
	binPath,
	isBundledElectronJSProgram,
	isElectronJSProgram,
	isUnbundledElectronJSProgram,
	programPath
};
