<script>
	import { removeDoubleQuotes } from "./Helper";
	export let score;
</script>

<style>
	th,
	td {
		width: 100%;
		background-color: #333;
		color: #fff;
	}
</style>

<tr>
	<th style="width: {20}%;">{removeDoubleQuotes(score[0])}</th>
	<td style="width: {20}%;">{score[1]}</td>
</tr>
