const listUsuarios = document.getElementById('btn__list--usuarios');
const listClientes = document.getElementById('btn__list-clientes');
const listVentas = document.getElementById('btn__list--ventas');

listUsuarios.addEventListener("click",()=>{
	const tableBody = document.getElementById('table-body'); /*Tomamos el valos de la tabla */
	$.ajax({ 										
			url: "http://localhost:8000/usuarios",	
			type: "GET", 							
		success: function(data){  
			let html = "";	/*Para que cada usuario se cree una fila */				 
			for(let usuario of data){ /* Usuario de la base de datos */
				let row = `<tr>
								<td scope = "row"> -- <td/>
								<td> ${usuario.cedulaUsuario} <td/>
								<td> ${usuario.nombreUsuario} <td/>
								<td> ${usuario.emailUsuario} <td/>
								<td> ${usuario.usuario} <td/>
							</tr>` /*Uso de comilla simple invertida, donde creamos cada celda*/
				html += row;	
			}
			tableBody.innerHTML = html;
		},							
		error: function(error){					
			console.log("Error: ", error);
			},										
	})	
})