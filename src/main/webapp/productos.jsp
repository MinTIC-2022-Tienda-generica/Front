<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./estilos/productos.css">
        <title>Productos</title>
      </head>
  <body>
    <div class="container">
        <header class="header">
            <nav class="header__menu">
                <ul>
                    <li><a href="usuarios.jsp">Usuarios</a></li>
                    <li><a href="clientes.jsp">Clientes</a></li>
                    <li><a href="proveedores.jsp">Proveedores</a></li>
                    <li><a href="productos.jsp" class="active">Productos</a></li>
                    <li><a href="ventas.jsp">Ventas</a></li>
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
			<div class="row centro">
	       		<div class="col-lg-8 col-6 archivo carga">
					<div class="mb-2" >
						<label for="fileSelector" class="form-label">Nombre del archivo</label>
						<input type="file" class="form-control" id="fileSelector" multiple="false"/>
					</div>
	            </div> 
                <div class="mb-2 botones">
                    <button type="submit" class="btn btn-primary" id="botonCargar" name="botonCargar">Cargar</button>
                </div>         
	        </div>
	        <table class="table">
				<thead>
					<tr>
						<th scope="col">Código</th>
						<th scope="col">Nombre</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Valor sin IVA</th>
						<th scope="col">IVA</th>
						<th scope="col">Total</th>
					</tr>
				</thead>
				<tbody id="table-body"></tbody>
			</table>
	    </div>
    </div>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Link de alertas independiente -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> <!-- Link de JQuery independiente -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script><!-- link de js Bootstrap -->
    <script src="./javascript/productos.js"></script> <!-- Link de js independiente -->
</body>
</html>