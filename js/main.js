$(document).ready(function () {
  // target the nav when screen size falls below a certain width, such as on mobile
  $('.menu-container').on('click', function(){
    // give the menu another class of open if it doesn't have it already. Remove it if it does
    $('.list-inline').toggleClass('open');
    // add class of change to menu-container div when it's clicked. This will trigger the css change selector
    $('.menu-container').toggleClass('change');
  });

  if ($('body').hasClass('index')) {
    // // Get the modal
    // var modal = document.getElementById('myModal');
    //
    // // Get the image and insert it inside the modal - use its "alt" text as a caption
    // // multiple images now have the class of myImg. want to capture all images with this class to set up modals
    // var img = document.getElementsByClassName('myImg');
    // // this is where the image will be placed into. as is, this is an empty image with no source until jquery puts the clicked image in it
    // var modalImg = document.getElementById("img01");
    // // empty div, until jquery places the text in it
    // var captionText = document.getElementById("caption");
    // img.onclick = function(){
    //     modal.style.display = "block";
    //     modalImg.src = this.src; // use the actual image source as the modal image source, defined in markup
    //     captionText.innerHTML = this.alt; // use the actual image alt as its modal caption, defined in markup
    // }

    // multi-image modal
    $('#myModal').on('show.bs.modal', function (e) {
      var image = $(e.relatedTarget).attr('src');
      $(".modal-content").attr("src", image);
    });
    // use alt in markup as image caption
    var captionText = document.getElementById("caption");
    $( ".col-xs-4.text-center" ).on( "click", function() {
      console.log('caption');
      captionText.innerHTML = $(this).find(".itemdesc").text();
    });

    // span element that closes the modal. [0] accesses the markup because the variable span is an object
    var span = document.getElementsByClassName("close")[0];
    // when the user clicks on span (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  } else if ($('body').hasClass('projects')) {
    // image slider code
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('skewed') != -1) {
      skew = 1000;
    }

    wrapper.addEventListener('mousemove', function (e) {
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      handle.style.left = e.clientX + delta + 'px';
      topLayer.style.width = e.clientX + skew + delta + 'px';
      // end image slider code
    }); //end wrapper function
  } // end else if
}); // end document.ready
