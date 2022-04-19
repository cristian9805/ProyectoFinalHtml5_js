function MostrarDatosDeLosRides(){    
    try{
        let arrayRides = JSON.parse(localStorage.getItem("Ride"));
        arrayRides.forEach(rides =>{
        let idDeLaTablaPrincipal = document.getElementById("jtablePrincipal");
      
        let newRoW = idDeLaTablaPrincipal.insertRow(-1); 
        
        let newCell = newRoW.insertCell(0); 
        newCell.textContent = rides["NumViaje"];

        newCell = newRoW.insertCell(1);
        newCell.textContent = rides["LugarSalida"];

        newCell = newRoW.insertCell(2);
        newCell.textContent = rides["LugarDestino"];

        let newCellButtons = newRoW.insertCell(3); //inserta la nueva celda en la pocision insertada en este caso en la pocicion 3
        let btnEliminar = document.createElement("button"); //crea el elemento del boton en la celda
        let btn = btnEliminar.textContent = "Solicitar"// agrega el texto al boton
        newCellButtons.appendChild(btnEliminar);
               
        btnEliminar.setAttribute("id","btnEliminar");
        
    });
    }catch(error){

    }
}
function CambiarEstiloDeBotonReservarTable(){
    document.getElementById("btnEliminar").style.fontSize = "25px";
    document.getElementById("btnEliminar").style.padding = "9px";
    document.getElementById("btnEliminar").style.letterSpacing = "1px";
    document.getElementById("btnEliminar").style.transition = "0.1s";
    document.getElementById("btnEliminar").style.border = "none";
    document.getElementById("btnEliminar").style.borderRadius = "10px";

}
MostrarDatosDeLosRides();
