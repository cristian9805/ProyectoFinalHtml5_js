var label = document.getElementById("labelRefDatos");
label.style.display = 'none'


function ValidarDatosLogin(){
    var form = document.getElementById("FormularioLogin"); 
    var objPersona = JSON.parse(localStorage.getItem("persona"));

    
    //cedula y contraseña de la pantalla del login
    var cedulaLog = document.getElementById("txtCedula").value;
    var contrasennaLog = document.getElementById("txtContrasenna").value;
    

    if(objPersona === 0 ||objPersona === null ||objPersona === undefined ){
        window.alert("Datos Incorrectos, Registrese primero")
    }else{
        objPersona.forEach(per => {
            if(per.CedulaRegistroUsu === cedulaLog && per.Contrasenna1 === contrasennaLog){           
                console.log("La cedula es del usuario: ", per.Nombres);
                alert("Bienvenido "+ per.Nombres);
                localStorage.setItem("NombreDelLogueado",per.Nombres);
                localStorage.setItem("cedulaDelLogueado",per.CedulaRegistroUsu);
                window.location.href= "/DashBoard/Dashboard.html";
     
            }else{
                form.reset();
            }
        });
    }
}
