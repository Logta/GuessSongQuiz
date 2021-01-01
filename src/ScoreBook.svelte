<script>
	import ScoreRow from "./ScoreRow.svelte";
	export let scores;
	import { Table } from "sveltestrap";
</script>

<style>
	div#scoreTable {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		padding-top: 50px;
	}
	div {
		border-collapse: collapse;
		width: 60%;
		min-width: 300px;
	}
</style>

<div id="scoreTable">
	{#if scores}
		<div>
			<Table bordered>
				{#each scores.getScoreBoard('ok') as row}
					<ScoreRow score={row} />
				{/each}
			</Table>
		</div>
	{/if}
</div>
