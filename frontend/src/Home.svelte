
<script>
	import {checkFileTypeCSV, parseCSV} from "./helper.ts"
	let csv = "";

	function setFile(event) {
		 
		var file = event.target.files[0];
		var reader = new FileReader();
	
    
        // jsonファイル,pmjファイル以外は処理を止める
        if (checkFileTypeCSV(file.name)) {
            alert('jsonファイル、またはpmjファイルを選択してください');
            return;
        }
    
        // ファイル読み取りに失敗したとき
        reader.onerror = function() {
            alert('ファイル読み取りに失敗しました');
        };
		reader.readAsText( file );
	
		reader.addEventListener( 'load', function() {
			csv = reader.result;    
		})
	}

	const onCalc = () =>{
		const array = parseCSV(csv)
		console.log(array)
	}
</script>

<div id="home">
	<h1>曲あてクイズ</h1>
	
	<h2>得点計算</h2>
        
	<div>
		<h3>ファイル指定</h3>
		<input type="file" id="file" on:change={setFile}>
	</div>

	<div>
		<h3>計算</h3>
		<button on:click={onCalc}>計算開始</button>
	</div>
	{csv}
</div>

<style>
	div {
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