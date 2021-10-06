<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8"> <!-- Configuración formato de codificación de caracteres Unicode e ISO 10646 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous"> <!-- Link estilos css Bootstrap -->
        <link rel="stylesheet" href="estilos/index.css"> <!-- Link estilos independientes -->
        <title>Login</title>
      </head>
      <body>
        
    <div class="container ctn">
        <div class="row">
            <div class="col-lg-6 col-12" style="height: auto;">
                <img src="https://millennialsstore.pt/wp-content/uploads/2021/02/php-login-and-authentication-the-definitive-guide.png" class="img-fluid" alt="Logo tienda genérica">
    
            </div>
            <div class="col-lg-5 col-12">
                <form class="needs-validation" id="formulario" novalidate>
                    <h1>Bienvenidos <br> a la tienda genérica</h1>
                    <div class="mb-3" >
                        <label for="InputUsuario" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="usuario" name="usuario" aria-describedby="UsuarioAyuda" required>
                        <div class="invalid-feedback">
                            Por favor ingrese un usuario.
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <label for="InputContrasena" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="contrasena" name="contrasena" required>
                        <div class="invalid-feedback">
                            Por favor ingrese una contraseña.
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" name="botonIngresar" id="botonIngresar">Ingresar</button>
    
                </form>
            </div>
        </div>
    </div>
        <script src="javascript/index.js"></script> <!-- Link de js independiente -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script><!-- link de js Bootstrap -->
      </body>
    </html>