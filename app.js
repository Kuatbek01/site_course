// var num = 5;
// console.log(num)

// var num_1 = 5;
// var num_2 = 10;

// result = num_1 - num_2;

// console.log("Result is " + result)
// var num_3 = 5;
// num_3 += 7;
// console.log(num

// var number = 5;
// if (number == 5) {
//     console.log("ok")
// }

// var number = 5;
// var isHasCode = true;

// if (number == 5 || !isHasCode) {
// console.log("true!")
// }

// var stroka = "no";

// switch(stroka) {
//     case "2":
//         console.log("ok");
//         break;
//     case "word":
//         console.log("true");
//         break;
//     default:
//         console.log("breK");
//         break;
// }


// var matrix = [
//     [0, 9 ,10], ["traoka", 1, 4], ["word", 6, 7]
// ];

// matrix [2] [0] = "ne dumaiy";

// console.log(matrix)


// for(var i = 10; i < 100; i += 10){
// console.log(i)
// } 


// var i = 1000;

// while(i > 100){
//     i -= 100;
//     console.log(i)
// }

// var x = 67;
// do {
// console.log(x);
// x += 13
// } while(x < 103);

// for (var x = 10; x < 100; x += 11){
//     if (x % 2 == 0)
//     continue;

// console.log(x);
// }

// var arr = [0, 3, 5, 6, 8, 4];

// for ( var i = 0; i <= arr.length; i += 2) {
//     arr[i] /= 3;
//     console.log("Element " + (i +1) +":" + arr[i]);
    
// }


// alert ("What's weather is good?");


// var data = confirm("Where are you?")
// console.log(data)

//  var data = prompt("How old are you?");
//  if (data >= 20) {
//      console.log("Welcome")
//  }  else{
//      console.log("You aren't 20 old year!")
//  } 

// var person = null;

// if (confirm("Are you confident?")) {
//     person = prompt("Enter you name");
//     alert("Hello, " + person);
// } else{
//     alert("You entered 'Default'")
// }

// var name; 

// if (confirm("What's your name?")) {
//     person = prompt("Enter your name here!");
//     alert("Your name is " + person);
// } else {
//     alert("Thanks for your attention")
// }

//  function info (number) {
//      console.log( number + "34");

//  }

//  info(23);


// var counter = 0;

// function onСlickButton(el) {
//    counter++;
//    el.innerHTML = "Вы нажали на кнпоку: " + counter;
//    el.style.background = "grey"
//    el.style.cssText = "border-radius: 5px"

// }

// function onInput(el) {
//    if(el.value == "Hello")
//       alert("Hi Sanzhik");
//    console.log(el.value);
// }
// var text = document.getElementById("text");
// text.style.color = "grey";

// var spans = document.getElementsByTagName("span");

// for (var i = 0; i < spans.length; i++) {
//    console.log(spans[i].innerHTML);
// }

// document.getElementById("main-form").addEventListener("submit", checkForm);

// function checkForm(event) {

//    event.preventDefault();
//    var el = document.getElementById("main-form")

//    var name = el.name.value;
//    var pass = el.pass.value;
//    var repass = el.repass.value;
//    var state = el.state.value;

//    var fail = "";

//    if(name == "" || pass == "" || state =="")
//       fail = "Заполните все поля";
//    else if (name.length <= 1 || name.length > 50)
//       fail = "Введите корректное имя";
//    else if (pass != repass)
//       fail = "Пароли должны совпадать";
//    else if (pass.split("&").length > 1)
//       fail = "Некорректный пароль";
//    if (fail != "") {
//       document.getElementById("error").innerHTML = fail; 
//    } else {
//       alert("Все данные корректны заполнены");
//       window.location = "http://itproger.com"
//    }
//    return false; 
// }


// setInterval(my_func, 1000);

// var counter = 0;

// var id = setInterval(my_func, 1000);
// function my_func() {
//    counter++;
//    console.log("Counter: " + counter);

// if (counter == 3)
//    clearInterval(id);

// }



// setTimeout(function(){
//    console.log("Time is working!");
// }, 4000);

setTimeout(my_func, 3000);

function my_func() {
   console.log("Timer is working!")
}