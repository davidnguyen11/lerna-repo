import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isMinify = process.env.BUILD_MINIFY ? true : false;

let output = [
  {
    file: 'dist/helpers.cjs.js',
    name: 'helpers-cjs',
    format: 'cjs'
  },
  {
    file: 'dist/helpers.esm.js',
    name: 'helpers-esm',
    format: 'esm'
  },
  {
    file: 'dist/helpers.umd.js',
    name: 'helpers-umd',
    format: 'umd',
    sourcemap: true
  },
];

if (isMinify) {
  output = {
    file: 'dist/helpers.umd.min.js',
    name: 'helpers.umd.min',
    format: 'iife',
    sourcemap: true
  };
}

export default [{
  input: 'src/index.js',
  output,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    isMinify ? terser() : null
  ]
}];
