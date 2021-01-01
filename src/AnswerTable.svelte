<script>
	import AnswerHeader from "./AnswerHeader.svelte";
	import AnswerRow from "./AnswerRow.svelte";
	import AnswerFooter from "./AnswerFooter.svelte";
	import { Table } from "sveltestrap";

	export let answers;
</script>

<style>
	div {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	tbody {
		background-color: #333;
		width: 100%;
		color: #fff;
	}
</style>

<div id="answerTable">
	{#if answers}
		<Table bordered>
			<AnswerHeader header={answers.getAnswers()[0].answer} />
			<tbody>
				{#each answers.getAnswers() as row, index}
					{#if index != 0}
						<AnswerRow answers={row} />
					{/if}
				{/each}
			</tbody>
			<AnswerFooter footer={answers.getCorrect('ok')} />
		</Table>
	{/if}
</div>
