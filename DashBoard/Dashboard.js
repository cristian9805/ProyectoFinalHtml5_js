function MostrarInfoDelUsuEnForm(){
    var nombreUsuario = localStorage.getItem("NombreDelLogueado");
    document.getElementById("labelNomUsuario").textContent = nombreUsuario;
}
MostrarInfoDelUsuEnForm();

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