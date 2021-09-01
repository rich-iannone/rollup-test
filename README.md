# rollup-test

This is a test to see if it's possible to write logic in TypeScript, with nontrivial npm dependencies, with the intent of deploying the logic in an R package.

## Motivation

There's lots of cool functionality in JS libraries that would be great to access from R libraries. However, as R package authors, we don't want to require R users to install Node.js (or Deno) just to use our R package.

The [V8](https://github.com/jeroen/v8) R package is a wrapper around a world-class JS engine, but it certainly doesn't provide the facilities of Node.js/Deno/browsers (no `window` object, no native TypeScript support, no module resolution/loading). So it's necessary to do some preprocessing to make our logic suitable for execution with V8.

V8 has a [vignette](https://cran.r-project.org/web/packages/V8/vignettes/npm.html) for using npm dependencies, using [browserify](https://browserify.org/). This repo is an attempt to do something similar, with TypeScript, using [rollup](https://rollupjs.org/guide/en/).

## How to use

You do need Node.js (tested with v16) to build this project (the generated JS output only requires V8).

First, run `npm install` to install dependencies, including TypeScript and rollup.

Then, run `npm run build`. This takes the code in `src/app.ts` as input, and puts the rolled-up JS in `dist/app.js`.

Finally, run `Rscript run.R` to run `dist/app.js` in R/V8.
