const slider = document.querySelector(".slider"),
    active = document.querySelector("#active"),
    line1 = document.querySelector("#control1"),
    line2 = document.querySelector("#control2"),
    line3 = document.querySelector("#control3"),
    line4 = document.querySelector("#control4"),
    content = document.querySelector(".content");


line1.addEventListener("click", () => {
    slider.style.transform = "translateX(0)",
        active.style.top = 0;
    content.style.background = "#c4d719";
});

line2.addEventListener("click", () => {
    slider.style.transform = "translateX(-25%)",
        active.style.top = "80px";
    content.style.background = "#195bd7"
});

line3.addEventListener("click", () => {
    slider.style.transform = "translateX(-50%)",
        active.style.top = "160px";
    content.style.background = "#19d762"
});

line4.addEventListener("click", () => {
    slider.style.transform = "translateX(-75%)",
        active.style.top = "240px";
    content.style.background = "#d71919"
});


//bizada 4 ta content bor shunda 100% dan 25% bo'ladi