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
export { args, binIndex, binPath, isBundledElectronJSProgram, isElectronJSProgram, isUnbundledElectronJSProgram, programPath };
