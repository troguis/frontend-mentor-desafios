const shareimg = document.querySelector('.for__btn--link');
const selectDesktop = document.querySelector('.for__desktop');
const selectMobile = document.querySelector('.for__mobile');
const selectFooter = document.querySelector('.section__footer');

cargarEventListeners();

function cargarEventListeners(e) {
    shareimg.addEventListener('click', compartir)
    
}

function compartir(e) {
    
    if (e.target.classList.contains('btn--link2') || e.target.classList.contains('for__btn--link')) {
        console.log('click en el boton');
        
        /* selectDesktop.classList.add('none'); */
        
        if (selectMobile.classList.contains('none')) {
            selectMobile.classList.remove('none');
            
        } else{
            selectMobile.classList.add('none');
        }
        
    }

}


