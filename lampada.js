// seu-arquivo-javascript.js

document.addEventListener('DOMContentLoaded', function() {
  const turnOn = document.getElementById('turnOn');
  const turnOff = document.getElementById('turnOff');
  const lamp = document.getElementById('lamp');

  function lampOn() {
    lamp.src = './imgs/ligada.jpg';
  }

  function lampOff() {
    lamp.src = './imgs/desligada.jpg';
  }

  function lampQuebrada(){
    lamp.src = './imgs/quebrada.jpg';
  }

  turnOn.addEventListener('click', lampOn);
  turnOff.addEventListener('click', lampOff);
  lamp.addEventListener('click', lampQuebrada);
});
