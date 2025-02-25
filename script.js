document.getElementById("calculate").addEventListener("click", function () {
    let sum =
        parseInt(document.getElementById("50e").value) * 50 +
        parseInt(document.getElementById("20e").value) * 20 +
        parseInt(document.getElementById("10e").value) * 10 +
        parseInt(document.getElementById("5e").value) * 5 +
        parseInt(document.getElementById("2e").value) * 2 +
        parseInt(document.getElementById("1e").value) +
        parseInt(document.getElementById("50c").value) * 0.5 +
        parseInt(document.getElementById("20c").value) * 0.2 +
        parseInt(document.getElementById("10c").value) * 0.1;
    
    document.getElementById("sum").textContent = sum.toFixed(2) + "€";
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
