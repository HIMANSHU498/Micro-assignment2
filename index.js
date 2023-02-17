var count = 0;

document.getElementById("counter").innerText = count;
//increment function
function increment() {
  count = count + 1;
  count = count < 0 ? 0 : count;
  document.getElementById("counter").innerText = count;
}
//decrement function
function decrement() {
  count = count - 1;
  count = count < 0 ? 0 : count;
  document.getElementById("counter").innerText = count;
}
//reset function
function reset() {
  count = 0;

  document.getElementById("counter").innerText = count;
}
