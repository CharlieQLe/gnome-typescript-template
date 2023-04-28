import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

/* Export like so:

export default [
    ...
    {
        input: 'path/to/modulename.js',
        output: {
            file: 'src/vendor/modulename.js,
        },
        plugins: [nodeResolve(), commonjs(), ...],
    },
    {
        input: 'path/to/modulename.d.ts',
        output: {
            file: 'src/vendor/modulename.d.js,
        },
        plugins: [dts({ respectExternal: true })],
    },
    ...
]

*/