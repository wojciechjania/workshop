$(function init(){
//zadanie 1
    console.log('init');
    var shopping = $('.shopping');
    var add = shopping.find('button');
    add.on('click', function (e) {
        $(this).toggleClass('added');
        $(this).parent().parent().toggleClass('cart-updated')
        // if($(this).hasClass('added')){
        //     $(this).removeClass('added');
        //     $(this).parent().parent().removeClass('cart-updated')
        // }else{
        //     $(this).addClass('added');
        //     $(this).parent().parent().addClass('cart-updated')
        // }

    })
  //Zadanie 2
  var films = $('.films');
  var expandButtons = films.find('.expand');
  var closeButtons = films.find('.close');
  expandButtons.on('click', function (e) {
      $(this).parent().next().toggle(1000);
      return false;
  });
  closeButtons.on('click', function (e) {
      $(this).parent().hide(1000);
      return false;
  });
//Zdaanie 3
  $('a').each(function(){
      console.log($(this).text());
      $(this).attr('href', 'http://www.coderslab.pl').text('CodersLab');
  });
});
