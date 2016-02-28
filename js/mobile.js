(function(exports) {
    var fullpage = new FullPage({
        el: '.sliders'
    });

    $('.arrow').addEventListener('touchstart', function(e) {
        fullpage.slideTo('+1');
    }, false);

    $('.music-off').addEventListener('touchstart', function(e) {
        var audio = $('#audio');
        var gif = $('.music-gif');

        if (audio.paused) {
            audio.play();
            this.classList.add('rotate');
            gif.style.display = 'block';
        }
        else {
            audio.pause();
            this.classList.remove('rotate');
            gif.style.display = 'none';
        }
    }, false);

    function $(selector) {
        return document.querySelector(selector);
    }
})(window);