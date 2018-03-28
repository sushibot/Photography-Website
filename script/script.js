window.onscroll = function() {scrollFunction()};
// window.addEventListener("click", changeTextColor());

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// function changeTextColor(){
//   var check  = document.getElementById("page1").value;
//   alert(check);
// }