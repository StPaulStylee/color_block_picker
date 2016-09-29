    var color = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange'];
    var block = 7;
    var colorChoice;
    function randomNumber(min, max){
      colorChoice = Math.floor(Math.random() * (1 + max - min) + min);

}
    $(document).ready(function(){
      for(var i = 0; i < block; i++) {
        var boxColor = color[i];
        var $box = $('<li></li>');
        $('section').append($box);
        switch (color[i]) {
          case 'red':
            $('section').find(':nth-child(1)').css({'background-color': 'red', 'border': '5px solid darkred'});
          case 'green':
            $('section').find(':nth-child(2)').css({'background-color': 'green', 'border': '5px solid darkgreen'});
          case 'blue':
            $('section').find(':nth-child(3)').css({'background-color': 'blue', 'border': '5px solid darkblue'});
          case 'yellow':
            $('section').find(':nth-child(4)').css({'background-color': 'yellow', 'border': '5px solid rgb(167, 170, 36)'});
          case 'purple':
            $('section').find(':nth-child(5)').css({'background-color': 'purple', 'border': '5px solid rgb(87, 35, 167)'})
          case 'pink':
            $('section').find(':nth-child(6)').css({'background-color': 'pink', 'border': '5px solid salmon'});
          case 'orange':
            $('section').find(':nth-child(7)').css({'background-color': 'orange', 'border': '5px solid darkorange'});
          }
        }
    randomNumber(0, 6);
    $('header').text('Please choose the color ');
    $('header').append(color[colorChoice] + '.');
    console.log(color[colorChoice]);
    



});
