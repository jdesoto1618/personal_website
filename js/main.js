//target the nav when screen size falls below a certain width, such as on mobile
$('.menu-container').on('click', function(){
  //give the menu another class of open if it doesn't have it already. Remove it if it does
  $('.list-inline').toggleClass('open');
});

// menu bars
function menuCollapse(x) {
  x.classList.toggle('change');
}

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
