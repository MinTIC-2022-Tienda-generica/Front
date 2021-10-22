<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="./estilos/clientes.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Clientes</title>
      </head>
  <body>
    <div class="container">
        <header class="header">
            <nav class="header__menu">
                <ul>
                    <li><a href="usuarios.jsp">Usuarios</a></li>
                    <li><a href="clientes.jsp"  class="active">Clientes</a></li>
                    <li><a href="proveedores.jsp">Proveedores</a></li>
                    <li><a href="productos.jsp">Productos</a></li>
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
            <h3>Bienvenido, usted tiene permiso de administrador.</h3>
			<div class="row">
	       		<div class="col-lg-6 col-12">
					<div class="mb-2" >
						<label for="InputCedula" class="form-label">Cédula</label>
						<input type="text" class="form-control" id="InputCedula" name="InputCedula">
					</div>
					<div class="mb-2">
						<label for="InputNombres" class="form-label">Nombre completo</label>
						<input type="text" class="form-control" id="InputNombres" name="InputNombres">
	               	</div>
					<div class="mb-2">
						<label for="InputDireccion" class="form-label">Dirección</label>
						<input type="text" class="form-control" id="InputDireccion" name="InputDireccion">
	               	</div>
	            </div>
	       		<div class="col-lg-6 col-12">
					<div class="mb-2" >
						<label for="InputTelefono" class="form-label">Teléfono</label>
						<input type="text" class="form-control" id="InputTelefono" name="InputTelefono">
					</div>
					<div class="mb-2">
						<label for="InputCorreo" class="form-label">Correo electrónico</label>
						<input type="text" class="form-control" id="InputCorreo" name="InputCorreo">
	               	</div>
	            </div>
	            <div class="col-lg-12 col-12">
					<div class="mt-3 botones">
	            		<button type="submit" class="btn btn-primary" name="botonConsultar" id="botonConsultar">Consultar</button>
	            		<button type="submit" class="btn btn-primary" name="botonCrear" id="botonCrear">Crear</button>
	            		<button type="submit" class="btn btn-primary" name="botonActualizar" id="botonActualizar">Actualizar</button>
	            		<button type="submit" class="btn btn-primary" name="botonBorrar" id="botonBorrar">Borrar</button>
	               	</div>
	            </div>            
	        </div>
	    </div>
    </div>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Link de alertas independiente -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> <!-- Link de JQuery independiente -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script><!-- link de js Bootstrap -->
	<script src="./javascript/clientes.js"></script> <!-- Link de js independiente -->
</body>
</html>