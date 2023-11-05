const arrowFeature = document.querySelector('#arrowFeature');
const arrowCompany = document.querySelector('#arrowCompany');

function handleArrowClick(arrowId, dropId) {
    const arrow = document.querySelector(`#${arrowId}`);
    const drop = document.querySelector(`#${dropId}`);

    arrow.addEventListener('click', () => {
        if (arrow.checked) {
            drop.classList.add('drop-show', 'animate__fadeIn');
        } else {
            drop.classList.remove('drop-show', 'animate__fadeIn');
        }
    });
}

handleArrowClick('arrowFeature', 'dropFeature');
handleArrowClick('arrowCompany', 'dropCompany');