// function myfunction() {
//   const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;

//   document.write(firstName);
//   document.write(lastName);
// }
// function myfunction2() {
//   const inputNumber = document.getElementById("number").value;

//   if (inputNumber % 2 == 0) {
//     document.write("even number");
//   } else {
//     document.write("odd number");
//   }
// }
// let num1;
// let num2;
// let result;
// function add() {
//   num1 = document.getElementById("num1").value;
//   num2 = document.getElementById("num2").value;
//   result = Number(num1) + Number(num2);
//   document.write(result);
// }
// function sub() {
//   num1 = document.getElementById("num1").value;
//   num2 = document.getElementById("num2").value;
//   result = Number(num1) - Number(num2);
//   document.write(result);
// }

// function maxNum() {
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);
//   const num3 = Number(document.getElementById("num3").value);
//   var maxNum = Math.max(num1, num2, num3);
//   document.write(maxNum, " is max");
// }

// function loopfunction() {
//   const inputNum = Number(document.getElementById("num").value);
//   for (let i = 0; i < inputNum; i++) {
//     document.write("*");
//   }
// }

// function changeText() {
//   //   const selectBtn = document.getElementById("btn1");
//   document.getElementById("showText").innerHTML = "Hello, from Hawaii";
// }

function calcPrice() {
  const itemNum1 = Number(document.getElementById("item1").value);
  const itemNum2 = Number(document.getElementById("item2").value);

  const priceNum1 = Number(document.getElementById("price1").value);
  const priceNum2 = Number(document.getElementById("price2").value);

  let totalPrice;
  totalPrice = itemNum1 * priceNum1 + itemNum2 * priceNum2;

  document.getElementById("total").innerHTML = "$" + totalPrice;
}
