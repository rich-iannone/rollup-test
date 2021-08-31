import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './out-tsc/src/app.js',
  output: {
      dir: 'dist',
  },
  plugins: [commonjs(), json()]
});
