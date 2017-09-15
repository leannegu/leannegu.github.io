$(document).ready(function() {


// Add jQuery here
$('.nav_fruit').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide')

  $('.item.fruit').removeClass('hide');
  $('.item.fruit').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_veg').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide')

  $('.item.veg').removeClass('hide');
  $('.item.veg').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_crate').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide')

  $('.item.crate').removeClass('hide');
  $('.item.crate').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_unbranded').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide')

  $('.item.unbranded').removeClass('hide');
  $('.item.unbranded').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_bananalabel').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide')

  $('.item.bananalabel').removeClass('hide');
  $('.item.bananalabel').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_emptycrate').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.emptycrate').removeClass('hide');
  $('.item.emptycrate').addClass('show');

  $('.nav_clear').addClass('show');
});


$('.nav_fake').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.fake').removeClass('hide');
  $('.item.fake').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_foam').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.foam').removeClass('hide');
  $('.item.foam').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_mesh').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.mesh').removeClass('hide');
  $('.item.mesh').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_fruitinbox').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.fruitinbox').removeClass('hide');
  $('.item.fruitinbox').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_pulp').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.pulp').removeClass('hide');
  $('.item.pulp').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_multiple').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.multiple').removeClass('hide');
  $('.item.multiple').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_twist').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.twist').removeClass('hide');
  $('.item.twist').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_bottle').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.bottle').removeClass('hide');
  $('.item.bottle').addClass('show');

  $('.nav_clear').addClass('show');
});



$('.nav_clear').click(function(event){
  $('.nav_clear').addClass('hide');
  $('.nav_clear').removeClass('show');
  $('.item').removeClass('hide');
});

$('.nav_thumbnail').click(function(event){
  $('.item').addClass('thumbnail')
});

$('.nav_large').click(function(event){
  $('.item').removeClass('thumbnail');
});












  });
