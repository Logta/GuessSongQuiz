let fileInput = document.getElementById('file');
let fileReader = new FileReader();
fileInput.onchange = () => {
  let file = fileInput.files[0];
  fileReader.readAsText(file);
};

fileReader.onload = () => console.log(fileReader.result);