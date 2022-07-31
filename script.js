//Funcion que me aplica el estilo a la opcion seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//funcion que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animaciÃ³n del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("SQL").classList.add("barra-progreso4");
        document.getElementById("C#").classList.add("barra-progreso5");
        document.getElementById("VB6").classList.add("barra-progreso6");
        document.getElementById("UML").classList.add("barra-progreso7");
        document.getElementById("Git").classList.add("barra-progreso8");
        document.getElementById("JAVA").classList.add("barra-progreso9");
    }
}
