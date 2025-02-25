document.querySelectorAll("input[type='number']").forEach(input => {
    input.addEventListener("input", function () {
        updateSum();
        dropMoney(this);
    });
});

function updateSum() {
    let sum =
        (parseInt(document.getElementById("50e").value) || 0) * 50 +
        (parseInt(document.getElementById("20e").value) || 0) * 20 +
        (parseInt(document.getElementById("10e").value) || 0) * 10 +
        (parseInt(document.getElementById("5e").value) || 0) * 5 +
        (parseInt(document.getElementById("2e").value) || 0) * 2 +
        (parseInt(document.getElementById("1e").value) || 0) * 1 +
        (parseInt(document.getElementById("50c").value) || 0) * 0.5 +
        (parseInt(document.getElementById("20c").value) || 0) * 0.2 +
        (parseInt(document.getElementById("10c").value) || 0) * 0.1 +
        (parseInt(document.getElementById("5c").value) || 0) * 0.05;

    document.getElementById("sum").textContent = sum.toFixed(2) + "€";
}

function dropMoney(input) {
    let amount = parseInt(input.value) || 0;
    let type = input.id;
    let pile = document.getElementById("money-pile");

    for (let i = 0; i < amount; i++) {
        let money = document.createElement("div");
        money.classList.add("money");

        if (type.includes("e")) {
            money.classList.add("bill");
        } else {
            money.classList.add("coin");
        }

        let xPosition = Math.random() * 150 - 75; // Putoamisen leveys satunnaistettuna
        money.style.left = `calc(50% + ${xPosition}px)`;

        pile.appendChild(money);

        // Lisätään kasaus logiikka
        setTimeout(() => {
            money.classList.add("stacked");
        }, 1000);
    }
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
