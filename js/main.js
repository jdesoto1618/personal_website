//target the nav when screen size falls below a certain width, such as on mobile
$('.menu-container').on('click', function(){
  //give the menu another class of open if it doesn't have it already. Remove it if it does
  $('.list-inline').toggleClass('open');
});

// menu bars
function menuCollapse(x) {
  x.classList.toggle('change');
}
