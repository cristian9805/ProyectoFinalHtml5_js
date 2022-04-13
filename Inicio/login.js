function ValidarDatosLogin(){
    const form = document.getElementById("FormularioLogin"); 
    let objPersona = JSON.parse(localStorage.getItem("persona"));
    
    //cedula y contraseña de la pantalla del login
    let cedulaLog = document.getElementById("txtCedula").value;
    let contrasennaLog = document.getElementById("txtContrasenna").value;


    objPersona.forEach(per => {
        if(per.CedulaRegistroUsu === cedulaLog && per.Contrasenna1 === contrasennaLog){           
                console.log("La cedula es del usuario: ", per.Nombres);
                alert("Bienvenido "+ per.Nombres);
                window.location.href= "/DashBoard/Dashboard.html";
                localStorage.setItem("NombreDelLogueado",per.Nombres);
                localStorage.setItem("cedulaDelLogueado",per.CedulaRegistroUsu);
        }else{ 
            form.reset();
        }
    });                   
    
    /*if(cedula == cedulaGuardada && contrasenna == contrasennaGuardada){
        alert("Hola "+nombre+" bienvenido");
        FormularioLogin.reset();
        window.location.href= "/Cliente/Buscar_viaje.html";
    }else{
        alert("Usuario no valido, Registrese para empezar"); 
        FormularioLogin.reset();      
    }*/
}
