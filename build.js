const esbuild = require("esbuild");
const { externalGlobalPlugin } = require("esbuild-plugin-external-global");

esbuild.build({
  bundle: true,
  entryPoints: ['./script.jsx'],
  outfile: './dist/script.js',
  plugins: [
    externalGlobalPlugin({
      'react': 'Object.assign({ default: wp.element }, wp.element)',
      'react-dom': 'Object.assign({ default: wp.element }, wp.element)',
    })
  ]
});