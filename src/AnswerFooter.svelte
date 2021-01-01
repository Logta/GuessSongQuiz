<script>
	import { removeDoubleQuotes } from "./Helper";
	export let footer;
</script>

<style>
	tfoot,
	tr {
		width: 100%;
		background-color: bisque;
	}
</style>

<tfoot>
	<tr>
		<th>正解</th>
		{#each footer as correct}
			<th>{removeDoubleQuotes(correct)}</th>
		{/each}
	</tr>
</tfoot>
