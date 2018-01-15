// const ipc = require('electron').ipcRenderer;
// const printPDFButton = document.getElementById('print-pdf');


<<<<<<< HEAD
ipc.on('wrote-pdf', function(event, path) {
	console.log("Wrote the pdf.");
})
=======


// printPDFButton.addEventListener('click', function(event) {
// 	alert("did button click work?");
// 	ipc.send('print-to-pdf');
// });

// ipc.on('wrote-pdf', function(event, path) {
// 	const message = `Wrote PDF to: ${path}`;
// 	alert("did wrote work?");
// 	document.getElementById('pdf-path').innerHTML = message;
// })


// ipc.on('print-to-pdf', function(event) {
// 	alert("did print-to-pdf work?");
// 	const pdfPath = path.join(__dirname, '/print.pdf'); //os.tmpdir(), 
// 	const win = BrowserWindow.fromWebContents(event.sender);

// 	win.webContents.printToPDF({}, function(error, data) {
// 		if(error) return console.log(error.message);

// 		fs.writeFile(pdfPath, data, function(err) {
// 			if(err) return console.log(err.message);

// 			alert("did it work?");
// 			shell.openExternal('file://' + pdfPath);
// 			event.sender.send('wrote-pdf', pdfPath);
// 		});
// 	})
// })
>>>>>>> 3d86b3fcbed2bad29b05b840beafe259fdca17e5
