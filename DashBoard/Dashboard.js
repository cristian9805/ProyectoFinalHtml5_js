function MostrarInfoDelUsuEnForm(){
    var nombreUsuario = localStorage.getItem("NombreDelLogueado");
    document.getElementById("labelNomUsuario").textContent = nombreUsuario;
}
MostrarInfoDelUsuEnForm();