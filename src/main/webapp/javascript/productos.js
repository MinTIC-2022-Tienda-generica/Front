const toJson = (text) => {
	let array = text.split("\r").slice(0, -1);
	let titles = array[0].split(",") ;
	let json = [];
	
	for (let i = 1; i < array.length; i++) {
		let data = array[i].split(",");
		let temp = {};
		for (let j = 0; j < data.length; j++) {
			temp[titles[j]] = data[j].replace("\n", "");
			}
		json.push(temp);
		}
	return json;
};

document.querySelector("#botonCargar").addEventListener("click", (mouse) => {
	let file = document.querySelector("#fileSelector").files[0];
	if(file){
		let reader = new FileReader();
		reader.readAsText(file, "UTF-8");
		reader.onload = function (evt){
			let result = evt.target.result;
			let json = toJson(result);
			$.ajax({ 									
				url: "http://localhost:8000/productos",	
				type: "POST",
				contentType: "application/json",
				data: JSON.stringify(json) ,						
				success: function(){
					console.log("Funciona");
					console.log(json);
					swal('Éxito','Carga de archivo con éxito','success');
				},							
				error: function(error){	
					if(error == 400){
						swal('Error','Archivo en formato desconocido.','error');
					}else if(error == 404){
						swal('Error','No hay proveedores disponibles para generar el archivo.','error');
					}
				}										
			})
		};
	}
});