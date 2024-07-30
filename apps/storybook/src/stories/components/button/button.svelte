<script>
	export let rounded = true;
	export let onClick;
</script>

<button class="button" class:rounded on:click={onClick}>
	<slot />
</button>

<style>
	.rounded {
		border-radius: 35px;
	}

	button {
		border: 3px solid;
		padding: 10px 20px;
		background-color: white;
		outline: none;
	}
</style>
