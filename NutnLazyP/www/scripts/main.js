$(function () {
    
    $("#gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').display = "block";
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
    $.ajax({
        type: "POST",
        url: "http://140.115.197.16/",
        data: "school=NUTN&app=南大懶人包OuOb",
        error: function () {
            alert("此APP僅提供導覽功能，您仍需要連接網路來瀏覽其他網頁");
        }
    });
});

