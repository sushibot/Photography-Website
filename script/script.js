var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}
var modal = document.getElementById('modal-id');

console.log(modal);
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
console.log(size);

function phoneChange() {
  var x = document.getElementById("phone-nav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

