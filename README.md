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
pnpm dlx storybook@latest init --type sveltekit
```

At this point there is an error. Just ctrl-c and replace [apps/storybook/.storybook/main.ts](apps/storybook/.storybook/main.ts) with

```ts
import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	}
};
export default config;
```

Then add another story in `apps/storybook/src/stories/components/button` to demonstrate support for `<slot/>`s, following [https://storybook.js.org/addons/@storybook/addon-svelte-csf](https://storybook.js.org/addons/@storybook/addon-svelte-csf)


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

