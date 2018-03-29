window.onscroll = function() {scrollFunction()};
// window.addEventListener("click", changeTextColor());

var size = {
  width: window.innerWidth || document.body.clientWidth,
 height: window.innerHeight || document.body.clientHeight
}
console.log(size);

function scrollFunction() {
if(size.width>=601){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  }
}
if(size.width<=600){
  console.log(size.width);
  myFunction();
}

function myFunction() {

  alert("Page has changed..");
    // var x = document.getElementById("navbar");
    // if (x.className === "topnav") {
    //     x.className += "responsive";
    // } else {
    //     x.className = "topnav";
    // }
}
