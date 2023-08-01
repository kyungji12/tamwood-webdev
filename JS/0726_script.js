//1
// function myfunction() {
//   document.getElementById("txt1").value = document.URL;
// }

//2
// function myfunction() {
//   let resulttemp;
//   let celciustemp = Number(document.getElementById("txt1").value);
//   console.log(celciustemp);
//   resulttemp = celciustemp * 1.8 + 32;
//   document.write(resulttemp);
// }

//3
// function myfunction() {
//   let num1 = document.getElementById("txt1").value;
//   for (let i = 1; i <= 10; i++) {
//     document.write(num1, " x ", i, " = ", num1 * i, "<br />");
//   }
// }

//4
// function myfunction() {
//   let num1 = document.getElementById("txt1").value;
//   let isPrime = true;
//   for (let i = 2; i < num1; i++) {
//     if (num1 % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     document.write(num1 + " is a Prime Number");
//   } else {
//     document.write(num1 + " is not a Prime Number");
//   }
// }

//5
// function myfunction() {
//   let a = 0;
//   let b = 0;
//   let c = 0;

//   a = Number(document.getElementById("txt1").value);
//   b = Number(document.getElementById("txt2").value);

//   c = a;
//   a = b;
//   b = c;

//   document.write(
//     "The new value of Nunmber1 is " +
//       a +
//       "<br /> " +
//       "The new value of Number 2 is " +
//       b
//   );
// }

// 6
// function myfunction() {
//   let a = 0;
//   let b = 0;

//   a = Number(document.getElementById("txt1").value);
//   b = Number(document.getElementById("txt2").value);

//   if (a == b) {
//     document.write("Both the numbers are equal");
//   } else {
//     document.write("Both the numbers are not equal");
//   }
// }

//7
// function myfunction() {
//   let a = 0;
//   let b = 0;
//   let result = 0;

//   a = Number(document.getElementById("txt1").value);
//   b = Number(document.getElementById("txt2").value);

//   for (let i = a + 3; i <= b; i += 3) {
//     result = i;
//     document.write(result + "<br />");
//   }
// }

//8
// function myfunction() {
//   let a = 0;

//   a = Number(document.getElementById("num").value);
//   if (a == 0) {
//     document.write("Enter some value in the Year field");
//   }
//   if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
//     document.write(a + " is a leap year");
//   } else {
//     document.write(a + " is not a leap year");
//   }
// }

//9
// function myfunction() {
//   let length = 0;
//   let width = 0;
//   let result = 0;
//   length = Number(document.getElementById("num1").value);
//   width = Number(document.getElementById("num2").value);

//   result = 2 * length + 2 * width;

//   document.write("The perimeter of the rectangle is ", result);
// }

//10
// function myfunction() {
//   let a = Number(document.getElementById("num1").value);

// 삼각형
//   for (let i = 1; i <= a; i++) {
//     for (let j = 1; j <= i; j++) {
//       document.write("*");
//     }
//     document.write("<br />");
//   }

// 역삼각형
//   for (let i = a; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       document.write("*");
//     }
//     document.write("<br />");
//   }

// 다이아몬드
//   for (let i = 1; i <= a; i++) {
//     for (let j = 1; j <= i; j++) {
//       document.write("*");
//     }
//     document.write("<br />");
//   }
//   for (let i = a - 1; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       document.write("*");
//     }
//     document.write("<br />");
//   }
// }

//11
// function myfunction() {
//   let fname = document.getElementById("fname").value;
//   let length = fname.length;
//   //   for (let i = 0; i < length; i++) {
//   //     document.write(fname[i]);
//   //     document.write("<br />");
//   //   }

//   //역순
//   for (let i = length - 1; i >= 0; i--) {
//     document.write(fname[i]);
//     document.write("<br />");
//   }
// }

//12
// function myfunction() {
//   let text = document.getElementById("text").value;
//   let arr = text.split("");
//   let result = true;

//   for (let i = 0; i < arr.length / 2; i++) {
//     if (arr[i] != arr[arr.length - 1 - i]) {
//       result = false;
//     }
//   }
//   if (result) {
//     document.write(text, " is Palindrome");
//   } else {
//     document.write(text, " is not Palindrome");
//   }
// }

//13
function myfunction() {
  let rem,
    temp,
    final = 0;
  let number = document.getElementById("num").value;

  temp = number; // 121

  while (number > 0) {
    rem = number % 10; // 121 % 10 = 1 , 2
    number = parseInt(number / 10); //12 , 1
    final = final * 10 + rem; // 0*10+1 = 1, 1*10+2 = 12
    console.log(final); //
  }
  if (final == temp) {
    document.write(num, " is a Palindrom number");
  } else {
    document.write(num, " is not a Palindrom number");
  }
}
