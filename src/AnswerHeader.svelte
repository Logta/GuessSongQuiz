<script>
	export let header;
</script>

<style>
	thead,
	tr {
		width: 100%;
		background-color: #333;
		color: #fff;
	}
</style>

<thead>
	<tr>
		<th style="width: {10}%;">回答者</th>
		{#each header as _, index}
			<th style="width: {90 / header.length}%;">{index + 1}</th>
		{/each}
	</tr>
</thead>
