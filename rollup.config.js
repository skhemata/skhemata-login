import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: ['./dist/skhemata-login.js'],
  output: {
    file: './build/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [resolve(), babel()],
};