$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 0){
            $(".netflix-navigationbar").css("background", "#0C0C0C");
        }
        else{
            $(".netflix-navigationbar").css("background", "black");
        }
    })
})