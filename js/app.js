
var loaded = false;
$(function(){
    //facilities section -> events for all seeMore Links
    //version 1
    $("#welcome .facilities").on("click","a.seeMore",function(){
        //$('.facilities .content').removeClass("activeFace");
        //$(this).closest(".content").addClass("activeFace");
        
        $('.facilities .content .seeMore').removeClass("ntActiveLink");
        $('.facilities .content .seeLess').addClass("ntActiveLink");
        
        $(this).addClass("ntActiveLink").siblings('.seeLess').removeClass("ntActiveLink");
        
        var nmbr = $(this).attr('class').split(" ")[1];
        $(".facilities .details").hide();
        if(!loaded)
        $(".details." + nmbr).slideDown('300');
        else
        $(".details." + nmbr).show();
        loaded = true;
    });
    $("#welcome .facilities").on("click","a.seeLess",function(){                
        $(".details").slideUp('300');
        $(this).addClass("ntActiveLink").siblings('.seeMore').removeClass("ntActiveLink");
        loaded = false;
    });
    /* version 2
    $("#welcome .facilities").on('click','.content',function(){
        $('.facilities .content').removeClass("activeFace");
        $(this).addClass("activeFace");
        var nmbr = $(this).attr('class').split(" ")[1];
        if(!loaded){
            $(".facilities .details").hide();
            $(".facilities .details." + nmbr).slideDown('300');
        }
        else{
            $(".facilities .details").hide();
            $(".facilities .details." + nmbr).show();
        }
        $("#welcome .hideDetails").show();
        $("#welcome .btnSlides").show();
        
        $('#welcome .btnSlides .'+nmbr).addClass("active").siblings().removeClass("active");
        loaded = true;
    });*/
    
});
