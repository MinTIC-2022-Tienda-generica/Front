const consultar = document.getElementById('botonConsultar');
const crear = document.getElementById('botonCrear');
const actualizar = document.getElementById('botonActualizar');
const borrar = document.getElementById('botonBorrar');

let Cedula = document.getElementById("InputCedula");
let Nombres = document.getElementById("InputNombres");
let Direccion = document.getElementById("InputDireccion");
let Telefono = document.getElementById("InputTelefono");
let Correo = document.getElementById("InputCorreo");

let subNombres = document.getElementById("InputNombres");
let subDireccion = document.getElementById("InputDireccion");
let subTelefono = document.getElementById("InputTelefono");
let subCorreo = document.getElementById("InputCorreo");

function eliminar(){
	document.getElementById("InputCedula").value = "";
	document.getElementById("InputNombres").value = "";	
	document.getElementById("InputDireccion").value = "";
	document.getElementById("InputTelefono").value = "";
	document.getElementById("InputCorreo").value = "";
}

consultar.addEventListener("click",()=>{
	$.ajax({ 										
			url: "http://localhost:8000/clientes",
			type: "GET", 							
		success: function(data){
			let done = false;
			if(Cedula.value !=""){
				for(let cliente of data){ 
					if(cliente.cedulaCliente == Cedula.value){
						Cedula.value = cliente.cedulaCliente;
						Nombres.value = cliente.nombreCliente;	
						Direccion.value = cliente.direccionCliente;
						Telefono.value = cliente.telefonoCliente;
						Correo.value = cliente.emailCliente;
						subNombres = document.getElementById("InputNombres").value;
						subDireccion = document.getElementById("InputDireccion").value;
						subTelefono = document.getElementById("InputTelefono").value;
						subCorreo = document.getElementById("InputCorreo").value;
						done = true;
					}
				}if(!done){
					swal('Advertencia','El cliente no se encuentra en la base de datos.','warning');
					eliminar();
					}
			}else{
				swal('Error','Por favor ingresar cédula para consultar','error');
				eliminar();
				}
		},							
		error: function(error){					
			console.log("Error: ", error);
			}										
	})	
})

crear.addEventListener("click",()=>{
	if(Cedula.value == "" || Nombres.value == "" || Direccion.value == "" || Telefono.value == "" || Correo.value == ""){
		swal('Advertencia','Por favor ingresar todos los datos.','warning');
	}else{
			$.ajax({ 									
			url: "http://localhost:8000/clientes",	
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify({
				cedulaCliente: $("#InputCedula").val(),
				nombreCliente: $("#InputNombres").val(),
				direccionCliente: $("#InputDireccion").val(),
				telefonoCliente: $("#InputTelefono").val(),
				emailCliente: $("#InputCorreo").val(),
	        }) ,						
			success: function(){		
				eliminar();			
				swal('Éxito','Usuario creado con éxito','success');
			},							
			error: function(error){	
					swal('Advertencia','El usuario ya se encuentra en la base de datos.','warning');
					eliminar();
			}										
		})
	}
	
})

actualizar.addEventListener("click",()=>{
	if(Cedula.value == "" || Nombres.value == "" || Direccion.value == "" || Telefono.value == "" || Correo.value == ""){
		swal('Advertencia','Por favor realizar primero consulta.','warning');
	}else{
			$.ajax({ 										
			url: "http://localhost:8000/clientes",	
			type: "PUT",
			contentType: "application/json",
			data: JSON.stringify({
				cedulaCliente: $("#InputCedula").val(),
				nombreCliente: subNombres != $("#InputNombres").val() ? $("#InputNombres").val():null,
				direccionCliente: subDireccion != $("#InputDireccion").val() ? $("#InputDireccion").val():null,
				telefonoCliente: subTelefono != $("#InputTelefono").val() ? $("#InputTelefono").val():null,
				emailCliente: subCorreo != $("#InputCorreo").val() ? $("#InputCorreo").val():null,
	        }),					
			success: function(){  					 
				swal('Éxito','Usuario actualizado con éxito','success');
				eliminar();
			},							
			error: function(error){					
				console.log("Error: ", error);
				swal('Advertencia','El usuario no se pudo actualizar.','warning');				
			}										
		})
	}
})

borrar.addEventListener("click", ()=>{
	$.ajax({
		url: "http://localhost:8000/clientes/" + document.getElementById("InputCedula").value,
		type: "DELETE",
		success: function (data){
			swal('Éxito','Usuario eliminado con éxito','success');
			eliminar();
		},
		error: function(error){
			console.log("Error: ", error);
		},
	})
})