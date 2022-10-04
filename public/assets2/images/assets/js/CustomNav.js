
//=============dropdown submenu 1===========
$(document).ready(function(){
    $(".open1").click(function () {
        $(this).find(".closenav1").slideToggle("fast");
    });
    });
$(document).on("click", function(event){
    var $trigger = $(".open1");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".closenav1").slideUp("fast");
    }
});
//=============dropdown submenu 2===========
$(document).ready(function () {
    $(".open2").click(function () {
        $(this).find(".closenav2").slideToggle("fast");
    });
});
$(document).on("click", function (event) {
    var $trigger = $(".open2");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".closenav2").slideUp("fast");
    }
});
//=============dropdown submenu 3===========
$(document).ready(function () {
    $(".open3").click(function () {
        $(this).find(".closenav3").slideToggle("fast");
    });
});
$(document).on("click", function (event) {
    var $trigger = $(".open3");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".closenav3").slideUp("fast");
    }
});
//=============dropdown submenu 4===========
$(document).ready(function () {
    $(".open4").click(function () {
        $(this).find(".closenav4").slideToggle("fast");
    });
});
$(document).on("click", function (event) {
    var $trigger = $(".open4");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".closenav4").slideUp("fast");
    }
});
//=============dropdown submenu 5===========
$(document).ready(function () {
    $(".open5").click(function () {
        $(this).find(".closenav5").slideToggle("fast");
    });
});
$(document).on("click", function (event) {
    var $trigger = $(".open5");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".closenav5").slideUp("fast");
    }
});
//=============dropdown submenu 6===========
$(document).ready(function () {
    $(".open6").click(function () {
        $(this).find(".closenav6").slideToggle("fast");
    });
});
$(document).on("click", function (event) {
    var $trigger = $(".open6");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".closenav6").slideUp("fast");
    }
});
