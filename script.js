document.querySelectorAll("input[type='number']").forEach(input => {
    input.addEventListener("input", function () {
        let amount = parseInt(this.value) || 0;
        let type = this.id;

        dropMoney(amount, type);
    });
});

function dropMoney(amount, type) {
    let pile = document.getElementById("money-pile");

    for (let i = 0; i < amount; i++) {
        let money = document.createElement("div");
        money.classList.add("money");

        if (type.includes("e")) {
            money.classList.add("bill"); // Setelit isompia
        } else {
            money.classList.add("coin"); // Kolikot pienempiä
        }

        // Horisontaalinen sijainti satunnaisesti kasan sisällä
        let xPosition = Math.random() * 200 - 100;
        money.style.left = `calc(50% + ${xPosition}px)`;

        pile.appendChild(money);

        // Kun raha putoaa alas, se kasautuu
        setTimeout(() => {
            money.classList.add("stacked");
        }, 1500);
    }
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
