/*
Pattern of the `process.argv`:

- Standard NodeJS: `node bin.js args1 args2 ...argsN`
- Bundled ElectronJS: `bin args1 args2 ...argsN`
- Unbundled ElectronJS: `electron bin.js args1 args2 ...argsN`
*/
interface ElectronJSProcess extends NodeJS.Process {
	/**
	 * Define by the unbundled ElectronJS program. See https://github.com/electron/electron/blob/main/docs/api/process.md#processdefaultapp-readonly.
	 */
	defaultApp?: boolean;
	/**
	 * Define by the ElectronJS program. See https://github.com/electron/electron/blob/main/docs/api/process.md#processversionselectron-readonly.
	 */
	versions: NodeJS.ProcessVersions & {
		electron: string;
	};
}
/**
 * Whether the process is execute from the ElectronJS program.
 */
export const isElectronJSProgram: boolean = typeof (process as ElectronJSProcess).versions.electron !== "undefined";
/**
 * Whether the process is execute from the bundled ElectronJS program.
 */
export const isBundledElectronJSProgram: boolean = isElectronJSProgram && typeof (process as ElectronJSProcess).defaultApp === "undefined";
/**
 * Index of bin in the {@linkcode process.argv}.
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
 * Whether the process is execute from the unbundled ElectronJS program.
 */
export const isUnbundledElectronJSProgram: boolean = isElectronJSProgram && (process as ElectronJSProcess).defaultApp === true;
/**
 * Path of the executable file is execute.
 */
export const programPath: string = process.argv[0];
