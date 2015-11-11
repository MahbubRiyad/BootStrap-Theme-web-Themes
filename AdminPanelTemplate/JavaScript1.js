/// <reference path="Scripts/jquery-1.8.2.min.js" />


$(document).ready(function () {
    $('a.mobile').click(function () {
        $('.sidebar').toggle('fast');
    });

    window.onresize = function (event) {
        if ($(window).width() > 320) {
            $('.sidebar').show();
        }
    }
});