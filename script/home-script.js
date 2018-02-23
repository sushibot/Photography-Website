window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

// Javascript Testing Below....
// console.log(document.images);
// console.log(document.all[8]);
// console.dir(document);


// This selector grabs the element by its ID name
// var logo = document.getElementById('p1');
// // console.log(logo);
// // console.log(logo.innerText);
// // logo.innerHTML = '<h4>Test</h4>'; Doesnt really change the parent element tag, just adds it in
// logo.style.borderBottom = 'solid 2px dodgerblue';

// This gets elements by its Class name
// var items = document.getElementsByClassName('main');
// console.log(items);
// console.log(items[0]);

// Gets element by its Tag name
// var p = document.getElementsByTagName('p');
// console.log(p);
// for(var i = 0; i<p.length; i++){
// p[i].style.backgroundColor = 'red';
// }

// Query Selector
// var head = document.querySelector('h1');
// head.style.borderTop = 'solid 3px purple';
//
// // Query Selector All
// var