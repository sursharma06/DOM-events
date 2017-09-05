document.querySelector('#red').addEventListener('click', function () {
  //change the background color of the body
  document.querySelector('body').style.backgroundColor = 'red';//select the body and then change style
});
//first select the box
//then add the event listener function that takes in an anonymous func that will be invoked once the event "click" happens

document.querySelector('#blue').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'blue';
});

document.querySelector('#yellow').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'yellow';
});

document.querySelector('#green').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'green';
});
