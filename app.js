let menuVsisible = false;
//funcion que oculta/muestra el menu
function mostrarOcultarMenu(){
    if(menuVsisible){
        document.getElementById("nav").classList ="";
        menuVsisible = false
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVsisible = true
    }

    
}
function seleccionar(){
    //ocultar menu una vez seleccionada una opcion
    document.getElementById("nav").classList="";
    menuVsisible = false;
}