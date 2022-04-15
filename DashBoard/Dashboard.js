function QuitarRefrescoDePantalla() {
  const form = document.getElementById("formDashboard");
  console.log(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  })
}
function MostrarDatosEnLaTable(){
    let transaFormData = new FormData(form);
    let capturaDeTableRef = document.getElementById("jtableDashboard");
    let newTableRowRef = capturaDeTableRef.insertRow(-1);
    let newTableCellRef = newTableRowRef.insertCell(0);
}
MostrarDatosEnLaTable();
  /*form.addEventListener("submit",function(event){
    event.preventDefault();
    let transaFormData = new FormData(form);
    let objPersonaDatos = ConvertirDatosformDataOBJ(transaFormData)
    console.log(objPersonaDatos);
  })*/
QuitarRefrescoDePantalla()// aqui agregue un metodo que se ejecute al inicio

function MostrarInfoDelUsuEnForm(){
    var nombreUsuario = localStorage.getItem("NombreDelLogueado");
    document.getElementById("labelNomUsuario").textContent = nombreUsuario;
}
MostrarInfoDelUsuEnForm();// aqui agregue un metodo que se ejecute al inicio

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