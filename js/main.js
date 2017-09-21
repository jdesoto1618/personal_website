//target the nav when screen size falls below a certain width, such as on mobile
$('.menu-container').on('click', function(){
  //give the targetedClass another class of menu if it doesn't have it already. Remove it if it does
  $('.menu').toggleClass('open');
});

// menu bars
function menuCollapse(x) {
  x.classList.toggle('change');
}
