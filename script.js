document.getElementById("calculate").addEventListener("click", function () {
    let sum = 0;

    function addMoney(id, value, multiplier) {
        let amount = parseFloat(document.getElementById(id).value);
        sum += amount * multiplier;
        dropMoney(amount, id); // Kutsutaan animaatiota
    }

    addMoney("50e", 50, 50);
    addMoney("20e", 20, 20);
    addMoney("10e", 10, 10);
    addMoney("5e", 5, 5);
    addMoney("2e", 2, 2);
    addMoney("1e", 1, 1);
    addMoney("50c", 0.50, 0.5);
    addMoney("20c", 0.20, 0.2);
    addMoney("10c", 0.10, 0.1);
    addMoney("5c", 0.05, 0.05);

    document.getElementById("sum").textContent = sum.toFixed(2) + "€";
});

function dropMoney(amount, type) {
    for (let i = 0; i < amount; i++) {
        let money = document.createElement("div");
        money.classList.add("money");

        if (type.includes("e")) {
            money.classList.add("bill"); // Setelit
        } else {
            money.classList.add("coin"); // Kolikot
        }

        money.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(money);

        setTimeout(() => {
            money.remove();
        }, 3000); // Poistetaan 3s jälkeen
    }
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
