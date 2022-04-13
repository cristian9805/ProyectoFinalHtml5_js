function QuitarRefrescoDePantalla() {
  const form = document.getElementById("formConfig");
  console.log(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  }
  )
}
//QuitarRefrescoDePantalla();///aqui ejecuto una funcion al inicio

function MostrarInfoDelUsuEnForm(){
  var nombreUsuario = localStorage.getItem("NombreDelLogueado");
  document.getElementById("labelNomUsuario").textContent = nombreUsuario;
}
MostrarInfoDelUsuEnForm();///aqui ejecuto una funcion al inicio

function IrDashboard(){
  window.location.href= "/DashBoard/Dashboard.html";
}
function IrAgregarRide(){
  window.location.href= "/DashBoard/Viajes.html";
}
function IrConfiguraciones(){
  window.location.href= "/DashBoard/Configuracion.html";
}
function IrMenuPrincipal(){
  window.location.href= "/Cliente/Buscar_viaje.html";
}

function MostrarDatosUsuarioLogueado(){
  let objPersona = JSON.parse(localStorage.getItem("persona"));
  let cedulaDelLocalStorage = localStorage.getItem("cedulaDelLogueado"); 
  const form = document.getElementById("formConfig"); 
  
  //dotos de la persona que esta registrada para imprimir en configuraciones
  
  objPersona.forEach(per => {
    if(per.CedulaRegistroUsu == cedulaDelLocalStorage ){
      
      let primerApe = per.Apellido1;
      let segApe = per.Apellido2;
      let numCel = per.NumTelefono;
      let nombres = per.Nombres;
      let fechaNaci = per.dateFechaNaci;
      let cedulaCongig = per.CedulaRegistroUsu;
      let contrasennaConfig = per.Contrasenna1;

      document.getElementById("txtPrimerApellido").value = primerApe;
      document.getElementById("txtSegundoApeliido").value = segApe;
      document.getElementById("txtNumCel").value = numCel;
      document.getElementById("txtNombres").value = nombres;
      document.getElementById("txtFechaNaci").value = fechaNaci;
      document.getElementById("txtCedula").value = cedulaCongig;
      document.getElementById("txtContrasenna").value = contrasennaConfig;
    }
  });        
}
function RemplazarDatosUsuarioLogueado() {
  const form = document.getElementById("formConfig");
  console.log(form);

  //form.addEventListener("submit", function (event) {
  //event.preventDefault();

  let cedulaDelLocalStorage = localStorage.getItem("cedulaDelLogueado");

  var primerApe = document.getElementById("txtPrimerApellido").value;
  let segApe = document.getElementById("txtSegundoApeliido").value;
  let numCel = document.getElementById("txtNumCel").value;
  let nombres = document.getElementById("txtNombres").value;
  let fechaNaci = document.getElementById("txtFechaNaci").value;
  let cedulaCongig = document.getElementById("txtCedula").value;
  let contrasennaConfig = document.getElementById("txtContrasenna").value;

  let objPersonaNueva = JSON.parse(localStorage.getItem("persona"));
  let listaOriginal = JSON.stringify(localStorage.getItem("persona"));

  objPersonaNueva.forEach(per => {
    if (per.CedulaRegistroUsu === cedulaDelLocalStorage) {
      for (var n = 0; n < objPersonaNueva.length; n++) {
        per.Apellido1 = primerApe;
        //console.log("array Resultado: ", objPersonaNueva[n]);

        let arrayJson = JSON.stringify(objPersonaNueva);
        localStorage.setItem("persona", arrayJson);
      }
    }
  });

}


MostrarDatosUsuarioLogueado();///aqui ejecuto una funcion al inicio
