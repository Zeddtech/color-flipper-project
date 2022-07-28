
const btn = document.querySelector(".btn");
const spancolor = document.querySelector(".color");

function getrandof_a() {
  const randomNumber = Math.random();
  const rand_a = Math.round(randomNumber * 10) / 10;
  return rand_a;
}

function getrandnumof_rgb() {
  const randomNumber = Math.random() * 255;
  const rand_rgb = Math.floor(randomNumber);
  return rand_rgb;
}

btn.addEventListener("click", function () {
  let a = getrandof_a();
  let rgb1 = getrandnumof_rgb();
  let rgb2 = getrandnumof_rgb();
  let rgb3 = getrandnumof_rgb();

  document.body.style.backgroundColor = `rgba(${rgb1},${rgb2},${rgb3})`;
  spancolor.textContent = `rgba(${rgb1},${rgb2},${rgb3})`;
  spancolor.style.color = `rgba(${rgb1},${rgb2},${rgb3})`;
});
