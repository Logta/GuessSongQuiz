
<script>
	let fileInput = "";

	const onCalc = () =>{
		// 文字コードをオプション指定
		let text2 = fs.readFile(fileInput, 'utf-8', (err, data) => {
		if (err) throw err;    // 例外発生時の処理
		console.log(data);
		});
	}
</script>

<main>
	<h1>曲あてクイズ</h1>
	
	<h2>得点計算</h2>
        
	<div>
		<h3>ファイル指定</h3>
		<input type="file" id="file" bind:value={fileInput}>
	</div>

	<div>
		<h3>計算</h3>
		<button on:click={onCalc}>計算開始</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>