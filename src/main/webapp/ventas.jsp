<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./estilos/ventas.css">
        <title>Ventas</title>
      </head>
  <body>
    <div class="container">
        <header class="header">
            <nav class="header__menu">
                <ul>
                    <li><a href="usuarios.jsp">Usuarios</a></li>
                    <li><a href="clientes.jsp">Clientes</a></li>
                    <li><a href="proveedores.jsp">Proveedores</a></li>
                    <li><a href="productos.jsp">Productos</a></li>
                    <li><a href="ventas.jsp"   class="active">Ventas</a></li>
                    <li><a href="reportes.jsp">Reportes</a></li>
                </ul>
            </nav>
            <div class="header__salir">
                <img src="https://img.icons8.com/ios/20/000000/export.png"/>
                <ul><li><a href="index.jsp">Salir</a></li></ul>
            </div>
        </header>

        <div class="container background" >
            <h3>Bienvenido, usted tiene permisos de administrador.</h3>
			<div class="fila">
	       		<label for="Cedula">Cédula</label>
				<input type="text" id="Cedula" name="Cedula" />
				<button id="btn__cedula">Consultar</button>
				<label for="nombreCliente">Cliente</label>
				<input type="text" id="nombreCliente" name="nombreCliente" disabled/>
				<label for="consecutivo">N° consecutivo</label>
				<input type="text" id="consecutivo" name="consecutivo" disabled/>       
	        </div>
            
            <div class="row filas">
                <div class="columnas">
                    <div class="mb-3" >
                        <label for="codProducto">Código Producto</label>
                    </div>
                    <div class="mb-3" >
                        <input type="text" id="codProducto--1" name="codProducto--1" />
                    </div>
                    <div class="mb-3" >
                        <input type="text" id="codProducto--2" name="codProducto--2" />
                    </div>
                    <div class="mb-3" >
                        <input type="text" id="codProducto--3" name="codProducto--3" />
                    </div>
                </div>
                <div class="columnas">
                    <div class="mb-3" >
                        <label></label>
                    </div>
                    <div class="mb-3" >
                        <button id="btn__product--1">Consultar</button>
                    </div>
                    <div class="mb-3" >
                        <button id="btn__product--2">Consultar</button>
                    </div>
                    <div class="mb-3" >
                        <button id="btn__product--3">Consultar</button>
                    </div>
                </div> 
                <div class="columnas">
                    <div class="mb-3" >
                        <label for="nomProducto">Producto</label>
                    </div>
                    <div class="mb-3" >
                        <input type="text" id="nomProducto--1" name="nomProducto--1" disabled/>
                    </div>
                    <div class="mb-3" >
                        <input type="text" id="nomProducto--2" name="nomProducto--2" disabled/>
                    </div>
                    <div class="mb-3" >
                        <input type="text" id="nomProducto--3" name="nomProducto--3" disabled/>
                    </div>
                </div> 
                <div class="columnas">
                    <div class="mb-3" >
                        <label for="canProducto">Cantidad</label>
                    </div>
                    <div class="mb-3" >
                        <input type="number" id="canProducto--1" name="canProducto--1" />
                    </div>
                    <div class="mb-3" >
                        <input type="number" id="canProducto--2" name="canProducto--2" />
                    </div>
                    <div class="mb-3" >
                        <input type="number" id="canProducto--3" name="canProducto--3" />
                    </div>
                </div> 
                <div class="columnas">
                    <div class="mb-3" >
                        <label for="vlrProducto">Valor total</label>
                    </div>
                    <div class="mb-3" >
                        <input type="number" id="vlrProducto--1" name="vlrProducto--1" disabled/>
                    </div>
                    <div class="mb-3" >
                        <input type="number" id="vlrProducto--2" name="vlrProducto--2" disabled/>
                    </div>
                    <div class="mb-3" >
                        <input type="number" id="vlrProducto--3" name="vlrProducto--3" disabled/>
                    </div>
                </div>            
            </div>
            <div class="filaTotales">
                <label for="totalVenta">Total Venta</label><br />
                <input type="number" id="totalVenta" name="totalVenta" disabled/>      
            </div>
            <div class="filaTotales">
                <label for="totalIva">Total IVA</label><br />
                <input type="number" id="totalIva" name="totalIva" disabled/>     
            </div>
            <div class="filaTotales">
                <label for="total">Total con IVA</label><br />
                <input type="number" id="total" name="total" disabled/>     
            </div>
            <div>
                <button id="btn__confirmar">Confirmar</button>
            </div>
	    </div>
    </div>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Link de alertas independiente -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> <!-- Link de JQuery independiente -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script><!-- link de js Bootstrap -->
    <script src="./javascript/ventas.js"></script> <!-- Link de js independiente -->
</body>
</html>

