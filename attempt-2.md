# attempt-2

Following the intial setup mentioned in [README.md](./README.md), we continue here. See "Continued steps" below.

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
    pnpm: 9.5.0 - /opt/homebrew/bin/pnpm <----- active
  Browsers:
    Safari: 16.6
```


## Continued steps

#### Starting in the repo root

```bash
rm -rf apps/storybook
rm pnpm-lock.yaml
cd apps
npm create svelte@latest storybook # Choose Library project and TS. Don't add Svelte5
cd ../..
pnpm i
cd apps/storybook
pnpm dev
ctrl-c
pnpm dlx storybook@latest init --type sveltekit
```

#### Output

```bash
➜  storybook git:(main) ✗ pnpm dlx storybook@latest init --type sveltekit
 WARN  3 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6, rimraf@2.6.3
Packages: +443
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 465, reused 442, downloaded 1, added 443, done
╭──────────────────────────────────────────────────────╮
│                                                      │
│   Adding Storybook version 8.2.4 to your project..   │
│                                                      │
╰──────────────────────────────────────────────────────╯
 • Installing Storybook for user specified project type: sveltekit. ✓
Installing dependencies...

Scope: all 6 workspace projects
Done in 621ms
 • Adding Storybook support to your "SvelteKit" app
  ✔ Getting the correct version of 10 packages
    Configuring eslint-plugin-storybook in your package.json
  ✔ Installing Storybook dependencies
. ✓
Installing dependencies...

Scope: all 6 workspace projects
../..                                    | Progress: resolved 1, reused 0, downl../..                                    |   +3 +
../..                                    | Progress: resolved 1, reused 0, downl../..                                    | Progress: resolved 3, reused 2, downloaded 0, added 0, done
Done in 726ms

attention => Storybook now collects completely anonymous telemetry regarding usage.
This information is used to shape Storybook's roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://storybook.js.org/telemetry

╭──────────────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Storybook was successfully installed in your project! 🎉                   │
│   To run Storybook manually, run pnpm run storybook. CTRL+C to stop.         │
│                                                                              │
│   Wanna know more about Storybook? Check out https://storybook.js.org/       │
│   Having trouble or want to chat? Join us at https://discord.gg/storybook/   │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

Running Storybook

> storybook@0.0.1 storybook /Users/cge/dev4/storyrepo/apps/storybook
> storybook dev -p 6006 "--quiet"

/Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js:2
const pLimit = require('p-limit');
               ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-limit/index.js from /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js not supported.
Instead change the require of /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-limit/index.js in /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js:2:16) {
  code: 'ERR_REQUIRE_ESM'
}
```

#### Now remove `getAbsolutePath` in main.ts, followed by

```bash
➜  storybook git:(main) ✗ pnpm storybook

> storybook@0.0.1 storybook /Users/cge/dev4/storyrepo/apps/storybook
> storybook dev -p 6006

/Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js:2
const pLimit = require('p-limit');
               ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-limit/index.js from /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js not supported.
Instead change the require of /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-limit/index.js in /Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/cge/dev4/storyrepo/node_modules/.pnpm/node_modules/p-locate/index.js:2:16) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v20.14.0
 ELIFECYCLE  Command failed with exit code 7.
```