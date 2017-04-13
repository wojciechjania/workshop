$(document).ready(function(){
  $('dt').on("mousemove", function(){
    console.log("działa");
  })
//Zadanie 1
  var ironMan = $('.ironMan-btn');
  var thor = $('.thor-btn');
  var wolverine = $(".wolverine-btn");

  ironMan.on("click", function (){
    console.log('Kliknieto ironMan');
  });
  thor.one('click', function (){
    console.log("Kliknieto Thor i nie klikniesz drugi raz");
  });
  wolverine.on('click', function() {
    console.log("Odczepiam eventy");
    thor.off('click');
    ironMan.off('click');
    wolverine.off('click');
  });
  //zadanie 2
  var superheros = $('.superhero-description dd');
  superheros.addClass('hide');

  $('.superhero-description dt').each(function(i, element) {
    $(element).on('click', function (e) {
        $(this).next().is(':hidden') ? $(this).next().slideDown(500) : $(this).next().slideUp(500);
    });
  });
  //zadanie 3
  console.log($('.login .show-hide-btn'));
  $('.show-hide-btn').on('click', function(e){
      e.preventDefault();
      var $pass =  $('.login input').last();
      $pass.attr('type') == 'password' ? $pass.attr('type', 'text') : $pass.attr('type', 'password');
      console.log($pass.attr('type'));
  });
  //zadanie 4
  $('.menu a').on('mouseover', function(){
  console.log("Hura");
  });
  //Zadanie 5
  $('.login input').each(function(i, element){
        $(element).on('click', function(e){
          $(this).css('box-shadow', 'hsl(0,100%,0%) 0 5px 10px -5px inset');
        });
        $(element).on('mouseout', function(e){
          $(this).css('background','#e3e3e3');
        });
    })
});
