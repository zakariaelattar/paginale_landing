(function($) {
    $(document).ready(function() {
        // -------------sticky------------
        $('.navigation-area').sticky({
            topSpacing: 0,
        });
        // -------------slicknav------------
        $('#main-menu').slicknav({
            label: '',
            prependTo: '.navigation-area .container',
            closeOnClick: true,
        });

        // -------------flexible area------------
        var e = document.getElementById("filt-monthly"),
            d = document.getElementById("filt-yearly"),
            t = document.getElementById("switcher"),
            m = document.getElementById("monthly"),
            y = document.getElementById("yearly");

        e.addEventListener("click", function() {
            t.checked = false;
            e.classList.add("toggler--is-active");
            d.classList.remove("toggler--is-active");
            m.classList.remove("hide");
            y.classList.add("hide");
        });

        d.addEventListener("click", function() {
            t.checked = true;
            d.classList.add("toggler--is-active");
            e.classList.remove("toggler--is-active");
            m.classList.add("hide");
            y.classList.remove("hide");
        });

        t.addEventListener("click", function() {
            d.classList.toggle("toggler--is-active");
            e.classList.toggle("toggler--is-active");
            m.classList.toggle("hide");
            y.classList.toggle("hide");
        });
        
        // -----------------owl-carousel---------
        $('.testimonial-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            margin: 0,
            nav: true,
            dots: true,
            autoplaySpeed: 3000,
            smartSpeed: 2000,
            Speed: 500,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    margin:20,
                },
                701: {
                    items: 2,
                    dots: false,
                },
                992: {
                    items: 3,
                }
            }
        });

    });

    /*---------------preloader----------------------*/
     setTimeout(function(){
        $('.loader-bg').fadeToggle();
    }, 1800);

}(jQuery));