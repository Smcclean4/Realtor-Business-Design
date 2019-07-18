$(document).ready(function(){
    $("#top-btn").on('click', (event) => {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = $('#portrait-image');

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, () => {
                window.location.hash = hash;
            })
        }
    })

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const backGround = document.querySelector('#background-image');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        
        main.style.display = 'block';
        
        setTimeout(() => {
            main.style.opacity = 1;
            backGround.style.display = 'block';
            backGround.style.opacity = 0.2;
        }, 50);
    
    }, 4000);
}

init();

});

