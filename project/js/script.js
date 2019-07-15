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
});