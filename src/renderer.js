const ipc = require().ipcRenderer;

const printPDFButton = document.getElementbyId('print-pdf');

printPDFButton.addEventListener('click', function (event) {
	ipc.send('print-to-pdf');
});

ipc.on('wrote-pdf' , function (event, path) {
	const message = `Wrote PDF to: ${path}`;
	document.getElementbyId('pdf-path').innerHTML = message;
});