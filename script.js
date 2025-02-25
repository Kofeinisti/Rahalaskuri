function laske() {
    let summa = 0;
    summa += parseInt(document.getElementById("e50").value) * 50;
    summa += parseInt(document.getElementById("e20").value) * 20;
    summa += parseInt(document.getElementById("e10").value) * 10;
    summa += parseInt(document.getElementById("e5").value) * 5;
    summa += parseInt(document.getElementById("e2").value) * 2;
    summa += parseInt(document.getElementById("e1").value) * 1;
    summa += parseInt(document.getElementById("c50").value) * 0.5;
    summa += parseInt(document.getElementById("c20").value) * 0.2;
    summa += parseInt(document.getElementById("c10").value) * 0.1;
    summa += parseInt(document.getElementById("c05").value) * 0.05;

    document.getElementById("summa").textContent = summa.toFixed(2);
}
