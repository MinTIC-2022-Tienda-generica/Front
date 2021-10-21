<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="estilos/index.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Tienda Genérica</title>
  </head>
<body>
    <div class="container">
        <header class="header">
            <img class="header__img" src="https://millennialsstore.pt/wp-content/uploads/2021/02/php-login-and-authentication-the-definitive-guide.png" alt="Logo PlatziVideo">
            <p>Tienda Genérica</p>
            <div class="header__menu">
                <div class="header__menu--profile">
                    <img src="https://img.icons8.com/ios/50/000000/user-male-circle.png"/>
                    <a href="" data-toggle="modal" data-target="#login" data-whatever="@mdo">Ingresar</a>
                </div>
            </div>
        </header>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
          <div class="card">
            <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque lectus, varius eget blandit et, sodales eu quam. 
                Cras convallis dapibus felis, a convallis purus facilisis ac. Sed faucibus fringilla diam. 
                Quisque nec magna sollicitudin, blandit diam eu, aliquam sem. Morbi consectetur nisl elit, vel scelerisque nibh feugiat id. 
                Aliquam sit amet tristique purus. Curabitur vitae faucibus quam. Aliquam sed ipsum non odio maximus laoreet.
                Vestibulum rhoncus eros quis orci fringilla, sit amet vestibulum eros porta. Aliquam dictum, nulla quis lobortis ultricies,
                massa purus vestibulum ipsum, eu maximus nulla felis in dui. Etiam molestie aliquet eros, et egestas turpis posuere nec. 
                Ut pretium ligula ac turpis volutpat elementum. Pellentesque a molestie sem. Praesent sodales elit tortor, lacinia commodo 
                tellus iaculis a. Aliquam ac interdum neque. Sed elementum consectetur dui et fermentum. Aliquam erat volutpat. Mauris risus dolor, 
                interdum eget nisi eu, pharetra gravida velit. Curabitur sem orci, aliquet at ullamcorper id, dignissim eget metus. 
                Cras cursus eros lectus, vel finibus urna porttitor eu. Donec a elit mi. Praesent aliquet dolor sit amet euismod malesuada. 
                Sed lectus nisi, rutrum interdum felis eu, gravida elementum sapien. Vestibulum iaculis imperdiet libero vel pharetra.
                Cras cursus eros lectus, vel finibus urna porttitor eu. Donec a elit mi. Praesent aliquet dolor sit amet euismod malesuada. 
                Sed lectus nisi, rutrum interdum felis eu, gravida elementum sapien. Vestibulum iaculis imperdiet libero vel pharetra.
            </div>
          </div>
          <footer class="footer">
            <a href="#">Términos de uso</a>
            <a href="#">Declaración de privacidad</a>
            <a href="#">Centro de ayuda</a>
        </footer>

    </div>
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Bienvenidos a la tienda genérica</h5>
      </div>


      <div class="modal-body">
        <h1>Iniciar Sesión</h1>
	    <div class="mb-3" >
            <div>
                <img src="https://img.icons8.com/ios/20/000000/user--v1.png"/>
                <label for="InputUsuario" class="form-label">Usuario</label>
            </div>
	        <input type="text" class="form-control" id="InputUsuario" name="InputUsuario" aria-describedby="UsuarioAyuda" required>
	    </div>
	    <div class="mb-3">
            <div>
                <img src="https://img.icons8.com/ios/20/000000/password--v1.png"/>
                <label for="InputContrasena" class="form-label">Contraseña</label>
            </div>
	        <input type="password" class="form-control" id="Inputcontrasena" name="Inputcontrasena" required>
	    </div>
	    
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" name="botonIngresar" id="botonIngresar">Ingresar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        
      </div>
    </div>
  </div>
</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="./javascript/index.js"></script>
   	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Link de alertas independiente -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>