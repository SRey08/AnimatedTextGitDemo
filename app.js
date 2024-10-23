function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

// to change each letter independently 

const letters = document.querySelectorAll('.letter');
const intervalid = setInterval(function () {
    for (let lettoer of letters) {
        letter.style.color = randomRGB();
    }
}, 2000);