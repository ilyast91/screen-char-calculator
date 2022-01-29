function calculateResult() {
    let l = parseInt(document.getElementById("screen_distance_input").value);
    let a = parseInt(document.getElementById("char_angle_opt_input").value);
    let min = calculate(l, 16);
    let opt = calculate(l, a);
    let max = calculate(l, 60);
    document.getElementById("char_height_min").textContent = min.toLocaleString();
    document.getElementById("char_height_opt").textContent = opt.toLocaleString();
    document.getElementById("char_height_max").textContent = max.toLocaleString();
}

function calculate(l, a) {
    return 2 * l * Math.tan(a * 2 * Math.PI / (360 * 2 * 60));
}

document.addEventListener('DOMContentLoaded', ()=>{
    calculateResult();
});
document.getElementById("action_calculate").addEventListener('click', () => {
    calculateResult();
})