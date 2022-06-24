
const progress1 = document.getElementById("progress1");

document.getElementById("button1").addEventListener("click", () => {
    let interval = setInterval(() => {
        progress1.value += 5;
    }, 1000);
});

document.getElementById("button2").addEventListener("click", () => {
    clearInterval(interval);
    progress1.value = 0;
    alert('progress bar reset');
});

document.getElementById("button3").addEventListener("click", () => {
    clearInterval(interval);
    progress1.value = progress1.value;
    alert('progress bar value = ' + progress1.value);
});
