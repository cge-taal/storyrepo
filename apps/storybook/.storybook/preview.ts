import type { Preview } from '@storybook/svelte';
import GlobalDecorator from './GlobalDecorator.svelte';

const preview: Preview = {
	decorators: [(_, story) => ({ Component: GlobalDecorator, props: { context: story.globals } })],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
