<script lang="ts">
	console.log('GlobalDecorator');
</script>

<div style="height: 200px; width: 1000px; background-color: red;">
	<div class="works">GlobalDecorator content</div>
	<slot />
</div>

<style>
	.works {
		font-family: Work Sans;
		padding-bottom: 20px;
	}
</style>
