function MostrarInfoDelUsuEnForm(){
    var LocalStorage = JSON.parse(localStorage.getItem("persona"));
    var NombreGuardado = LocalStorage.Nombres;
    document.getElementById("labelNomUsuario").textContent = NombreGuardado;
}
MostrarInfoDelUsuEnForm();

