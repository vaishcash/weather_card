// // // const buttons = document.querySelectorAll(".button");
// // // console.log(buttons);
// // // const body = document.querySelector("body");

// // // buttons.forEach((button) => {
// // //   console.log(button);
// // //   button.addEventListener("click", (e) => {
// // //     console.log(e);
// // //     console.log(e.target);
// // //     const key = e.target.id;
// // //     switch (key) {
// // //       case key:
// // //         body.style.backgroundColor = key;
// // //         console.log("grey");

// // //         break;
// // //     }
// // //   });
// // // });

// // // const form = document.querySelector("form");

// // // form.addEventListener("submit", (e) => {
// // //   e.preventDefault();

// // //   const height = parseInt(document.querySelector("#height").value);
// // //   const weight = parseInt(document.querySelector("#weight").value);
// // //   const results = document.querySelector("#results");

// // //   if ((height === "") | (height < 0) || isNaN(height)) {
// // //     results.innerHTML = `please give a valid ${height} `;
// // //   } else if ((weight === "") | (weight < 0) || isNaN(weight)) {
// // //     results.innerHTML = `please give a valid ${weight} `;
// // //   } else {
// // //     const BMI = (weight / ((height * height) / 10000)).toFixed(2);

// // //     if (BMI < 18.5) {
// // //       results.innerHTML = `<span>${BMI}</span> you are underweight`;
// // //     } else if (BMI > 18.5 && BMI < 24.9) {
// // //       results.innerHTML = `<span>${BMI}</span> you are normal`;
// // //     } else {
// // //       results.innerHTML = `<span>${BMI}</span> you are overweight`;
// // //     }
// // //     // results.innerHTML = `<span>${BMI}</span>`;
// // //   }
// // // });

// // // const clock = document.getElementById("clock");

// // // setInterval(() => {
// // //   let date = new Date();
// // //   clock.innerHTML = date.toLocaleTimeString();
// // //   console.log(date.toLocaleDateString());
// // // }, 1000);
// // // debugger;
// // // const randomNumber = parseInt(Math.random() * 100 + 1);

// // // const submit = document.getElementById("submitbutton");
// // // const userguess = document.getElementById("guessgame");
// // // const previousAttempt = document.getElementById("previous");
// // // const restAttempt = document.getElementById("attempts");
// // // const lowHigh = document.getElementById("lowHigh");
// // // const result = document.getElementsByClassName("result");
// // // console.log(result);
// // // const p = document.createElement("p");

// // // let preGuess = [];
// // // let numGuess = 1;

// // // let playGame = true;

// // // if (playGame) {
// // //   submit.addEventListener("click", function (e) {
// // //     e.preventDefault();
// // //     const guess = parseInt(userguess.value);
// // //     console.log(guess);
// // //     validateGuess(guess);
// // //   });
// // // }

// // // function validateGuess(guess) {
// // //   if (isNaN(guess)) {
// // //     alert("please enter a valid number");
// // //   } else if (guess < 1 || guess > 100) {
// // //     alert("please enter a number between 1 and 100");
// // //   } else {
// // //     preGuess.push(guess);
// // //   }
// // //   if (numGuess < 10) {
// // //     displayGuess(guess);
// // //     displayMessage(`game over, the number was ${randomNumber}`);
// // //   }
// // //   //
// // // }

// // // function checkGuess(guess) {
// // //   //
// // // }

// // // function displayGuess(guess) {}
// // // function DisplayMessage(msg) {
// // //   //
// // // }

// // // function newGame() {}
// // // function endGame() {}

// // // function submitHandeler(e) {
// // //   e.preventDefault();
// // //   console.log(e);

// // //   console.log(userguess.value);

// // //   if (userguess.value === randomNumber) {
// // //     result.innerHTML = "you won";
// // //   } else result.innerText = randomNumber;
// // // }

// // const clock = document.getElementById("clock");



// // // const arr = [1, 2, 3, 4, 5, 6];
// // // const google = fetch("https://www.google.com");
// // // console.log(google);

// // const a = new Promise((resolve, reject) => {
// //   // console.log("a");
// //   // reject("gdggdgd");
// //   // if(arr.find(5)){
// //   //   resolve("5 is found");

// //   // }
// //   // else{
// //   //   reject("5 is not found");
// //   // }
// //   const data = [];
// //   setTimeout(() => {
// //     const arr = new Array(5);
// // arr.map ((item)=>{
// // return Math.floor(Math.random()*10+1)

// // })

// //     console.log({ arr });
// //     console.log(arr[3]);
// //   }, 2000);
// // });
// // a.then((resolve) => console.log("sucess", resolve));
// // a.catch(() => console.log("catch"));

// const arr = new Array(10).fill(5);
// let data = [];
// setTimeout(() => {
//   arr.forEach((i) => {
//     const nu = Math.floor(Math.random() * 10 + 1);
//     // console.log("🚀 ~ arr.forEach ~ nu:", nu);
//     data.push(nu);
//     console.log("🚀 ~ arr.forEach ~ data:", data);
//   });
// }, 2000);
// // console.log(Math.random());
// // console.log("🚀 ~ nu:", nu);
// console.log("🚀 ~ setTimeout ~ data:", data);

// data.forEach((i) => {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else console.log(i + " is odd");
// });
// console.log("🚀 ~ arr:------------------", { arr, data });

  setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    console.log(date.toLocaleDateString());
  }, 1000);


const getWeather = async () => {
  try {
    const inputCity = document.getElementById("city").value;
    const temp = document.getElementById("temp");
    const cityName = document.getElementById("cityName");

    const weather = `https://api.tomorrow.io/v4/weather/forecast?location=${inputCity}&apikey=u7G8ATCE31OJl1Qh20aZajRz7bRmeiDy`;
    const result = await fetch(weather);
    const data = await result.json();
    console.log("🚀 ~ data:", data);
    temp.innerText = data.timelines.minutely[0].values.temperature + "°C";
    cityName.innerText = data.location.name || "null";
  } catch (error) {}
};
