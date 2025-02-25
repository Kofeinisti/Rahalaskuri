function laske() {
    let summa = 0;
    summa += parseFloat(document.getElementById("e50").value) * 50;
    summa += parseFloat(document.getElementById("e20").value) * 20;
    summa += parseFloat(document.getElementById("e10").value) * 10;
    summa += parseFloat(document.getElementById("e5").value) * 5;
    summa += parseFloat(document.getElementById("e2").value) * 2;
    summa += parseFloat(document.getElementById("e1").value) * 1;
    summa += parseFloat(document.getElementById("c50").value) * 0.5;
    summa += parseFloat(document.getElementById("c20").value) * 0.2;
    summa += parseFloat(document.getElementById("c10").value) * 0.1;
    summa += parseFloat(document.getElementById("c05").value) * 0.05;

    document.getElementById("summa").textContent = summa.toFixed(2);
}
