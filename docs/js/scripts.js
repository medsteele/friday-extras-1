
const progress1 = getElementById("progress1");

document.getElementById("button1").addEventListener("click", () => {
    progress1.value = 90;
});

document.getElementById("button2").addEventListener("click", () => {
    progress1.value = 10;
});

