// button

const botao = document.getElementById('mode-selector');
botao.addEventListener('click', changeMode);

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses() {
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

// Change text

function changeText() {
    if(botao.classList.contains(darkModeClass)) {
        botao.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode ON';
        return;
    }

    botao.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON';
}

// dark mode

const darkModeClass = 'dark-mode'

// h1

const h1 = document.getElementById('page-title');

// body

const body = document.getElementsByTagName('body')[0];

// footer

const footer = document.getElementsByTagName('footer')[0];

