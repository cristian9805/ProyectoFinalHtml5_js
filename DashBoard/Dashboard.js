function MostrarInfoDelUsuEnForm(){
  var nombreUsuario = localStorage.getItem("NombreDelLogueado");
  document.getElementById("labelNomUsuario").textContent = nombreUsuario;
}
MostrarInfoDelUsuEnForm();// aqui agregue un metodo que se ejecute al inicio


function QuitarRefrescoDePantalla() {
  const form = document.getElementById("formDashboard");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  })
}
QuitarRefrescoDePantalla()// aqui agregue un metodo que se ejecute al inicio


function AlmacenarRidesDelUsuario(arrayRidesDatos){
  // || esto significa ,que si esta vacio o null "||" entonces es un array vacio
  let datos = JSON.parse(localStorage.getItem("ridessona")) || [];
  datos.push(arrayRidesDatos); 
  let arrayJson = JSON.stringify(datos); 
  localStorage.setItem("ridessona",arrayJson);
  
  window.alert("Usted se ah registrdo exitosamente");
  window.location.href= "/Inicio/login.html";
  
}

function GuardarYMostrarRidesDelUsuEnLocalStorage(){
  let arrayRides = JSON.parse(localStorage.getItem("Ride"));
  let cedulaLogueado= localStorage.getItem("cedulaDelLogueado");
  let arrayRidesUsuarioLogueado = [];

  const tableDashBoard = document.getElementById("jtableDashboard");

  //datos de la ridessona que esta registrada para imprimir en configuraciones
 arrayRides.forEach(ride => {
    if(ride.CedulaDelCreador === cedulaLogueado ){
      arrayRidesUsuarioLogueado.push(ride);
      let idDeLaTableDelDashBoard = document.getElementById("jtableDashboard");
      
      let newRoW = idDeLaTableDelDashBoard.insertRow(-1); 
      
      let newCell = newRoW.insertCell(0); 
      newCell.textContent = ride["NumViaje"];

      newCell = newRoW.insertCell(1);
      newCell.textContent = ride["LugarSalida"];

      newCell = newRoW.insertCell(2);
      newCell.textContent = ride["LugarDestino"];

      /*newCell = newRoW.insertCell(3); //inserta la nueva celda en la pocision insertada en este caso en la pocicion 3
      newCell.innerHTML = '<td><input class="btnEnlaces" type="button" name="btnEditar" id="btnEditar" value="Editar" onclick=""><input class="btnEliminar" type="button" name="btnEliminar" id="btnEliminar" value="Delete" onclick="ValidarDatosLogin()"></td>';  */

      //otro metodo diferente para agregar un boton en una celda
      let newCellButtons = newRoW.insertCell(3); //inserta la nueva celda en la pocision insertada en este caso en la pocicion 3
      
      let btnEliminar = document.createElement("button"); //crea el elemento del boton en la celda
      let btnEditar = document.createElement("button");
      
      btnEliminar.textContent = "Eliminar"// agrega el texto al boton
      btnEditar.textContent = "Editar"// agrega el texto al boton
      
      newCellButtons.appendChild(btnEliminar); //agrega los botones a la celda
      newCellButtons.appendChild(btnEditar); //agrega los botones a la celda
          
        //estos eventos extraen el numero de vieje para usuarlo para extraer los datos de ese mismo viaje
        btnEliminar.addEventListener("click", (event)=>{
          let obj = event.target.parentNode.parentNode
          var numViajeRef = obj.getElementsByTagName("td")[0].textContent;
          localStorage.setItem("NumDeViajeSeleccionadoEnTabla",numViajeRef);

          let numViajeDeLocalStorage = localStorage.getItem("NumDeViajeSeleccionadoEnTabla");
          let arrayRides = JSON.parse(localStorage.getItem("Ride"));        
          //Obtiene el index Del Array
          let indexDelArray = arrayRides.findIndex(ride => ride.NumViaje === numViajeDeLocalStorage);
          arrayRides.splice(indexDelArray,1)// el ,1 significa que solo elimine un elemento
          //guardar el nuevo array para guardarlo en el local storage
          let newArray = JSON.stringify(arrayRides); // lo converto a string para poder remplazarlo por el otro
          localStorage.setItem("Ride",newArray); // aqui lo remplazo      
          location.reload("/DashBoard/Dashboard.html");
        });
      
        btnEditar.addEventListener("click", (event)=>{
          let obj = event.target.parentNode.parentNode
          var numViajeRef = obj.getElementsByTagName("td")[0].textContent;
          localStorage.setItem("NumDeViajeSeleccionadoEnTabla",numViajeRef);
          window.location.href = "/DashBoard/Viajes.html";
        });
  } 
      
});
  
  let arrayString = JSON.stringify(arrayRidesUsuarioLogueado);// convierto de array que es originalmente a string
  localStorage.setItem("RidesUsuario",arrayString); //guardo en string el array
  //console.log(arrayString);

  /*console.log(localStorage.getItem("RidesUsuario")) //lo saca originalmente en string
  console.log(JSON.parse(localStorage.getItem("RidesUsuario")))// lo converite a objeto*/
  
}
GuardarYMostrarRidesDelUsuEnLocalStorage();// aqui agregue un metodo que se ejecute al inicio

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
  localStorage.removeItem("NumDeViajeSeleccionadoEnTabla");
}
function IrAgregarRide(){
  window.location.href= "/DashBoard/Viajes.html";
  localStorage.removeItem("NumDeViajeSeleccionadoEnTabla");
}
function IrConfiguraciones(){
  window.location.href= "/DashBoard/Configuracion.html";
}
function IrMenuPrincipal(){
  MensajeParaCerrarseccionUsu();
}