var label = document.getElementById("labelRefDatos");
label.style.display = 'none'



function ValidarDatosLogin(){
    var form = document.getElementById("FormularioLogin"); 
    var objPersona = JSON.parse(localStorage.getItem("persona"));

    var cont = 0;

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
                cont = 1;
            }else{
                form.reset();
            }
        });
        if(cont === 1){
            //no necitito validacion , ta imprimo el nombre arriba con un alert
        }else{
            // o sea si no encontro ningun usuario , haga esto
            label.style.display = 'inline';
            label.style.color = 'red';
            label.style.fontWeight = 'bold';
        }
    }
}
function CapturarEventoKey(){
    addEventListener("keydown",(event)=>{
        label.style.display = 'none';
        label.style.display = 'none';
    });
}
CapturarEventoKey();
