<script>
	import {
		Button,
		FormGroup,
		Label,
		CustomInput,
		Jumbotron,
	} from "sveltestrap";
	import { checkFileTypeCSV, parseAnswer } from "./Helper.ts";
	import AnswerTable from "./AnswerTable.svelte";
	import { AnswerSheet } from "./AnswerSheet.ts";
	import ScoreBook from "./ScoreBook.svelte";

	let filename = "";
	let csv = "";
	let answerSheet = undefined;

	const setFile = (event) => {
		var file = event.target.files[0];
		var reader = new FileReader();

		// jsonファイル,pmjファイル以外は処理を止める
		if (checkFileTypeCSV(file.name)) {
			alert("csvファイルを選択してください");
			return;
		}

		// ファイル読み取りに失敗したとき
		reader.onerror = function () {
			alert("ファイル読み取りに失敗しました");
		};
		reader.readAsText(file);

		reader.addEventListener("load", function () {
			csv = reader.result;
			filename = file.name;
		});
	};

	const onCalc = () => {
		const answers = parseAnswer(csv);

		answerSheet = new AnswerSheet();
		answerSheet.setAnswers(answers);
		answerSheet.calcScore("ok");
	};
</script>

<style>
	@import "bootstrap/dist/css/bootstrap.min.css";
	main {
		text-align: center;
		padding: 1em;
		max-width: 100%;
	}
	h2 {
		color: #000000;
		font-weight: bold;
	}
	h4 {
		padding-top: 10px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	div#form {
		width: 50%;
		min-width: 360px;
		margin-left: auto;
		margin-right: auto;
	}
	div#content {
		width: 100%;
		text-align: left;
		margin-right: auto;
	}
	div#score {
		width: 50%;
		min-width: 360px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	div#answer {
		padding-top: 50px;
		width: 100%;
		min-width: 360px;
		margin-left: auto;
		margin-right: auto;
	}
</style>

<main>
	<div id="form">
		<div id="content">
			<Jumbotron fluid class="p-3">
				<h2>得点計算</h2>
			</Jumbotron>

			<h4>ファイル指定</h4>
			<FormGroup>
				<CustomInput
					type="file"
					id="fileSelector"
					name="customFile"
					label={filename === '' ? '結果のCSVファイルを選択してください' : filename}
					on:change={setFile} />
			</FormGroup>

			<h4>計算</h4>
			<Button color={'primary'} on:click={onCalc}>計算開始</Button>
		</div>
	</div>

	<div id="score">
		<ScoreBook scores={answerSheet} />
	</div>

	<div id="answer">
		<AnswerTable answers={answerSheet} />
	</div>
</main>
