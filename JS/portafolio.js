let menuVisible = false;
//Funcion  que oculta o muestra el menu

function mostarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function  seleccionar(){
    //oculto el menu una vez  selecciono la opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
} 

// funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Javascript");
        habilidades[1].classList.add("htmlcss");
        
    }
}

//detesto el scrolling para aplicar la animacion  de la barra de habilidades

window.onscroll = function(){
    efectoHabilidades();
}