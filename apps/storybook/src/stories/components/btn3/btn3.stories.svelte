<script context="module" lang="ts">
	import { Button3 } from '@repo/ui';

	export const meta = {
		title: 'Btn3',
		component: Button3
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Template let:args>
	<!--👇 'on:click' allows to forward event to addon-actions  -->
	<Button3 {...args} on:click on:click={handleClick}>
		You clicked: {count}
	</Button3>
</Template>

<Story name="Rounded" args={{ rounded: true }} />

<Story name="Square" source args={{ rounded: false }} />

<!-- Dynamic snippet should be disabled for this story -->
<Story name="Button No Args">
	<Button3>Label</Button3>
</Story>
