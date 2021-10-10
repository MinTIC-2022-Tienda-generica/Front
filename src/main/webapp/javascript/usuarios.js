const consultar = document.getElementById('botonConsultar');
const crear = document.getElementById('botonCrear');
const actualizar = document.getElementById('botonActualizar');
const borrar = document.getElementById('botonBorrar');

let Cedula = document.getElementById("InputCedula");
let Nombres = document.getElementById("InputNombres");
let Correo = document.getElementById("InputCorreo");
let Usuario = document.getElementById("InputUsuario");
let Contrasena = document.getElementById("Inputcontrasena");

let subNombres = document.getElementById("InputNombres");
let subCorreo = document.getElementById("InputCorreo");
let subUsuario = document.getElementById("InputUsuario");

function eliminar(){
	document.getElementById("InputCedula").value = "";
	document.getElementById("InputNombres").value = "";	
	document.getElementById("InputCorreo").value = "";
	document.getElementById("InputUsuario").value = "";
	document.getElementById("Inputcontrasena").value = "";
}

consultar.addEventListener("click",()=>{
	$.ajax({ 										/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
			url: "http://localhost:8000/usuarios",	/* Servidor donde este en ese momento backend */
			type: "GET", 							/* Tipo de petición */
		success: function(data){  					/* Función que se ejecuta cuando es completado con exito */ 
			let done = false;
			if(Cedula.value !=""){
				for(let usuario of data){ /*  */
					if(usuario.cedulaUsuario == Cedula.value){
						Cedula.value = usuario.cedulaUsuario;
						Nombres.value = usuario.nombreUsuario;	
						Correo.value = usuario.emailUsuario;
						Usuario.value = usuario.usuario;
						Contrasena.value = usuario.password;
						subNombres = document.getElementById("InputNombres").value;
						subCorreo = document.getElementById("InputCorreo").value;
						subUsuario = document.getElementById("InputUsuario").value;
						done = true;
					}
				}if(!done){
					swal('Advertencia','El usuario no se encuentra en la base de datos.','warning');
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
	if(Cedula.value == "" || Nombres.value == "" || Correo.value == "" || Usuario.value == "" || Contrasena.value == ""){
		swal('Advertencia','Por favor ingresar todos los datos.','warning');
	}else{
			$.ajax({ 									
			url: "http://localhost:8000/usuarios",	
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify({
				cedulaUsuario: $("#InputCedula").val(),
				usuario: $("#InputUsuario").val(),
				nombreUsuario: $("#InputNombres").val(),
				password: $("#Inputcontrasena").val(),
				emailUsuario: $("#InputCorreo").val(),
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
	if(Cedula.value == "" || Nombres.value == "" || Correo.value == "" || Usuario.value == "" || Contrasena.value == ""){
		swal('Advertencia','Por favor realizar primero consulta.','warning');
	}else{
			$.ajax({ 										
			url: "http://localhost:8000/usuarios",	
			type: "PUT",
			contentType: "application/json",
			data: JSON.stringify({
				cedulaUsuario: $("#InputCedula").val(),
				usuario:subUsuario != $("#InputUsuario").val() ? $("#InputUsuario").val():null,
				nombreUsuario:subNombres != $("#InputNombres").val() ? $("#InputNombres").val():null,
				emailUsuario: subCorreo != $("#InputCorreo").val() ? $("#InputCorreo").val():null,
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
		url: "http://localhost:8000/usuarios/" + document.getElementById("InputCedula").value,
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