
//Eventos
document.addEventListener('DOMContentLoaded', function (){

    const puntajeMarcado = {
        puntaje: ''
    }

    // Seleccionamos las variables los elementos de la interfaz
    const btnSubmit = document.querySelector('#btnSubmit');
    const optionList = document.querySelector('#optionList');
    const containerWarning = document.querySelector('.container-warning');
    const card = document.querySelector('#card');
    const cardThanks = document.querySelector('#card-thanks');
    const cardThanksRating = document.querySelector('#card-thanks-rating');

    // card.addEventListener('click', e =>console.log(e.target));

    btnSubmit.addEventListener('click', (e)=>{
        e.preventDefault();
        // console.log('cliqui');
        const checkRating = document.querySelectorAll('.marked');
        const createParagraph = document.createElement('P');
        createParagraph.innerHTML = `
        <p class = "warning">Select a value between 1 and 5.</p>
        `
        // Esto buscará todas las clases marked en el documente, si encuentra alguna
        // la devolverá en un NODE que es como un array y
        // si no encuentra ni una clase, sería = 0 entonces se agrega el createParagraph
        if (checkRating.length === 0) {
            deleteWarning();
            containerWarning.appendChild(createParagraph);
            return;
        } 

        activateThanks();
    })

    optionList.addEventListener('click', (e)=>{

        // deleteMarked();
        // const isMarked = e.target.classList.contains('marked');
        const ratingSelected = e.target.classList.contains('option-rating');
        
        if (ratingSelected) {
            deleteMarked();
            e.target.classList.add('marked')
            deleteWarning();
            puntajeMarcado.puntaje = e.target.getAttribute('data-id');
            // console.log(puntajeMarcado.puntaje);
            // console.log(e.target);
        }
        
    })

    // Funciones
    function deleteMarked() {
        const ratingButtons = document.querySelectorAll('.option-rating');

        ratingButtons.forEach( elementBtn => {
            if (elementBtn.classList.contains) {
                elementBtn.classList.remove('marked');
            }
        });
    }

    function deleteWarning() {
        while (containerWarning.firstChild) {
            containerWarning.removeChild(containerWarning.firstChild)
        }
    }

    function activateThanks() {
        card.classList.add('hidden')
        
        const paragraph = document.createElement('P');
        paragraph.innerHTML = `
        You selected ${puntajeMarcado.puntaje} out of 5
        `
        cardThanksRating.appendChild(paragraph);
        cardThanks.classList.remove('hidden');
    }

});
