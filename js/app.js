document.addEventListener('DOMContentLoaded', function() {
  function getContainers() {
    let menuContainer = document.querySelector('.menu-container');
    let navList = document.querySelector('.list-inline');
    return [menuContainer, navList];
  }

  let menuContainer = getContainers()[0];
  let navList = getContainers()[1];

  menuContainer.addEventListener('click', function(){
    menuContainer.classList.toggle('change');
    navList.classList.toggle('open');
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

  fetch('../views/footer.html')
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
});
