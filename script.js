function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    console.log(audio, e.keyCode);
    key.classList.add('playing');
    audio.play();
    audio.currentTime = 0;
}
    

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelector('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition()));
window.addEventListener('keydown', playSound);
