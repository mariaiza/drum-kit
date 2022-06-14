document.querySelectorAll('button').forEach(x => x.addEventListener("click", handleClick));
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
    var element = this.documentElement.querySelector(`.${event.key}`);
    handleDrumEvent(event.key, element);
    changeButtonStyle(event.key);
}

function handleClick() {
    var innerText = this.innerText;
    handleDrumEvent(innerText, this);
    changeButtonStyle(innerText);
}

function handleDrumEvent(key, document) {

    switch (key) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            console.log(buttonText);
    }
}

function changeButtonStyle(elementKey) {
    var activeButton = document.querySelector(`.${elementKey}`);
    activeButton.classList.add('pressed');
    setTimeout(revertButtonStyle, 100, activeButton);
}

function revertButtonStyle(activeButton) {
    activeButton.classList.remove('pressed');
}