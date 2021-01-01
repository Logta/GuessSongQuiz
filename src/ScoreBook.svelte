<script>
	import ScoreRow from "./ScoreRow.svelte";
	import ScoreHeader from "./ScoreHeader.svelte";
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
		width: 60%;
		min-width: 300px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
</style>

<div id="scoreTable">
	{#if scores}
		<div>
			<Table bordered>
				{#each scores.getScoreBoard('ok') as row, index}
					{#if index != 0}
						<ScoreRow score={row} />
					{:else}
						<ScoreHeader />
					{/if}
				{/each}
			</Table>
		</div>
	{/if}
</div>
