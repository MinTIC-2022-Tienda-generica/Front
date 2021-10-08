(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
      Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }  
          form.classList.add('was-validated')
        }, false)
      })
  })()


$.ajax({    /* http con js, función recibe como parametro un objeto de js*/
    url: "http://localhost:6666/usuarios",/* Servidor donde este en ese momento backend */
    type: "GET", /* Tipo de petición */
    success: function(data){
        console.log(data);
    },/* Función que se ejecuta cuando es completado con exito */
    error: /* Cuando la petición salga mal. */
})