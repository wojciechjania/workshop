$(function init(){
  //zadanie testowe
  console.log('init');
  $('button').on('click', function (){
    console.log($(this).text());
  })
  //zadanie testowe 2
  $('.content').on('click', function () {
    $(this).hide(2000).show(7000);
  })
  // Zdaanie 1
  var buttons = $('button');
  buttons.first().on('click', function(){
    $('.content').show(500);
  });
  buttons.eq(1).on('click', function(){
    $('.content').hide(500);
  })
  buttons.eq(2).on('click', function(){
    $('.content').toggle(500);
  })
// Zadanie 2
  $('.img2').hide();
  $('.img1').on('click',  function (){
    $('.img1').fadeOut(500);
    $('.img2').fadeIn(500);
  })
// Zadanie 3
$('.arrow-down').on('click', function(){
  $('.arrow-down').css('transform','rotate(0deg)');
    if($('.select-body').is(':visible')){
      $('.select-body').slideToggle(500);
    } else {
      $('.arrow-down').css('transform','rotate(180deg)')
      $('.select-body').slideToggle(500);
    }
  })
  //Zadanie 4
  var running = $('.running-element');
  running.on('click', function(){
    var div = running.find('div');
    div.animate({left: 20},2000, function () {
      console.log("przesuwanie zakończone")
    });

})

})
