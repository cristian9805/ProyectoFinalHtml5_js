function ObtenerDatosLogin(){
    let LocalStorage = JSON.parse(localStorage.getItem("persona"));
    
    //cedula y contraseña de la pantalla del login
    let cedula = document.getElementById("txtId").value;
    let contrasenna = document.getElementById("txtContrasenna").value;

    //cedula y contraseña del local starage
    let cedulaGuardada= LocalStorage.CedulaRegistro;
    let contrasennaGuardada = LocalStorage.Contrasenna1;
    let nombre = LocalStorage.Nombres;
    
    if(cedula == cedulaGuardada && contrasenna == contrasennaGuardada){
        alert("Hola "+nombre+" bienvenido");
        FormularioLogin.reset();
    }else{
        alert("Usuario no valido"); 
        FormularioLogin.reset();      
    }
    
    console.log(cedulaGuardada);
    console.log(contrasennaGuardada);
}