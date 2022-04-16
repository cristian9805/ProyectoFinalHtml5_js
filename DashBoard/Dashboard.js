function MostrarInfoDelUsuEnForm(){
  var nombreUsuario = localStorage.getItem("NombreDelLogueado");
  document.getElementById("labelNomUsuario").textContent = nombreUsuario;
}
MostrarInfoDelUsuEnForm();// aqui agregue un metodo que se ejecute al inicio



function QuitarRefrescoDePantalla() {
  const form = document.getElementById("formDashboard");
  console.log(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  })
}
//QuitarRefrescoDePantalla()// aqui agregue un metodo que se ejecute al inicio


function AlmacenarRidesDelUsuario(objPersonaDatos){
  // || esto significa ,que si esta vacio o null "||" entonces es un array vacio
  let datos = JSON.parse(localStorage.getItem("persona")) || [];
  datos.push(objPersonaDatos); 
  let arrayJson = JSON.stringify(datos); 
  localStorage.setItem("persona",arrayJson);
  
  window.alert("Usted se ah registrdo exitosamente");
  window.location.href= "/Inicio/login.html";
  
}

function GuardarRidesDelUsuEnLocalStorage(){
  let arrayRides = JSON.parse(localStorage.getItem("Ride"));
  let cedulaLogueado= localStorage.getItem("cedulaDelLogueado");
  let arrayRidesUsuarioLogueado = [];
  //datos de la persona que esta registrada para imprimir en configuraciones
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

      newCell = newRoW.insertCell(3);
      //newCell.textContent = ride[];  // segir desde aqui, tenemos que agregar
                                       //los botones a la celda de la tabla del dashBoard 

    }
  });
  let arrayString = JSON.stringify(arrayRidesUsuarioLogueado);// convierto de array que es originalmente a string
  localStorage.setItem("RidesUsuario",arrayString); //guardo en string el array
  //console.log(arrayString);

  /*console.log(localStorage.getItem("RidesUsuario")) //lo saca originalmente en string
  console.log(JSON.parse(localStorage.getItem("RidesUsuario")))// lo converite a objeto*/
  

}
GuardarRidesDelUsuEnLocalStorage();// aqui agregue un metodo que se ejecute al inicio














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