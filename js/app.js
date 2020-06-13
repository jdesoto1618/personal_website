$(document).ready(function () {
  // target the nav when screen size falls below a certain width, such as on mobile
  $('.menu-container').on('click', function(){
    // give the menu another class of open if it doesn't have it already. Remove it if it does
    $('.list-inline').toggleClass('open');
    // add class of change to menu-container div when it's clicked. This will trigger the css change selector
    $('.menu-container').toggleClass('change');
  });

  if ($('body').hasClass('index')) {
    // multi-image modal
    $(document).ready(function () {
      $('#myModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $('.showimage').attr('src', image);
      });
    });

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
