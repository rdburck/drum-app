window.addEventListener('keydown', function(keyboardEvent) {
    const audio = document.querySelector(`audio[data-key="${keyboardEvent.keyCode}"]`)
    if(!audio) return;
    console.log(audio, keyboardEvent.keyCode);
    audio.currentTime = 0
    audio.play();
})