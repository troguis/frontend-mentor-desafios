
const contenedor = document.querySelector('.faq__content');

cargaEventos();
function cargaEventos(){
    contenedor.addEventListener('toggle', removeHover, true);
    
}

function removeHover(e){ 
    /* console.log(e.target.open === true); */
    if (e.target.open === true) {
        
        console.log(e.target.children[0].classList); 
    } else{
        e.target.classList.add('hover')
    }
}


/* function muestraOcultaContenedor(e) {
    if (e.target.classList.contains('faq__item--span')) {
        const despliegue = e.target.parentElement.nextElementSibling
        console.log(despliegue);
        
        if (despliegue.classList.contains('oculta')) {
            despliegue.classList.remove('oculta')
        } else{
            despliegue.classList.add('oculta')
        }
    }
} */




