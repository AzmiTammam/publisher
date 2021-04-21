import './scss/style.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';




$(window).scroll(function () {
    if ($(this).scrollTop() >= 580) {
        $("#navBar").addClass("noTransparrent");
    }
    else {
        $("#navBar").removeClass("noTransparrent");
    }
});

$(document).ready(function () {
    $("a.scroll").on('click', function (event) {
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function () { });
    });
});