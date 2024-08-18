// Fill The Progress

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 100) {
      spans.forEach((span) => {
        span.style.width = span.dataset.progress;
      });
    };
};



// let boxSpan = document.querySelectorAll(".stats .box .number");
// let stats = document.querySelector(".stats");
// let started = false;


// window.onscroll = function () {
//     if (window.scrollY >= stats.offsetTop) {
//       if (!started) {
//         boxSpan.forEach((span) => startCount(span));
//       }
//       started = true;
//     }
//   };

//   function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//       el.textContent++;
//       if (el.textContent == goal) {
//         clearInterval(count);
//       }
//     }, 2000 / goal);
//   };

// The End Of The Year Date To CountDown To

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();


let counter = setInterval(() => {

    // Get Date Now
    let dateNow  = new Date().getTime();

    // Find The Differnce Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff %  (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

