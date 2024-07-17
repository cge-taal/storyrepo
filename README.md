# storyrepo

An attempt to get the simplest setup working with the following ingredients

- turborepo
- pnpm
- sveltekit
- storybook

## Steps

```bash
npx create-turbo@latest -e with-svelte storyrepo # choose pnpm
cd storyrepo/apps
npm create svelte@latest storybook # Choose Library project and TS. Don't add Svelte5
cd storybook
```

Now try to initialise storybook inside [apps/storybook](apps/storybook/)

```bash
pnpm dlx storybook@latest init --type sveltekit
```

The step above introduces the following error

```bash
/Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js:2
const pLimit = require('p-limit');
               ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-limit/index.js from /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js not supported.
Instead change the require of /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-limit/index.js in /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js:2:16) {
  code: 'ERR_REQUIRE_ESM'
}
```

## Storybook Environment Info

`npx storybook@latest info` gives

```bash
Storybook Environment Info:

  System:
    OS: macOS 13.5.1
    CPU: (10) arm64 Apple M1 Pro
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 20.14.0 - /usr/local/bin/node
    Yarn: 1.22.19 - /opt/homebrew/bin/yarn
    npm: 10.7.0 - /usr/local/bin/npm
    pnpm: 9.4.0 - /opt/homebrew/bin/pnpm <----- active
  Browsers:
    Safari: 16.6
```

