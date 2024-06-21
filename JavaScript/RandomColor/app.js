let btn = document.querySelector("button");

btn.addEventListener("click", function () {

  console.log("generate color");

    //!for h1
  let h1 = document.querySelector("h1");
  let randomColor = getRandomColor();
  h1.innerText = randomColor;

  //! for div
  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;

  console.log("color updated ");
});


function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
