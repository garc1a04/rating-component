var numberSelected = "";
var clicou = false;


colorEvent("button","white",null);
colorEvent(".rating div","hsl(25, 97%, 53%)","black");

$(".rating div").on("click", function () {
    $(this).css("backgroundColor","white");
    $(this).css("color","black");

    if(numberSelected != this.classList && numberSelected != "") {
        $("."+numberSelected).css("backgroundColor","#333f50");
        $("."+numberSelected).css("color","hsl(225, 5%, 85%)");
    }
    
    numberSelected = this.classList;
    clicou = true;
});

$("button").on("click", function () {
    if(numberSelected != "") {
        $(".container").css("display", "none");


        $(".selected").append('<p class="paragraph2 color option">You selected '+numberSelected+' out of 5</p>');
        $(".container2").css("display", "flex");
    }

    $("button").after("<p class='paragraphErro'> Please, selected anything option</p>");
});

function colorEvent(selector, corIn,colorLetter){
    var colorObject = $(selector).css("background").split(")");
    var colorLetterObject = $(selector).css("color");

    $(selector).mouseenter(function () { 
        if(colorLetter != null){
            $(this).css("color",colorLetter);
        }

        $(this).css("backgroundColor",corIn);
    });
    
    $(selector).mouseleave(function () {
        
        if(numberSelected == this.classList){
            $(this).css("backgroundColor","white");
            $(this).css("color","black");
            return;
        }

        $(this).css("background",colorObject[0]+")");
        $(this).css("color",colorLetterObject);
    });
}

