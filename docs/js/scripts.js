
const progress1 = document.getElementById("progress1");

document.getElementById("button1").addEventListener("click", () => {
    setInterval(() => {
        progress1.value += 10;
    }, 1000)
});

document.getElementById("button2").addEventListener("click", () => {
    progress1.value = 0
});

