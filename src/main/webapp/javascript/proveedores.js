const consultar = document.getElementById('botonConsultar');
const crear = document.getElementById('botonCrear');
const actualizar = document.getElementById('botonActualizar');
const borrar = document.getElementById('botonBorrar');

let Nit = document.getElementById("InputNit");
let Nombres = document.getElementById("InputNombres");
let Direccion = document.getElementById("InputDireccion");
let Telefono = document.getElementById("InputTelefono");
let Ciudad = document.getElementById("InputCiudad");

let subNombres = document.getElementById("InputNombres");
let subDireccion = document.getElementById("InputDireccion");
let subTelefono = document.getElementById("InputTelefono");
let subCiudad = document.getElementById("InputCiudad");

function eliminar(){
	document.getElementById("InputNit").value = "";
	document.getElementById("InputNombres").value = "";	
	document.getElementById("InputDireccion").value = "";
	document.getElementById("InputTelefono").value = "";
	document.getElementById("InputCiudad").value = "";
}

consultar.addEventListener("click",()=>{
	$.ajax({ 										
			url: "http://localhost:8000/proveedores",
			type: "GET", 							
		success: function(data){
			let done = false;
			if(Nit.value !=""){
				for(let proveedor of data){ 
					if(proveedor.nitProveedor == Nit.value){
						Nit.value = proveedor.nitProveedor;
						Nombres.value = proveedor.nombreProveedor;	
						Direccion.value = proveedor.direccionProveedor;
						Telefono.value = proveedor.telefonoProveedor;
						Ciudad.value = proveedor.ciudadProveedor;
						subNombres = document.getElementById("InputNombres").value;
						subDireccion = document.getElementById("InputDireccion").value;
						subTelefono = document.getElementById("InputTelefono").value;
						subCiudad = document.getElementById("InputCiudad").value;
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
	if(Nit.value == "" || Nombres.value == "" || Direccion.value == "" || Telefono.value == "" || Ciudad.value == ""){
		swal('Advertencia','Por favor ingresar todos los datos.','warning');
	}else{
			$.ajax({ 									
			url: "http://localhost:8000/proveedores",	
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify({
				nitProveedor: $("#InputNit").val(),
				nombreProveedor: $("#InputNombres").val(),
				direccionProveedor: $("#InputDireccion").val(),
				telefonoProveedor: $("#InputTelefono").val(),
				ciudadProveedor: $("#InputCiudad").val(),
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
	if(Nit.value == "" || Nombres.value == "" || Direccion.value == "" || Telefono.value == "" || Ciudad.value == ""){
		swal('Advertencia','Por favor realizar primero consulta.','warning');
	}else{
			$.ajax({ 										
			url: "http://localhost:8000/proveedores",	
			type: "PUT",
			contentType: "application/json",
			data: JSON.stringify({
				nitProveedor: $("#InputNit").val(),
				nombreProveedor: subNombres != $("#InputNombres").val() ? $("#InputNombres").val():null,
				direccionProveedor: subDireccion != $("#InputDireccion").val() ? $("#InputDireccion").val():null,
				telefonoProveedor: subTelefono != $("#InputTelefono").val() ? $("#InputTelefono").val():null,
				ciudadProveedor: subCiudad != $("#InputCiudad").val() ? $("#InputCiudad").val():null,
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
		url: "http://localhost:8000/proveedores/" + document.getElementById("InputNit").value,
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