
var len = document.querySelectorAll("button").length;
for(var i = 0; i < len; i++)
    document.querySelectorAll("button")[i].addEventListener("click", function()
    {
        var buttonInnerHtml = this.textContent;
        switch(buttonInnerHtml)
        {
            case "a" :   var audio = new Audio("./sounds/crash.mp3");
                        audio.play();
            break;
            case "s" :   var audio = new Audio("./sounds/kick-bass.mp3");
                        audio.play();
            break;
            case "d":   var audio = new Audio("./sounds/snare.mp3");
                        audio.play();
            break;
            case "f":     var audio = new Audio("./sounds/tom-1.mp3");
                            audio.play();
            break;
            case "j":         var audio = new Audio("./sounds/tom-2.mp3");
                            audio.play();
            break;
            case "k":     var audio = new Audio("./sounds/tom-3.mp3");
                        audio.play();
            break;
            case "l":     var audio = new Audio("./sounds/tom-4.mp3");
                            audio.play();
            break;
            default: break;
        }

    });
document.addEventListener('keydown', (event) => {
        if(event.key == "a") 
        {
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        }
        else if(event.key == "s")
        {
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        }
        else if(event.key == "d")
        {
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();

        }
        else if(event.key == "f")
        {
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        }
        else if(event.key == "j")
        {
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        }
        else if(event.key == "k")
        {
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        }
        else if(event.key == "l")
        {
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        }
        
    });



    
