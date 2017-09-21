document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  wrapper.addEventListener('mousemove', function (e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + 'px';
    topLayer.style.width = e.clientX + skew + delta + 'px';
  });
});

//target the nav when screen size falls below a certain width, such as on mobile
$('.menu-container').on('click', function(){
  //give the targetedClass another class of menu if it doesn't have it already. Remove it if it does
  $('.clearfix .menu').toggleClass('open');
});

// menu bars
function menuCollapse(x) {
  x.classList.toggle('change');
}
