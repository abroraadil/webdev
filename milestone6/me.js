let backtotopbutton = document.getElementById("backtotopbutton");
let mobilenavigation = false;
let savescrollpositionBody;
let savescrollpositionDocumentElement;

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
