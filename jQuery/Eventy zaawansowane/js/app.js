$(function init(){

  var people = $('.people');
  var dodaj = $('input[value="dodaj"]');
  dodaj.on('click', function(){
    // Pobierz do zmiennej wartość wpisaną do pola o id addUser.
    var userName = people.find('#addUser').val();
    // Pobierz do zmiennej wartość wpisaną do pola o id age.
    var age = people.find('#age').val();
    // Wstaw nowy element na koniec listy
    var new_human = $('<li>'+ userName +'</li>');
    // wstaw jej wiek jako atrybut data.
    new_human.data('age', age);
    // new_human.attr('data-age', age);
    people.find('ul').append(new_human).find('li').each(function(){
      age = parseInt($(this).data('age'));
      if(age<16){
          $(this).css('color', 'green');
      }else if(age<41){
          $(this).css('color', 'blue');
      }else{
          $(this).css('color', 'brown');
      }
    });

    var peoples = $('.people li');
    var button = $('<button>Usun</button>');
    peoples.append(button);
    peoples.on('click', 'button', function erase(){
      $(this).parent().remove();
    });
  });
});
