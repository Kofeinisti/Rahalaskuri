document.getElementById("calculate").addEventListener("click", function () {
    let sum =
        parseFloat(document.getElementById("50e").value) * 50 +
        parseFloat(document.getElementById("20e").value) * 20 +
        parseFloat(document.getElementById("10e").value) * 10 +
        parseFloat(document.getElementById("5e").value) * 5 +
        parseFloat(document.getElementById("2e").value) * 2 +
        parseFloat(document.getElementById("1e").value) * 1 +
        parseFloat(document.getElementById("50c").value) * 0.5 +
        parseFloat(document.getElementById("20c").value) * 0.2 +
        parseFloat(document.getElementById("10c").value) * 0.1 +
        parseFloat(document.getElementById("5c").value) * 0.05;

    document.getElementById("sum").textContent = sum.toFixed(2) + "€";
});

// Teeman vaihtaja
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
