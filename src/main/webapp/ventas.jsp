<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ventas</title>
</head>
<body>
    <section>
        <div>
            <label for="Cedula">Cédula</label>
            <input type="text" id="Cedula" name="Cedula">
            <button id="btn__cedula">Consultar</button>
            <label for="cliente">Cliente</label>
            <input type="text" id="cliente" name="cliente">
            <label for="consecutivo">N° consecutivo</label>
            <input type="text" id="consecutivo" name="consecutivo">
        </div>
        <div>
            <label for="codProducto" style="margin: 0px 150px 0px 50px;">Código Producto</label> 
            <label for="nomProducto" style="margin-right: 130px;">Producto</label>
            <label for="canProducto" style="margin-right: 110px;">Cantidad</label>
            <label for="vlrProducto">Valor total</label><br>
            <input type="text" id="codProducto--1" name="codProducto--1">
            <button id="btn__product--1">Consultar</button> 
            <input type="text" id="nomProducto--1" name="nomProducto--1">
            <input type="text" id="canProducto--1" name="canProducto--1">
            <input type="text" id="vlrProducto--1" name="vlrProducto--1">
            <br>
            <input type="text" id="codProducto--2" name="codProducto--2">
            <button id="btn__product--1">Consultar</button> 
            <input type="text" id="nomProducto--2" name="nomProducto--2">
            <input type="text" id="canProducto--2" name="canProducto--2">
            <input type="text" id="vlrProducto--2" name="vlrProducto--2">
            <br>
            <input type="text" id="codProducto--3" name="codProducto--3">
            <button id="btn__product--1">Consultar</button> 
            <input type="text" id="nomProducto--3" name="nomProducto--3">
            <input type="text" id="canProducto--3" name="canProducto--3">
            <input type="text" id="vlrProducto--3" name="vlrProducto--3">
            <br>
            <label for="totalVenta">Total Venta</label><br>
            <input type="text" id="totalVenta" name="totalVenta">
            <br>
            <label for="totalIva">Total IVA</label><br>
            <input type="text" id="totalIva" name="totalIva">
            <br>
            <label for="total">Total con IVA</label><br>
            <input type="text" id="total" name="total">
            <br>
            <button id="btn__confirmar">Confirmar</button>
        </div>
    </section>
    <!-- Script de Bootstrap, SweetAlert, JQuery y js independiente. -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> <!-- Link de alertas independiente -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> <!-- Link de JQuery independiente -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script><!-- link de js Bootstrap -->
    <script src="./javascript/usuarios.js"></script> <!-- Link de js independiente -->
</body>
</html>