'use strict'

document.getElementById('click-to-hide').addEventListener('click', hiddenCloseclick);
function hiddenCloseclick() {
    let x = document.getElementById("faceID");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}