let icondiv = document.getElementById("icon-div"); // icons div

let xmark = document.getElementById("xmark"); // cancel mark

let mark = document.getElementById("mark"); // bars mark

let header = document.getElementById("header"); // header

let main = document.getElementById("main"); // Main content of full body

let body = document.querySelector("body");

let flag = 0; // Counter for checker

icondiv.addEventListener("click",() => {
    if(flag === 0) {
        header.style.display = "block";
        main.style.display = "none";
        body.style.backgroundColor = "black";
        mark.style.display = "none";
        xmark.style.display = "block";
        flag = 1;
    }
    else {
        header.style.display = "none";
        main.style.display = "block";
        body.style.backgroundColor = "#1E1E1E";
        mark.style.display = "block";
        xmark.style.display = "none";
        flag = 0;
    }
})