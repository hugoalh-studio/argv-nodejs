/**
 * Whether the process is execute from ElectronJS program.
 */
export const isElectronJSProgram = typeof process.versions.electron !== "undefined";
/**
 * Whether the process is execute from bundled ElectronJS program.
 */
export const isBundledElectronJSProgram = (isElectronJSProgram && typeof process.defaultApp === "undefined");
/**
 * Index of bin in `process.argv`.
 */
export const binIndex = isBundledElectronJSProgram ? 0 : 1;
/**
 * Additional command line arguments.
 */
export const args = Object.freeze(process.argv.slice(binIndex + 1));
/**
 * Path of the file is execute.
 */
export const binPath = process.argv[binIndex];
/**
 * Whether the process is execute from unbundled ElectronJS program.
 */
export const isUnbundledElectronJSProgram = (isElectronJSProgram && process.defaultApp === true);
/**
 * Path of the executable file is execute.
 */
export const programPath = process.argv[0];
