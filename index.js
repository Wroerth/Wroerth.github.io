const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');

envelope.addEventListener('click', function() {
  envelope.classList.toggle('open');
  letter.classList.toggle('open');
});
