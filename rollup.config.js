import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import pkg from './package.json' assert { type: "json" };

export default [
    {
        input: 'src/index.js',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'esm' },
        ],
        plugins: [
            del({ targets: ['dist/*'] }),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            }),
        ],
        external: Object.keys(pkg.peerDependencies || {}),
    },
];