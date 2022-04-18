function QuitarRefrescoDePantalla() {
  const form = document.getElementById("formViajes");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  })
}
function MostrarInfoDelUsuEnForm(){
    var nombreUsuario = localStorage.getItem("NombreDelLogueado");
    document.getElementById("labelNomUsuario").textContent = nombreUsuario;
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
function CargarDatosDeLosRides(){
    const formViajes = document.getElementById("formViajes");
    let arrayRides = JSON.parse(localStorage.getItem("Ride"));
    let numViajeRef = localStorage.getItem("NumDeViajeSeleccionadoEnTabla");
    
    let numViajeDeTxt = document.getElementById("txtNumViaje").value;
    console.log(numViajeRef);
    //datos del Viaje que el usuario seleccionado
    console.log(arrayRides.length);
    try { 
        //document.getElementById("btnGuardarCambios").style.visibility = "hidden";
        //document.getElementById("btnEditarCambios").style.visibility = "visible";        
        arrayRides.forEach(rides => {
          if(rides.NumViaje == numViajeRef ){
            
            let numViaje = rides.NumViaje;
            let salida= rides.LugarSalida;
            let lugarDestino = rides.LugarDestino;
            let marca = rides.MarcaAuto;
            let nunPlaca = rides.NumPlaca;
            let cantPasajeros = rides.CantPasajeros;
            
      
            document.getElementById("txtNumViaje").value = numViaje;
            document.getElementById("txtLugarSalida").value = salida;
            document.getElementById("txtLugarDestino").value = lugarDestino;
            document.getElementById("txtMarcaAuto").value = marca;
            document.getElementById("txtNumPlaca").value = nunPlaca;
            document.getElementById("SplitCantPasajeros").value = cantPasajeros;
          
          }
        }); 
      
    } catch (err) {
      //alert("entro al error");
    }
    
}
function EditarDatosDelViajeSeleccionado(){
  const form = document.getElementById("formViajes");
  console.log(form);
  var numViajeRef = document.getElementById("txtNumViaje").value;
  var salidaRef = document.getElementById("txtLugarSalida").value;
  var lugarDestinoRef = document.getElementById("txtLugarDestino").value;
  var marcaRef = document.getElementById("txtMarcaAuto").value;
  var nunPlacaRef = document.getElementById("txtNumPlaca").value;
  var cantPasajerosRef = document.getElementById("SplitCantPasajeros").value;
  
  let arrayRides = JSON.parse(localStorage.getItem("Ride"));
  console.log(arrayRides);

  let numViajeLocalStorage = localStorage.getItem("NumDeViajeSeleccionadoEnTabla");
  
  try {

    arrayRides.forEach(editarRide =>{
      if(editarRide.NumViaje === numViajeLocalStorage){
        for (var n = 0; n < arrayRides.length; n++) {
          editarRide.NumViaje = numViajeRef;
          editarRide.LugarSalida = salidaRef;
          editarRide.LugarDestino = lugarDestinoRef;
          editarRide.MarcaAuto = marcaRef;
          editarRide.NumPlaca = nunPlacaRef;
          editarRide.CantPasajeros =cantPasajerosRef;
  
          let arrayJson = JSON.stringify(arrayRides);
          localStorage.setItem("Ride", arrayJson);            
        }
      }else{
      }
    });
  
  } catch (err) {
  
  }
}

function MensajeParaCerrarseccionUsu(){
  var respuesta = window.confirm("Esta sesión será finalizada: Deseas continuar"); 
  if(respuesta === true){
    localStorage.removeItem("cedulaDelLogueado");
    localStorage.removeItem("NombreDelLogueado");
    window.location.href= "/Cliente/Buscar_viaje.html";
  }else{
    window.location.reload();
  }
}

function IrDashboard(){
  window.location.href= "/DashBoard/Dashboard.html";
  localStorage.removeItem("ViajeSeleccionado");
  localStorage.removeItem("NumDeViajeSeleccionadoEnTabla");
}
function IrAgregarRide(){
  window.location.href= "/DashBoard/Viajes.html";
}
function IrConfiguraciones(){
  window.location.href= "/DashBoard/Configuracion.html";
}
function IrMenuPrincipal(){
  MensajeParaCerrarseccionUsu();
}
//***************************************** LLAMADO DE LOS METODOS**************************
  CargarDatosDeLosRides();
  QuitarRefrescoDePantalla()
  MostrarInfoDelUsuEnForm();
  EditarDatosDelViajeSeleccionado();
  //***************************************** LLAMADO DE LOS METODOS**************************
  

