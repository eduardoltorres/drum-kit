const audios = Array.from(document.getElementsByTagName('audio'));
const keys = Array.from(document.getElementsByClassName('key'));

document.addEventListener('keydown', (e) => (
  keys.forEach((val, i) => (
    e.which == val.getAttribute('data-key') ? val.classList.toggle('playing') : false)
  )
));

document.addEventListener('keyup', (e) => (
  keys.forEach((val, i) => (
    e.which == val.getAttribute('data-key') ? val.classList.toggle('playing') : false)
  )
));

document.addEventListener('keydown', (e) => {
  audios.forEach((val, i) => {
    if (e.which == val.getAttribute('data-key')) {
      audios[i].currentTime = 0;
      audios[i].play();
    }
  });
});
