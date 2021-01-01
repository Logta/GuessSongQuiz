<script>
	import { removeDoubleQuotes } from "./Helper";
	export let score;
</script>

<tr>
	<th style="width: {20}%;">{removeDoubleQuotes(score[0])}</th>
	<td style="width: {20}%;">{score[1]}</td>
</tr>
