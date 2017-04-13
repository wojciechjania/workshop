document.addEventListener('DOMContentLoaded', function () {
var next = document.getElementById('nextPicture');
var prev = document.getElementById('prevPicture');
var elemTab = document.querySelectorAll('.slider li');
var index = 0;

console.log(next);
console.log(prev);
console.log(elemTab);

elemTab[index].classList.add("visible");

prev.addEventListener("click", function(event) {
  console.log("prev");
  elemTab[index].classList.remove("visible");
  index--;
  if (index < 0) {
    index = elemTab.length-1;
  }
  elemTab[index].classList.add("visible");
  console.log(index);
})

next.addEventListener("click", function (event) {
  console.log("działa");
  elemTab[index].classList.remove("visible");
  index++;
  if (index > elemTab.length-1) {
    index = 0;
  }
  elemTab[index].classList.add("visible");
  console.log(index);

})


});
