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
		<td>正解</td>
		{#each footer as correct}
			<td>{removeDoubleQuotes(correct)}</td>
		{/each}
	</tr>
</tfoot>
