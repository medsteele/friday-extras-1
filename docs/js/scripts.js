
const progress1 = document.getElementById("progress1");

let progressBarInterval = setInterval(() => {progress1.value += 5;}, 1000);

document.getElementById("button1").addEventListener("click", () => {
    clearInterval(progressBarInterval);
    progressBarInterval = progressBarInterval = setInterval(() => {progress1.value += 5;}, 1000);
    alert('progress bar restarted');  
});

document.getElementById("button2").addEventListener("click", () => {
    clearInterval(progressBarInterval);
    progress1.value = progress1.value;
    alert('progress bar value = ' + progress1.value);
});

document.getElementById("button3").addEventListener("click", () => {
    clearInterval(progressBarInterval);
    progress1.value = 0;
    alert('progress bar reset');
});
