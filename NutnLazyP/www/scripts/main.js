(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // 處理 Cordova 暫停與繼續事件
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。
        window.ga.startTrackerWithId('UA-105095072-1', 30);
        window.ga.trackView('Screen Links')

        function clickLabel() {
            window.ga.trackEvent('Links', 'Click', this.title);
            window.ga.dispatch();
        }
        var as = document.getElementsByTagName("a");
        for (var i = 0; i < as.length; ++i) {
            as[i].addEventListener('click', clickLabel);
        }
    };

    function onPause() {
        // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。

    };

    function onResume() {
        // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
    };
})();
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

