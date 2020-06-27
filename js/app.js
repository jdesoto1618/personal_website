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
  const bodyTag = document.querySelector('body');

  menuContainer.addEventListener('click', function(){
    menuContainer.classList.toggle('update-menu-bars');
    navList.classList.toggle('open');
  });

  let yearText = document.querySelector('.current-year');
  if(yearText) {
    yearText.innerHTML = new Date().getFullYear();
  }

  if (bodyTag.classList.contains('home')) {
    $('#myModal').on('show.bs.modal', function (e) {
      var image = $(e.relatedTarget).attr('src');
      $('.showimage').attr('src', image);
    });
  } else if (bodyTag.classList.contains('projects')) {
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
    });
  }
});
