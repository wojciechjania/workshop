$(function init(){
  console.log('init');
  var div = $('<div class="panel"></div>');
  $('.people').after(div);
  // lub
  // div.insertAfter($('.people'));
  div.text("jestem div");
  // zadanie 1
  var people = $('.people');
  var dodaj = $('input[value="dodaj"]');
  dodaj.on('click', function () {
    var userName = people.find('#addUser').val();
    var age = people.find('#age').val();
    var newHuman = $('<li>'+userName+'</li>');
    newHuman.data('age', age);
    people.find('ul').append(newHuman);
  })

//   $(function init(){
//     console.log('init');
//     // Znajdź w pliku index.html element o klasie people
//     var people = $('.people li');
//     people.on('click', 'button', function edyp(){
//        $(this).parent().remove();
//     });
//     var button = $('<button>Usun</button>');
//     people.append(button);
// });
});
