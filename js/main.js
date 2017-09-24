//target the nav when screen size falls below a certain width, such as on mobile
$('.menu-container').on('click', function(){
  //give the menu another class of open if it doesn't have it already. Remove it if it does
  $('.list-inline').toggleClass('open');
});

// add class of change to menu-container div when it's clicked
function menuCollapse(x) {
  x.classList.toggle('change');
}

// image slider code
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
// end image slider code

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src; // image source, defined in markup
    captionText.innerHTML = this.alt; // image alt, defined in markup
}

// span element that closes the modal. [0] accesses the markup because the variable span is an object
var span = document.getElementsByClassName("close")[0];
// when the user clicks on span (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
