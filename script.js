document.querySelectorAll("input[type='number']").forEach(input => {
    input.addEventListener("input", function () {
        let amount = parseInt(this.value) || 0;
        let type = this.id;

        dropMoney(amount, type);
    });
});

function dropMoney(amount, type) {
    for (let i = 0; i < amount; i++) {
        let money = document.createElement("div");
        money.classList.add("money");

        if (type.includes("e")) {
            money.classList.add("bill"); // Setelit isompia
        } else {
            money.classList.add("coin"); // Kolikot pienempiä
        }

        // Arpoo horisontaalisen paikan ja pienet satunnaissiirtymät
        let xPosition = Math.random() * window.innerWidth * 0.6 + window.innerWidth * 0.2;
        money.style.left = xPosition + "px";

        document.getElementById("money-pile").appendChild(money);

        // Poistetaan vain ylimääräiset, mutta ei heti
        setTimeout(() => {
            money.classList.add("stacked");
        }, 2000);
    }
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
