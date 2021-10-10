<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
	<html lang="en">
		<head>
			<meta charset="utf-8"> <!-- Configuración formato de codificación de caracteres Unicode e ISO 10646 -->
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous"> <!-- Link estilos css Bootstrap -->
			<link rel="stylesheet" href="./estilos/usuarios.css"> <!-- Link estilos independientes -->
			<title>Clientes</title>
		</head>
		<body>
			<div class="container-fluid" >
				<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  					<div class="container">
    					<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      						<span class="navbar-toggler-icon"></span>
    					</button>
						<div class="title-tg me-auto" >
	          				<img width="50" src="https://millennialsstore.pt/wp-content/uploads/2021/02/php-login-and-authentication-the-definitive-guide.png" alt="Logo tienda genérica" class="d-inline-block align-text-top">
							<a class="navbar-brand" href="#">Tienda Genérica</a>
						</div>
						<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      						<div class="offcanvas-header">
        						<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Tienda Genérica</h5>
        						<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      						</div>
      						<div class="offcanvas-body">
								<ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
		                      		<li class="nav-item"><a class="nav-link" aria-current="page" href="usuarios.jsp">Usuarios</a></li>
		                      		<li class="nav-item"><a class="nav-link active" href="clientes.jsp">Clientes</a></li>
		                      		<li class="nav-item"><a class="nav-link" href="proveedores.jsp">Proveedores</a></li>
		                      		<li class="nav-item"><a class="nav-link" href="productos.jsp">Productos</a></li>
		                      		<li class="nav-item"><a class="nav-link" href="ventas.jsp">Ventas</a></li>
		                      		<li class="nav-item"><a class="nav-link" href="reportes.jsp">Reportes</a></li>	
        						</ul>
							</div>
    					</div>
  					</div>
				</nav>
					<img width="50" src="https://millennialsstore.pt/wp-content/uploads/2021/02/php-login-and-authentication-the-definitive-guide.png" alt="Logo tienda genérica" class="d-inline-block align-text-top">
					<a class="navbar-brand" href="#">Tienda Generica</a>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item"><a class="nav-link" aria-current="page" href="usuarios.jsp">Usuarios</a></li>
						<li class="nav-item"><a class="nav-link active" href="clientes.jsp">Clientes</a></li>
						<li class="nav-item"><a class="nav-link" href="proveedores.jsp">Proveedores</a></li>
						<li class="nav-item"><a class="nav-link" href="productos.jsp">Productos</a></li>
						<li class="nav-item"><a class="nav-link" href="ventas.jsp">Ventas</a></li>
						<li class="nav-item"><a class="nav-link" href="reportes.jsp">Reportes</a></li>
					</ul>
	        	</div>
			</div>
        <div class="container mt-3" >
			<div class="row">
			<h1>Clientes</h1>
	       		<div class="col-lg-5 col-12">
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
	       		<div class="col-lg-5 col-12">
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
					<div class="mt-3">
	            		<button type="submit" class="btn btn-primary" name="botonConsultar" id="botonConsultar">Consultar</button>
	            		<button type="submit" class="btn btn-primary" name="botonCrear" id="botonCrear">Crear</button>
	            		<button type="submit" class="btn btn-primary" name="botonActualizar" id="botonActualizar">Actualizar</button>
	            		<button type="submit" class="btn btn-primary" name="botonBorrar" id="botonBorrar">Borrar</button>
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