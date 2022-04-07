function GuardarDatosRegistroUsu(){   
    //let cedulaEscrita = document.getElementById("txtCedulaRegistroUsu").value;             
    let persona = {
      Apellido1 : document.getElementById("txtApellido1").value,
      Apellido2 : document.getElementById("txtApellido2").value,
      NumCel : document.getElementById("txtNumTelefono").value,
      Nombres : document.getElementById("txtNombres").value,
      FechaNaci : document.getElementById("dateFechaNaci").value,
      CedulaRegistro : document.getElementById("txtCedulaRegistroUsu").value,
      Contrasenna1 : document.getElementById("txtContrasenna1").value,
      Contrasenna2 : document.getElementById("txtContrasenna2").value
    }       
    localStorage.setItem("persona",JSON.stringify (persona));
    FormularioRegistroUsu.reset();
    window.alert("Usted se ah registrdo exitosamente");
    window.location.href= "login.html";
  };