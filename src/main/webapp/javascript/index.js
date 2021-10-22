var botonIngresar = document.getElementById('botonIngresar');

botonIngresar.addEventListener("click",()=>{
	var usuario = document.getElementById("InputUsuario").value;
	var contrasena = document.getElementById("Inputcontrasena").value;

	if(usuario=="" || contrasena==""){
		swal("Error!", "Por favor ingrese su usuario y/o contraseña!", "error");
	}else{
		$.ajax({ 									/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
				url: "http://localhost:8000/auth",	/* Servidor donde este en ese momento backend */
				type: "POST", 						/* Tipo de petición */
				xhrFields: {withCredentials: true},	/*Crear la sesión del usuario en si.*/
		        contentType: "application/json",
		        data: JSON.stringify({
		        	username: usuario,
					password: contrasena,
		        }),
			success: function(){  					/* Función que se ejecuta cuando es completado con exito */ 
				window.location="usuarios.jsp";	  
			},										
			error: function(error){					/* Cuando la petición salga mal. */
				console.log("Error: ", error);
				swal('Advertencia','Usuario y/o contraseña incorrecta','warning');
		    }										
		})	
	}
})