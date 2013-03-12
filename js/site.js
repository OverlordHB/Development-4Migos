//Fallback for non-SVG capable browsers

if (!Modernizr.svg) {
    $("#logo img").attr("src", "img/logo.png");
}