var validacionRegistro;

function ObjPersona(){
  const form = document.getElementById("formularioRegistroUsu"); 
  let transaFormData = new FormData(form);
  let objPersonaDatos = ConvertirDatosformDataOBJ(transaFormData)
  if(objPersonaDatos === null || objPersonaDatos === undefined){

  }else{
    AlmacenarEnLocalStorage(objPersonaDatos)
    form.reset();
  }
}
function AlmacenarEnLocalStorage(objPersonaDatos){
  // || esto significa ,que si esta vacio o null "||" entonces es un array vacio
  let datos = JSON.parse(localStorage.getItem("persona")) || [];
  datos.push(objPersonaDatos); 
  let arrayJson = JSON.stringify(datos); 
  localStorage.setItem("persona",arrayJson);

  var myModal = new bootstrap.Modal(document.getElementById("myModalGuardarUsu"));//llamar al modal y pregunbtar si desea eliminar el ride
  myModal.show();
}

function ConvertirDatosformDataOBJ(transaFormData){
  var arrayPerson = JSON.parse(localStorage.getItem("persona"));
  
  var contadorContrasena_NO;
  var contadorContrasena_SI;
  
  var contadorCedula_SI;
  var contadorCedula_NO;


  var Apellido1 = transaFormData.get("txtApellido1");
  var Apellido2 = transaFormData.get("txtApellido2");
  var NumCel = transaFormData.get("txtNumTelefono");
  var Nombres = transaFormData.get("txtNombres");
  var FechaNaci = transaFormData.get("dateFechaNaci");
  var CedulaRegistro = transaFormData.get("txtCedulaRegistroUsu");
  var Contrasenna1 = transaFormData.get("txtContrasenna1");
  var Contrasenna2 = transaFormData.get("txtContrasenna2");
  
  if(arrayPerson === null || arrayPerson === undefined){
    var Apellido1 = transaFormData.get("txtApellido1");
    var Apellido2 = transaFormData.get("txtApellido2");
    var NumCel = transaFormData.get("txtNumTelefono");
    var Nombres = transaFormData.get("txtNombres");
    var FechaNaci = transaFormData.get("dateFechaNaci");
    var CedulaRegistro = transaFormData.get("txtCedulaRegistroUsu");
    var Contrasenna1 = transaFormData.get("txtContrasenna1");
    var Contrasenna2 = transaFormData.get("txtContrasenna2");

    return {
      "Apellido1":Apellido1, 
      "Apellido2": Apellido2, 
      "NumTelefono":NumCel ,
      "Nombres": Nombres,
      "dateFechaNaci": FechaNaci,
      "CedulaRegistroUsu": CedulaRegistro, 
      "Contrasenna1": Contrasenna1,
      "Contrasenna2": Contrasenna2
    }
  }else{
    var labelErrorContra = document.getElementById("labelContrase??aError");//Obtenber el label validado de las contrase??as
    var labelErrorContra2 = document.getElementById("labelContrase??aError2");//Obtenber el label validado de las contrase??as
    var labelCedulaError = document.getElementById("labelCedulaError");//Obtenber el label validado de las contrase??as  

    var Apellido1 = transaFormData.get("txtApellido1");
    var Apellido2 = transaFormData.get("txtApellido2");
    var NumCel = transaFormData.get("txtNumTelefono");
    var Nombres = transaFormData.get("txtNombres");
    var FechaNaci = transaFormData.get("dateFechaNaci");
    var CedulaRegistro = transaFormData.get("txtCedulaRegistroUsu");
    var Contrasenna1 = transaFormData.get("txtContrasenna1");
    var Contrasenna2 = transaFormData.get("txtContrasenna2");


    if(Contrasenna1 !== Contrasenna2){
      //alert("las contrase??as NO coinciden")
      contadorContrasena_NO = false;
      labelErrorContra.style.display = "inline"
      labelErrorContra.style.color = "red"
      labelErrorContra.style.fontSize = "15px"

      labelErrorContra2.style.display = "inline"
      labelErrorContra2.style.color = "red"
      labelErrorContra2.style.fontSize = "15px"
      contDeContraRepetida = 1; 

    }else{
      contadorContrasena_SI = true;
      //alert("las contrase??as SI coinciden")
    }
    arrayPerson.forEach(person => {
      if(CedulaRegistro === person.CedulaRegistroUsu ){
        console.log(person.CedulaRegistroUsu)
         //alert("pero hay una cedula igual");
         contadorCedula_SI = false;
          labelCedulaError.style.display = "inline"
          labelCedulaError.style.color = "red"
          labelCedulaError.style.fontSize = "15px"
          
       }else{
         //alert("no hay una cedulas iguales");
         contadorCedula_NO = true;
       }
    });
  
    if(contadorContrasena_NO === false && contadorCedula_NO === true 
      || contadorContrasena_SI === true && contadorCedula_SI === false 
      || contadorContrasena_NO === false && contadorCedula_SI === false){
  
      //alert("no se puede matricular este usuario");
    }else{
      //alert("si se puede matricular")
      return {
        "Apellido1":Apellido1, 
        "Apellido2": Apellido2, 
        "NumTelefono":NumCel ,
        "Nombres": Nombres,
        "dateFechaNaci": FechaNaci,
        "CedulaRegistroUsu": CedulaRegistro, 
        "Contrasenna1": Contrasenna1,
        "Contrasenna2": Contrasenna2
      }
    }
  }
}
function GuardarDatosRegistroUsu(){   
  ObjPersona();

    let datos = JSON.parse(localStorage.getItem("persona"));
    datos.push(persona); 
    let arrayJson = JSON.stringify(datos); 
    localStorage.setItem("persona",arrayJson);

    FormularioRegistroUsu.reset();
    window.alert("Usted se ah registrdo exitosamente");
    window.location.href= "login.html";
 
    return persona;
    
  };
function Continuar(){
  window.location.href= "/Inicio/login.html";
}
function CapturarEventoClickRegistrar(){
  var labelErrorContra = document.getElementById("labelContrase??aError");//Obtenber el label validado de las contrase??as
  var labelErrorContra2 = document.getElementById("labelContrase??aError2");//Obtenber el label validado de las contrase??as
  var labelCedulaError = document.getElementById("labelCedulaError");//Obtenber el label validado de las contrase??as  

  
  var botonRegistrar = document.getElementById("btnRegistrar");
  console.log(botonRegistrar);
  addEventListener("keydown",(event)=>{
    labelErrorContra2.style.display = "none";
    labelCedulaError.style.display = "none";
    labelErrorContra.style.display = "none";
    //alert("si entro evento")
  });
}
CapturarEventoClickRegistrar();
/*function ObtenerDaatosLocalStorage (){
  let exist = true;
  if(localStorage.getItem("persona")){
    let per = JSON.parse(localStorage.getItem("persona"));   
    console.log(per);
    exist = true
    console.log(exist);
  }else{
    console.log("No har datos registrados de personas")
    exist = false;
    console.log(exist);
  }
  return exist;
}*/

