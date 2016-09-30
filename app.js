    var color = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange'];
    var block = 7;
    var colorChoice;
    function randomNumber(min, max){
      colorChoice = Math.floor(Math.random() * (1 + max - min) + min);
    }
    function congratulations(){
      $('header').text('').append('Congratulations, you really know your visible spectrum!');
    }
    function tryAgain(){
      $('header').text('').append('Yikes! You need to adjust your wavelength by at least a hundred nanometers...');
    }
    $(document).ready(function(){
      for(var i = 0; i < block; i++) {
        var boxColor = color[i];
        var $box = $('<li></li>');
        $('section').append($box);
        switch (color[i]) {
          case 'red':
            $('section').find(':nth-child(1)').addClass('red').css({'background-color': 'red', 'border': '5px solid darkred', 'transition': '0.5s'});
          case 'green':
            $('section').find(':nth-child(2)').addClass('green').css({'background-color': 'green', 'border': '5px solid darkgreen', 'transition': '0.5s'});
          case 'blue':
            $('section').find(':nth-child(3)').addClass('blue').css({'background-color': 'blue', 'border': '5px solid darkblue', 'transition': '0.5s'});
          case 'yellow':
            $('section').find(':nth-child(4)').addClass('yellow').css({'background-color': 'yellow', 'border': '5px solid rgb(167, 170, 36)', 'transition': '0.5s'});
          case 'purple':
            $('section').find(':nth-child(5)').addClass('purple').css({'background-color': 'purple', 'border': '5px solid rgb(87, 35, 167)', 'transition': '0.5s'})
          case 'pink':
            $('section').find(':nth-child(6)').addClass('pink').css({'background-color': 'pink', 'border': '5px solid salmon', 'transition': '0.5s'});
          case 'orange':
            $('section').find(':nth-child(7)').addClass('orange').css({'background-color': 'orange', 'border': '5px solid darkorange', 'transition': '0.5s'});
          }
        }
// Choose color to pick and append it to the DOM.
    randomNumber(0, 6);
    $('header').text('Please choose the color ');
    $('header').append(color[colorChoice] + '.');
//Assign chosen color to appropriate class.
  switch (color[colorChoice]) {
    case (color[0]):
      $('.red').on('click', function(){
        congratulations();
        $('.red').css({'transform': 'scale(1.2)'});
      });
      break;
    case (color[1]):
    $('.green').on('click', function(){
      congratulations();
      $('.green').css({'transform': 'scale(1.2)'});
    });
      break;
    case (color[2]):
    $('.blue').on('click', function(){
      congratulations();
      $('.blue').css({'transform': 'scale(1.2)'});
    });
      break;
    case (color[3]):
    $('.yellow').on('click', function(){
      congratulations();
      $('.yellow').css({'transform': 'scale(1.2)'});
    });
      break;
    case (color[4]):
    $('.purple').on('click', function(){
    congratulations();
    $('.purple').css({'transform': 'scale(1.2)'});
    });
      break;
    case (color[5]):
    $('.pink').on('click', function(){
    congratulations();
    $('.pink').css({'transform': 'scale(1.2)'});
    });
      break;
    case (color[6]):
    $('.orange').on('click', function(){
    congratulations();
    $('.orange').css({'transform': 'scale(1.2)'});
    });
      break;
  }
  if (color[colorChoice] != color[0]) {
    $('.red').on('click', tryAgain);
  }
  if (color[colorChoice] != color[1]) {
    $('.green').on('click', tryAgain);
  }
  if (color[colorChoice] != color[2]) {
    $('.blue').on('click', tryAgain);
  }
  if (color[colorChoice] != color[3]) {
    $('.yellow').on('click', tryAgain);
  }
  if (color[colorChoice] != color[4]) {
    $('.purple').on('click', tryAgain);
  }
  if (color[colorChoice] != color[5]) {
    $('.pink').on('click', tryAgain);
  }
  if (color[colorChoice] != color[6]) {
    $('orange').on('click', tryAgain);
  }


});
