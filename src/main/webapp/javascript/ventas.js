const consultarCed =  document.getElementById('btn__cedula');
const consultar =  document.getElementById('btn__product');
const confirmar =  document.getElementById('btn__confirmar');

let Cedula = document.getElementById("Cedula");
let Nombres = document.getElementById("nombreCliente");
let Consecutivo = document.getElementById("consecutivo");
let codProducto = document.getElementById("codProducto");
let producto = document.getElementById("nomProducto");
let cantidad = document.getElementById("canProducto");
let valorProducto = document.getElementById("vlrProducto");
let totalVenta = document.getElementById("totalVenta");
let TotalIva = document.getElementById("totalIva");
let Total = document.getElementById("total");

consultarCed.addEventListener("click",()=>{
	$.ajax({ 										/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
			url: "http://localhost:8000/clientes",	/* Servidor donde este en ese momento backend */
			type: "GET", 							/* Tipo de petición */
		success: function(data){
			console.log(data);  					/* Función que se ejecuta cuando es completado con exito */ 
			let done = false;
			if(Cedula.value !=""){
				for(let cliente of data){ /*  */
					if(cliente.cedulaCliente == Cedula.value){
						Cedula.value = cliente.cedulaCliente;
						Nombres.value = cliente.nombreCliente;	
						done = true;
					}
				}if(!done){
					swal('Advertencia','El usuario no se encuentra en la base de datos.','warning');
					}
			}else{
				swal('Error','Por favor ingresar cédula para consultar','error');
				}	
		},							
		error: function(error){					
			console.log("Error: ", error);
			}										
	})	
})