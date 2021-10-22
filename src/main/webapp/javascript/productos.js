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
	const tableBody = document.getElementById('table-body');
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
		
		$.ajax({ 										
			url: "http://localhost:8000/productos",	
			type: "GET", 							
		success: function(productos){  
			let html = "";			 
			for(let producto of productos){
				let row = `<tr>
								<td>${producto.codigoProducto}</td>
								<td>${producto.nombreProducto}</td>
								<td>${producto.nitProveedor}</td>
								<td>$${producto.precioCompra}</td>
								<td>${producto.ivaCompra}</td>
								<td>$${producto.precioVenta}</td>
							</tr>` /*Uso de comilla simple invertida, donde creamos cada celda*/
				html += row;	
			}
			tableBody.innerHTML = html;
		},							
		error: function(error){					
			console.log("Error: ", error);
			},										
		})
	}
		
});
