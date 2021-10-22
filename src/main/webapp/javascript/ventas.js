const consultarCed = document.getElementById("btn__cedula");
const botonesConsultar = [
	document.getElementById("btn__product--1"),
	document.getElementById("btn__product--2"),
	document.getElementById("btn__product--3"),
];
const confirmar = document.getElementById("btn__confirmar");

let Cedula = document.getElementById("Cedula");
let Nombres = document.getElementById("nombreCliente");
let Consecutivo = document.getElementById("consecutivo");

let codigosProductos = [
	document.getElementById("codProducto--1"),
	document.getElementById("codProducto--2"),
	document.getElementById("codProducto--3"),
];
let nombresProductos = [
	document.getElementById("nomProducto--1"),
	document.getElementById("nomProducto--2"),
	document.getElementById("nomProducto--3"),
];
let cantidadProductos = [
	document.getElementById("canProducto--1"),
	document.getElementById("canProducto--2"),
	document.getElementById("canProducto--3"),
];
let valoresProductos = [
	document.getElementById("vlrProducto--1"),
	document.getElementById("vlrProducto--2"),
	document.getElementById("vlrProducto--3"),
];
let productos = [];
let totalVenta = document.getElementById("totalVenta");
let TotalIva = document.getElementById("totalIva");
let Total = document.getElementById("total");

window.onload = () => {
	Consecutivo.value = new Date().valueOf();
};

consultarCed.addEventListener("click", () => {
	$.ajax({
		/* Como realizar peticiones - base / http con js, función recibe como parametro un objeto de js*/
		url: "http://localhost:8000/clientes" /* Servidor donde este en ese momento backend */,
		type: "GET" /* Tipo de petición */,
		success: function (data) {
			let done = false;
			if (Cedula.value != "") {
				for (let cliente of data) {
					/*  */
					if (cliente.cedulaCliente == Cedula.value) {
						Cedula.value = cliente.cedulaCliente;
						Nombres.value = cliente.nombreCliente;
						done = true;
					}
				}
				if (!done) {
					swal("Advertencia", "El usuario no se encuentra en la base de datos.", "warning");
				}
			} else {
				swal("Error", "Por favor ingresar cedula para consultar", "error");
			}
		},
		error: function (error) {
			console.log("Error: ", error);
		},
	});
});

for (let i = 0; i < 3; i++) {
	botonesConsultar[i].addEventListener("click", (mouse) => {
		$.ajax({
			url: "http://localhost:8000/productos/" + codigosProductos[i].value /* Servidor donde este en ese momento backend */,
			type: "GET" /* Tipo de petición */,
			success: function (producto) {
				if (codigosProductos[i].value.trim() != "") {
					codigosProductos[i].value = producto.codigoProducto;
					nombresProductos[i].value = producto.nombreProducto;
					valoresProductos[i].value = producto.precioCompra * cantidadProductos[i].value;
					productos[i] = producto;
				} else {
					swal("Advertencia", "Por favor ingrese un codigo de producto", "warning");
				}
			},
			error: function (error) {
				console.log("Error: ", error);
				swal("Advertencia", "El codigo no se encuentra en la base de datos", "warning");
			},
		});
	});
	cantidadProductos[i].addEventListener("change", (ev) => {
		valoresProductos[i].value = productos[i].precioCompra * cantidadProductos[i].value;
	});
	cantidadProductos[i].addEventListener("keyup", (ev) => {
		valoresProductos[i].value = productos[i].precioCompra * cantidadProductos[i].value;
	});
}
confirmar.addEventListener("click", () => {
	let totalTemp = 0;
	let detalles = [];
	for (let i = 0; i < 3; i++) {
		totalTemp += Number(valoresProductos[i].value);
	}
	Total.value = totalTemp;
	TotalIva.value = Total.value * 0.19;
	totalVenta.value = Total.value - TotalIva.value;

	for (let i = 0; i < productos.length; i++) {
		detalles.push({
			cantidadProducto: cantidadProductos[i].value,
			codigoProducto: codigosProductos[i].value,
			codigoVenta: Consecutivo.value,
			valorIva: productos[i].ivaCompra,
			valorVenta: productos[i].precioCompra,
			valorTotal: productos[i].precioCompra * (1 + productos[i].ivaCompra / 100),
		});
	}

	$.ajax({
		url: "http://localhost:8000/ventas",
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify({
			venta: {
				codigoVenta: Consecutivo.value,
				cedulaCliente: Cedula.value,
				cedulaUsuario: -1,
				ivaventa: 19,
				valorVenta: Total.value,
				totalVenta: -1,
			},
			detalles: detalles,
		}),
		success: function () {
			swal("Exito", "Venta registrada con exito", "success");
		},
		error: function (error) {
			console.trace(error);
			swal("Advertencia", "Error al registrar venta: Ver trace de errores.", "warning");
		},
	});
});
