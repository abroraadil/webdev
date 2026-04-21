const slider = document.getElementById('projectspreview');
const mobilenavmenuimage = document.getElementById('navmenu')
let backtotopbutton = document.getElementById("backtotopbutton");
let isDown = false;
let startX;
let scrollLeft;
let mobilenavigation = false;
let savescrollpositionBody;
let savescrollpositionDocumentElement;



slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.style.cursor = 'grabbing';
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  e.preventDefault();
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backtotopbutton.style.display = "block";
  } else {
    backtotopbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function togglemobilenavmenu() {

  if (mobilenavigation == false) {
    mobilenavigation = true;
    document.getElementById("navformobile").style.display = "inline";
    document.getElementById("cover").style.display = "inline";
    savescrollpositionBody = document.body.scrollTop;
    document.body.scrollTop = 0;
    savescrollpositionDocumentElement = document.documentElement.scrollTop;
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";

  } else {
    mobilenavigation = false;
    document.getElementById("navformobile").style.display = "none";
    document.getElementById("cover").style.display = "none";
    document.body.style.overflow = "auto";
    document.body.scrollTop = savescrollpositionBody;
    document.documentElement.scrollTop = savescrollpositionDocumentElement;
  }
}