<script>
	export let header;
</script>

<style>
	thead,
	tr {
		width: 100%;
	}
</style>

<thead>
	<tr>
		<th style="width: {20}%;">回答者</th>
		{#each header as _, index}
			<th style="width: {80 / header.length}%;">{index + 1}</th>
		{/each}
	</tr>
</thead>
