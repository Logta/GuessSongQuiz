<script>
	import AnswerHeader from "./AnswerHeader.svelte";
	import AnswerRow from "./AnswerRow.svelte";
	export let answers;
</script>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		border: 1px solid #333;
	}

	tbody {
		background-color: #333;
		width: 100%;
		color: #fff;
	}
</style>

<div id="answerTable">
	{#if answers}
		<table>
			<AnswerHeader header={answers.getAnswers()[0].answer} />
			<tbody>
				{#each answers.getAnswers() as row, index}
					{#if index != 0}
						<AnswerRow answers={row} />
					{/if}
				{/each}
			</tbody>
		</table>
		{answers}
	{/if}
</div>
