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
function ObjViaje(){
    const form = document.getElementById("formViajes"); 
    let transaFormData = new FormData(form);
    let objViajeDatos = ConvertirDatosformDataOBJ(transaFormData)
    AlmacenarEnLocalStorage(objViajeDatos)
    form.reset();
  }
  function AlmacenarEnLocalStorage(objViajeDatos){
    // || esto significa ,que si esta vacio o null "||" entonces es un array vacio
    let datos = JSON.parse(localStorage.getItem("Ride")) || [];
    datos.push(objViajeDatos); 
    let arrayJson = JSON.stringify(datos); 
    localStorage.setItem("Ride",arrayJson);
    
    window.alert("Ride guardado exitosamente");
    
  }
  function ConvertirDatosformDataOBJ(transaFormData){

    let NumViaje = transaFormData.get("txtNumViaje");
    let LugarSalida = transaFormData.get("txtLugarSalida");
    let LugarDestino = transaFormData.get("txtLugarDestino");
    let MarcaAuto = transaFormData.get("txtMarcaAuto");
    let NumPlaca = transaFormData.get("txtNumPlaca");
    let CantPasajeros = transaFormData.get("SplitCantPasajeros");
    let cedulaCreador = localStorage.getItem("cedulaDelLogueado");
    return {
      "NumViaje": NumViaje, 
      "LugarSalida":LugarSalida ,
      "LugarDestino": LugarDestino,
      "MarcaAuto": MarcaAuto,
      "NumPlaca": NumPlaca, 
      "CantPasajeros": CantPasajeros,
      "CedulaDelCreador": cedulaCreador
      
    }
  }

