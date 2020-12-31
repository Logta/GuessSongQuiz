<script>
	import ScoreRow from "./ScoreRow.svelte";
	export let scores;
</script>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		border: 1px solid #333;
	}
</style>

<div id="answerTable">
	{#if scores}
		<table>
			{#each scores.getScoreBoard('ok') as row}
				<ScoreRow score={row} />
			{/each}
		</table>
	{/if}
</div>
