/*
Pattern of `process.argv`:

- Standard NodeJS: `node bin.js args1 args2 ...argsn`
- Bundled ElectronJS: `bin args1 args2 ...argsn`
- Unbundled ElectronJS: `electron bin.js args1 args2 ...argsn`
*/
/* `process.defaultApp` is set by unbundled ElectronJS program, see https://github.com/electron/electron/blob/main/docs/api/process.md#processdefaultapp-readonly */
/* `process.versions.electron` is set by ElectronJS program, see https://github.com/electron/electron/blob/main/docs/api/process.md#processversionselectron-readonly */
interface ElectronJSProcess extends NodeJS.Process {
	defaultApp?: boolean;
	versions: NodeJS.ProcessVersions & {
		electron: string;
	};
}
/**
 * Whether the process is execute from ElectronJS program.
 */
export const isElectronJSProgram: boolean = typeof (process as ElectronJSProcess).versions.electron !== "undefined";
/**
 * Whether the process is execute from bundled ElectronJS program.
 */
export const isBundledElectronJSProgram: boolean = (isElectronJSProgram && typeof (process as ElectronJSProcess).defaultApp === "undefined");
/**
 * Index of bin in `process.argv`.
 */
export const binIndex: 0 | 1 = isBundledElectronJSProgram ? 0 : 1;
/**
 * Additional command line arguments.
 */
export const args: readonly string[] = Object.freeze(process.argv.slice(binIndex + 1));
/**
 * Path of the file is execute.
 */
export const binPath: string = process.argv[binIndex];
/**
 * Whether the process is execute from unbundled ElectronJS program.
 */
export const isUnbundledElectronJSProgram = (isElectronJSProgram && (process as ElectronJSProcess).defaultApp === true);
/**
 * Path of the executable file is execute.
 */
export const programPath: string = process.argv[0];
