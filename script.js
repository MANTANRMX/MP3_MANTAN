window.addEventListener('DOMContentLoaded', function() {
  var playButton = document.querySelector('.fa-play');
  var audio = new Audio('https://drive.google.com/uc?export=download&id=1-4ue_H8dWa5icr9opvz8BGXcOrFy47OR');
  var isPlaying = false;

  playButton.addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      playButton.classList.remove('fa-pause');
      playButton.classList.add('fa-play');
      isPlaying = false;
    } else {
      audio.play();
      playButton.classList.remove('fa-play');
      playButton.classList.add('fa-pause');
      isPlaying = true;
    }
  });
});
