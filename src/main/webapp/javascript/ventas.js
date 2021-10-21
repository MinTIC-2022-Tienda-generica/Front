const consultarCed =  document.getElementById('btn__cedula');
const consultar1 =  document.getElementById('btn__product--1');
const consultar2 =  document.getElementById('btn__product--2');
const consultar3 =  document.getElementById('btn__product--3');
const confirmar =  document.getElementById('btn__confirmar');

let Cedula = document.getElementById("Cedula");
let Nombres = document.getElementById("nombreCliente");
let Consecutivo = document.getElementById("consecutivo");
let codProducto1 = document.getElementById("codProducto--1");
let codProducto2 = document.getElementById("codProducto--2");
let codProducto3 = document.getElementById("codProducto--3");
let nomProducto1 = document.getElementById("nomProducto--1");
let nomProducto2 = document.getElementById("nomProducto--2");
let nomProducto3 = document.getElementById("nomProducto--3");
let canProducto1 = document.getElementById("canProducto--1");
let canProducto2 = document.getElementById("canProducto--2");
let canProducto3 = document.getElementById("canProducto--3");
let vlrProducto1 = document.getElementById("vlrProducto--1");
let vlrProducto2 = document.getElementById("vlrProducto--2");
let vlrProducto3 = document.getElementById("vlrProducto--3");
let totalVenta = document.getElementById("totalVenta");
let TotalIva = document.getElementById("totalIva");
let Total = document.getElementById("total");

consultarCed.addEventListener("click",()=>{
	$.ajax({ 										/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
			url: "http://localhost:8000/clientes",	/* Servidor donde este en ese momento backend */
			type: "GET", 							/* Tipo de petición */
		success: function(data){
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
consultar1.addEventListener("click",()=>{
	$.ajax({ 										/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
			url: "http://localhost:8000/productos",	/* Servidor donde este en ese momento backend */
			type: "GET", 							/* Tipo de petición */ 
		success: function(data){
			let done = false;
			if(codProducto1.value !=""){
				for(let producto of data){
					if(producto.codigoProducto == codProducto1.value){
						codProducto1.value = producto.codigoProducto;
						nomProducto1.value = producto.nombreProducto;
						valorUnidad1 = producto.precioVenta;
						totalProducto1 = valorUnidad1*canProducto1.value;
						vlrProducto1.value = totalProducto1 	
						done = true;
					}
				}if(!done){
					swal('Advertencia','El código no se encuentra en la base de datos','warning');
					}
			}else{
				swal('Error','Por favor ingresar nit para consultar','error');
				}	
		},							
		error: function(error){					
			console.log("Error: ", error);
			}										
	})	
})
consultar2.addEventListener("click",()=>{
	$.ajax({ 										/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
			url: "http://localhost:8000/productos",	/* Servidor donde este en ese momento backend */
			type: "GET", 							/* Tipo de petición */ 
		success: function(data){
			let done = false;
			if(codProducto2.value !=""){
				for(let producto of data){
					if(producto.codigoProducto == codProducto2.value){
						codProducto2.value = producto.codigoProducto;
						nomProducto2.value = producto.nombreProducto;
						valorUnidad2 = producto.precioVenta;
						totalProducto2 = valorUnidad2*canProducto2.value;
						vlrProducto2.value = totalProducto2 	
						done = true;
					}
				}if(!done){
					swal('Advertencia','El código no se encuentra en la base de datos','warning');
					}
			}else{
				swal('Error','Por favor ingresar nit para consultar','error');
				}	
		},							
		error: function(error){					
			console.log("Error: ", error);
			}										
	})	
})
consultar3.addEventListener("click",()=>{
	$.ajax({ 										/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
			url: "http://localhost:8000/productos",	/* Servidor donde este en ese momento backend */
			type: "GET", 							/* Tipo de petición */ 
		success: function(data){
			let done = false;
			if(codProducto3.value !=""){
				for(let producto of data){
					if(producto.codigoProducto == codProducto3.value){
						codProducto3.value = producto.codigoProducto;
						nomProducto3.value = producto.nombreProducto;
						valorUnidad3 = producto.precioVenta;
						totalProducto3 = valorUnidad3*canProducto3.value;
						vlrProducto3.value = totalProducto3 	
						done = true;
					}
				}if(!done){
					swal('Advertencia','El código no se encuentra en la base de datos','warning');
					}
			}else{
				swal('Error','Por favor ingresar nit para consultar','error');
				}	
		},							
		error: function(error){					
			console.log("Error: ", error);
			}										
	})	
})
confirmar.addEventListener("click",()=>{
		Total.value = totalProducto1+totalProducto2+totalProducto3;
		TotalIva.value = Total.value*0.19;
		totalVenta.value = Total.value-TotalIva.value;
})		
			
			
			
			
			
			
			
			
			