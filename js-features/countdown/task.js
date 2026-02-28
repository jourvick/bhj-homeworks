const timer = document.getElementById("timer");
let [hours, minutes, seconds] = timer.textContent.split(":").map(Number);
let totalSeconds = hours * 3600 + minutes * 60 + seconds;

const countDown = function () {
  if (totalSeconds > 0) {
    totalSeconds -= 1;

    let h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    let m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    let s = String(totalSeconds % 60).padStart(2, "0");
    timer.textContent = `${h}:${m}:${s}`;
    } else {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе");
        
        const file = "https://file-examples.com/wp-content/storage/2017/02/file-sample_100kB.doc";
        const link = document.getElementById("downloadLink");
        link.href = file;
        link.setAttribute("download", "file.doc");
        link.setAttribute("target", "_blank");

        link.click();
    }
}
const intervalId = setInterval (countDown, 1000);
