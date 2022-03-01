$(function(){

    // HEADER 
    //fonction qui changer au click du menu burger les classes des elements id
       
    $("#burger").click(function (){
        
        function exec(id, event1, event2) {
            if($(id).hasClass(event1)){
                $(id).addClass(event2).removeClass(event1);
            }
            else{
                $(id).addClass(event1).removeClass(event2);
            }
        } 
        //menu
        exec("#list","animouv","aniferm");
        // burger
        exec("#span1","anicroixspan1","anibuspan1");
        exec("#span2","anicroixspan2","anibuspan2");
        exec("#span3","anicroixspan3","anibuspan3");

    });

// onglet page custom
    var ongle= "1";

    function optinO(option,num){
        $(option).click(function () { 
            ongle = num;
            $(".onglet").css({
                "background-color": "#333",
                "color": "white",
                
            });
            $(this).css({
                "background-color": "white",
                "color": "black",
            });
            if(ongle == "1"){
            $(".page1").css({
                "z-index": "2",
            });
            $(".page2").css({
                "z-index": "1",
            });
        }
        else if(ongle == "2"){
            $(".page2").css({
                "z-index": "2",
            });
            $(".page1").css({
                "z-index": "1",
            });
        }
        });
    }
    optinO(".onglet1","1");
    optinO(".onglet2","2");


    // CUSTOMER Cable
 
    $("#choixa").change(function(){
        $("#cable1").css({
            filter:this.value,
        });
    });
    $("#choixb").change(function(){
        $("#cable2").css({
            filter:this.value,
        });
    });
    $("#choixusb").change(function(){
        $("#cableraccord").css({
            filter:this.value,
        });
    });




//------------------------------------------------------------------------------------
// CUSTOM KEYBOARD
//------------------------------------------------------------------------------------
//   Couleur des div couleurs
$(".color").each(function(){
    var couleur = $(this).attr("data-color");
    $(this).css({
        background : couleur,
    });
});

// Clavier 
var choix= "T";
var choixcolor;
// prend le choix lettre ou touche

function optinK(option,lettre){
    $(option).click(function () { 
        choix = lettre;
        $(".choix").css({
            "border":"white 1px solid",
        });
        $(this).css({
            "border":"orangered 2px solid",
        });
    });
}
optinK(".choixT","T");
optinK(".choixL","L");
optinK(".choixC","C");

// prend la couleur 
$(".color").click(function () {
   choixcolor = $(this).attr("data-color");
    $(".color").css({
    "border":"white 1px solid",
    });
    $(this).css({
        "border":"orangered 2px solid",
    });
   });

// attribue la couleur a la touche ou a la lettre
$(".touche").click(function () {

    if(choix == "T"){
        $(this).css({
            background : choixcolor,
        });
    }
    else if(choix == "L"){
        $(this).css({
            color : choixcolor,
        });
    }
    
});
// change la couleur de la case
$(".color").click(function(){
    if(choix =="C"){
        $(".parent").css({
            "background-color" : choixcolor,
        });
    }
});

//changer une zone
function choixzone(zone,clazone){
    $(zone).click(function () { 

        if(choix == "T"){
            $(clazone).css({
                background : choixcolor,
            });
        }
        else if(choix == "L"){
            $(clazone).css({
                color : choixcolor,
            });
        }
    });
}       
choixzone(".zoneA",".alfa");
choixzone(".zoneM",".modifier");
choixzone(".zoneF",".touche");


//------------------------------------------------------------------------------------
// Slider
//------------------------------------------------------------------------------------

//gestion du bouton 
var slide = 0;

$(".flecheright").click(function (){
    if(slide <= 800){
        
        slide += 101;  
    
        $(".slider").css({
        "transform": `translateX(-${slide}vw)`,
        });

    }
});

$(".flecheleft").click(function (){
    if(slide > 0 ){
        
        slide -= 101;  
    
        $(".slider").css({
        "transform": `translateX(-${slide}vw)`,
        });

    }
});

//gestion du scroll
$('.slider').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta > 0) {
        
        if(slide > 0 ){
    
            slide -= 101;  
        
            $(".slider").css({
            "transform": `translateX(-${slide}vw)`,
            });
            
        }
        
    }
    else{
        if(slide <= 800){
    
            slide += 101;  
        
            $(".slider").css({
            "transform": `translateX(-${slide}vw)`,
            });

        }
    }
});

$('.slider').on('swipeleft',function (){
    if(slide <= 800){
        
        slide += 101;  
    
        $(".slider").css({
        "transform": `translateX(-${slide}vw)`,
        });

    }
});

$('.slider').on('swiperight',function (){
    if(slide > 0 ){
        
        slide -= 101;  
    
        $(".slider").css({
        "transform": `translateX(-${slide}vw)`,
        });

    }
});
});