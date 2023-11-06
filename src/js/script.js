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

// ----------------------------------------------------------------

function replaceImage() {
    const imageHero = document.querySelector('.img-hero');
    
    if (window.innerWidth < 992) {
        imageHero.src = './src/assets/img/image-hero-mobile.png'
    } else {
        return;
    }
}

window.addEventListener('load', replaceImage);
window.addEventListener('resize', replaceImage);

// ----------------------------------------------------------------

const mobileMenu = document.querySelector('.mobile-menu');
const mobileBoxMenu = document.querySelector('.box-menu');
const menu = document.querySelector('.menu');

function toggleMobileMenu() {

    const isMenuChecked = mobileMenu.checked;

    mobileBoxMenu.style.display = isMenuChecked ? 'flex' : 'none';

    const animateClass = 'animate__animated';
    const fadeInClass = 'animate__fadeIn';
    const slideInRightClass = 'animate__fadeInRight';

    if (isMenuChecked) {
        mobileBoxMenu.classList.add(animateClass, fadeInClass);
        menu.classList.add(animateClass, slideInRightClass);
    } else {
        mobileBoxMenu.classList.remove(animateClass, fadeInClass);
        menu.classList.remove(animateClass, slideInRightClass);
    }
}

mobileMenu.addEventListener('click', toggleMobileMenu);

// ----------------------------------------------------------------

const header = document.querySelector('.header');

function toggleHeaderVisibility() {
    header.style.display = window.scrollY > 80 ? 'none' : 'flex';
}

window.addEventListener('scroll', toggleHeaderVisibility);