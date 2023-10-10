const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;
// var getData = document.getElementById("demo").innerHTML;
// console.log(newArr);
// getData = newArr;
// console.log(getData);

function myFunction(num) {
  return num * 10;
}
