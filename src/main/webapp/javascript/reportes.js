const listUsuarios = document.getElementById('btn__list--usuarios');
const listClientes = document.getElementById('btn__list-clientes');
const listVentas = document.getElementById('btn__list--ventas');

listUsuarios.addEventListener("click",()=>{
	const tableHead = document.getElementById('table-head'); /*Tomamos el valos de la tabla */
	const tableBody = document.getElementById('table-body');
	$.ajax({ 										
			url: "http://localhost:8000/usuarios",	
			type: "GET", 							
		success: function(data){  
			let html = "";	/*Para que cada usuario se cree una fila */	
			let html1 = "";			 
			for(let usuario of data){ /* Usuario de la base de datos */
			let row__princ = `<thead>
					<tr>
						<th scope="col">Cedula</th>
						<th scope="col">Nombre</th>
						<th scope="col">Correo electronico</th>
						<th scope="col">Usuario</th>
						<th scope="col">Password</th>
					</tr>
				</thead>`
				html1 = row__princ;
				let row = `<tr>
								<td>${usuario.cedulaUsuario}</td>
								<td>${usuario.nombreUsuario}</td>
								<td>${usuario.emailUsuario}</td>
								<td>${usuario.usuario}</td>
								<td>${usuario.password}</td>
							</tr>` /*Uso de comilla simple invertida, donde creamos cada celda*/
				html += row;	
			}
			tableHead.innerHTML = html1;
			tableBody.innerHTML = html;
		},							
		error: function(error){					
			console.log("Error: ", error);
			},										
	})	
})


listClientes.addEventListener("click",()=>{
	const tableHead = document.getElementById('table-head');
	const tableBody = document.getElementById('table-body'); /*Tomamos el valos de la tabla */
	$.ajax({ 										
			url: "http://localhost:8000/clientes",	
			type: "GET", 							
		success: function(data){  
			let html = "";	/*Para que cada usuario se cree una fila */
			let html1 = "";				 
			for(let cliente of data){ /* Usuario de la base de datos */
				let row__princ = `<thead>
										<tr>
											<th scope="col">Cedula</th>
											<th scope="col">Nombre</th>
											<th scope="col">Correo electronico</th>
											<th scope="col">Direccion</th>
											<th scope="col">Telefono</th>
										</tr>
									</thead>`
				html1 = row__princ;
				let row = `<tr>
								<td> ${cliente.cedulaCliente} </td>
								<td> ${cliente.nombreCliente} </td>
								<td> ${cliente.emailCliente} </td>
								<td> ${cliente.direccionCliente} </td>
								<td> ${cliente.telefonoCliente} </td>
							</tr>` /*Uso de comilla simple invertida, donde creamos cada celda*/
				html += row;	
			}
			tableHead.innerHTML = html1;
			tableBody.innerHTML = html;
		},							
		error: function(error){					
			console.log("Error: ", error);
			},										
	})	
})

listVentas.addEventListener("click",()=>{
	const tableHead = document.getElementById('table-head');
	const tableBody = document.getElementById('table-body'); /*Tomamos el valos de la tabla */
	$.ajax({ 										
			url: "http://localhost:8000/ventas",	
			type: "GET", 							
		success: function(data){  
			let html = "";	/*Para que cada usuario se cree una fila */
			let html1 = "";				 
			for(let venta of data){ /* Usuario de la base de datos */
				let row__princ = `<thead>
										<tr>
											<th scope="col">Cedula</th>
											<th scope="col">Nombre</th>
											<th scope="col">Valor Total Ventas</th>
										</tr>
									</thead>`
				html1 = row__princ;
				let row = `<tr>
								<td> ${venta.cedulaCliente} </td>
								<td> ${cliente.nombreCliente} </td>
								<td> ${venta.totalVenta} </td>
							</tr>` /*Uso de comilla simple invertida, donde creamos cada celda*/
				html += row;	
			}
			tableHead.innerHTML = html1;
			tableBody.innerHTML = html;
		},							
		error: function(error){					
			console.log("Error: ", error);
			},										
	})	
})