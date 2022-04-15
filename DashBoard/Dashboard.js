function QuitarRefrescoDePantalla() {
  const form = document.getElementById("formDashboard");
  console.log(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  })
}
//QuitarRefrescoDePantalla()// aqui agregue un metodo que se ejecute al inicio
function MostrarDatosEnLaTable(){
  
  let objPersona = JSON.parse(localStorage.getItem("Ride"));
  const form = document.getElementById("formConfig"); 
  
  //dotos de la persona que esta registrada para imprimir en configuraciones
  
  objPersona.forEach(per => {
    if(per.CedulaRegistroUsu == cedulaDelLocalStorage ){// continuar aqui
  array.forEach(element => {
    
  });  
  
  
  const form = document.getElementById("formViajes");
    console.log(form);
    let transaFormData = new FormData(form);
    let capturaDeTableRef = document.getElementById("jtableDashboard");
    let newTableRowRef = capturaDeTableRef.insertRow(-1);
    let newTableCellRef = newTableRowRef.insertCell(0);
}
MostrarDatosEnLaTable();// aqui agregue un metodo que se ejecute al inicio

function ObtenerDatosDeLocalStorage(transaFormData){
  
}

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