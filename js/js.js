 let audio = document.getElementById('audioPlayer');
let playPauseButton = document.getElementById('playPauseButton');
let img=document.getElementById('img');

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = '▐▐';
            playPauseButton.classList.add('buttonRed',"rotating");
            img.classList.add("rotating");
        } else {
            audio.pause();
            playPauseButton.classList.remove('buttonRed',"rotating");
            img.classList.remove("rotating");
            playPauseButton.textContent = '▶';
        }
    });