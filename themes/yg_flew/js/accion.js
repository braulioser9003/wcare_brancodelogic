(function ($) {
    $(".seleccionar-buscar").click(function () {
        $("#navegacion").fadeOut("slow");
        $("#buscar").fadeIn("slow");
        $(".seleccionar-buscar").addClass("hidden");
        $(".seleccionar-menu").removeClass("hidden");
        $("#logo").addClass("ocultar-logo");
    });

    $(".seleccionar-menu").click(function () {
        $("#buscar").fadeOut("slow");
        $("#navegacion").fadeIn("slow");
        $(".seleccionar-menu").addClass("hidden");
        $(".seleccionar-buscar").removeClass("hidden");
        $("#logo").removeClass("ocultar-logo");
    });
})(jQuery, Drupal);


var slideIndex = 0;

carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 15000); // Change image every 2 seconds
}