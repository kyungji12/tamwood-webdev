// function myfunction() {
//   let fname = document.getElementById("fname").value;

//   //   for (let i = 0; i < fname.length; i += 2) {
//   //     document.write(fname[i]);
//   //   }

//   // // String Method
//   // // Length
//   // document.write("Length Operation : ", fname.length, "<br />");

//   // // Slice
//   // let sliceStr = fname.slice(-1, -3);
//   // document.write("Slice Operation : ", sliceStr, "<br />");

//   // // SubString
//   // let substr1 = fname.substring(-1, -3);
//   // document.write("Substring Operation : ", substr1, "<br />");

//   //   // Replace
//   //   let names = " Hi from Vancouver, Good Evenign Vancouver";
//   //   let result = names.replaceAll("Vancouver", "Calgary");
//   //   document.write(result);

//   // // Upper Case
//   // document.write(fname.toUpperCase());
//   // // Lower Case
//   // document.write(fname.toLowerCase());

//   // // Reverse String 1
//   // let result = fname.split('').reverse().join('');
//   // document.write(result);

//   // // Reverse String 2
//   // for (let i = fname.length - 1; i >= 0; i--) {
//   //   document.write(fname[i]);
//   // }

//   // // Reverse String 3
//   // let splitresult = fname.split(' ');
//   // for (let i = 0; i < fname.length / 2; i++) {
//   //   if (fname[i] == fname[fname.length - i - 1]) {
//   //     document.write(
//   //       fname[i],
//   //       " and ",
//   //       fname[fname.length - i - 1],
//   //       " are same",
//   //       "<br/>"
//   //     );
//   //   } else {
//   //     document.write(
//   //       fname[i],
//   //       " and ",
//   //       fname[fname.length - i - 1],
//   //       " are not same",
//   //       "<br/>"
//   //     );
//   //   }
//   // }

//   // // Making Name : Yooni Yoon -> Yooni Y.
//   // let splitresult = fname.split(" ");
//   // document.write(splitresult[0] + " " + splitresult[1][0] + ".");
// }

// function myfunction() {
//   let fname = document.getElementById("fname").vlaue;
//   let lname = document.getElementById("lname").vlaue;
//   let address = document.getElementById("address").vlaue;
//   let pnumber = document.getElementById("pnumber").vlaue;
//   let pcode = document.getElementById("pcode").vlaue;
//   let city = document.getElementById("city").vlaue;
//   let country = document.getElementById("country").vlaue;
//   let information = [fname, lname, address, pnumber, pcode, city, country];
//   let result = true;

//   for (let i = 0; i < information.length; i++) {
//     if (!information[i]) {
//       result = false;
//     }
//   }
//   if (!result) {
//     document.write("Please fill all information");
//   }
// }

// function myfunction() {
//   let uname = document.getElementById("uname").value;
//   let pwd = document.getElementById("pwd").value;

//   if (uname && pwd) {
//     let newpwd = pwd + uname.slice(-4);

//     document.write("Username is ", uname, "<br/>");
//     document.write("Password is ", newpwd);
//   } else {
//     document.write("Please fill all information");
//   }
// }

// var count = 0;
// function myfunction() {
//   count = count + 1;
//   document.getElementById("result").value = count;
// }

function myfunction() {
  let src = document.getElementById("myImg").src;
  if (src.includes("yooni")) {
    document.getElementById("myImg").src = "../image/1ny.jpeg";
  } else {
    document.getElementById("myImg").src = "../image/yooni_nobg.png";
  }
}
