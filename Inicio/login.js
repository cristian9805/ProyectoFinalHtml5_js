function ValidarDatosLogin(){
    var LocalStorage = JSON.parse(localStorage.getItem("persona"));
    
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
        window.location.href= "/Cliente/Buscar_viaje.html";
    }else{
        alert("Usuario no valido, Registrese para empezar"); 
        FormularioLogin.reset();      
    }
}