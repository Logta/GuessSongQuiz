<script>
	export let answers;
</script>

<style>
	tr {
		width: 100%;
	}
	td {
		border: 1px solid #333;
	}
</style>

<tr>
	<td style="width: {20}%;">{answers.name.replace(/[\"]/g, '')}</td>
	{#each answers.answer as element}
		<td style="width: {80 / answers.answer.length}%;">
			{element.replace(/[\"]/g, '')}
		</td>
	{/each}
</tr>
