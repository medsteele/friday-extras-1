
const progress1 = document.getElementById("progress1");

let progressBarInterval = setInterval(() => {
        progress1.value += 2;}, 500);

document.getElementById("button1").addEventListener("click", () => {
    clearInterval(progressBarInterval);
    progressBarInterval = setInterval(() => {
            progress1.value += 2;}, 500);
    alert('progress bar restarted');
});

document.getElementById("button2").addEventListener("click", () => {
    clearInterval(progressBarInterval);
    progress1.value = progress1.value;
    alert('progress bar paused\nprogress bar value = ' + progress1.value);
});

document.getElementById("button3").addEventListener("click", () => {
    clearInterval(progressBarInterval);
    progress1.value = 0;
    alert('progress bar reset');
});
