document.addEventListener('DOMContentLoaded', function() {
  function getContainers() {
    const menuContainer = document.querySelector('.menu-container');
    const navList = document.querySelector('.nav-list');
    const imgContainer = document.querySelectorAll('.img-container');
    const modalContainer = document.querySelector('.modal-content');
    return [menuContainer, navList, imgContainer, modalContainer];
  }

  let menuContainer = getContainers()[0];
  let navList = getContainers()[1];
  let imgContainer = getContainers()[2];
  let modalContainer = getContainers()[3];

  menuContainer.addEventListener('click', function(){
    menuContainer.classList.toggle('update-menu-bars');
    navList.classList.toggle('open');
  });

  let yearText = document.querySelector('.current-year');
  yearText.innerHTML = new Date().getFullYear();

  // let inputUnderline = document.querySelector('.input-underline');
  // let emailInput = document.querySelector('.email-input');
  //
  // emailInput.addEventListener('focusin', function(){
  //   inputUnderline.classList.add('show-input-underline');
  // });
  //
  // emailInput.addEventListener('focusout', function(){
  //   inputUnderline.classList.remove('show-input-underline');
  // });

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
});
