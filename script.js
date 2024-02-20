// Detecting Button Press

var noOfbutton = document.querySelectorAll(".drum").length;
for(var i=0; i<noOfbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //alert("I got clicked");

        var buttonClicked = this.innerHTML;

        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);

    });
}

// Detecting KeyBoard Press

document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "f":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "v":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        
        case "c":
            var tom3 = new Audio("sounds/tom-2.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "y":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;


        case "o":
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;

        case "u":
            var kick = new Audio("sounds/crash.mp3");
            kick.play();
            break;

        default: console.log(buttonClicked);

    }
}

//Button Animation

function buttonAnimation(currentKey){
    var buttonActivation = document.querySelector("." + currentKey);

    buttonActivation.classList.add("pressed");

    setTimeout(function(){
        buttonActivation.classList.remove("pressed")
    }, 150);
}