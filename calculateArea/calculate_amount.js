let amount1;
let amount2;
let amount3;


function calculateAmount() {
    amount1 = parseFloat(document.getElementById("grocery1").value);
    amount2 = parseFloat(document.getElementById("grocery2").value);
    amount3 = parseFloat(document.getElementById("grocery3").value);
    let totalAmount = amount1 + amount2 + amount3;
    document.getElementById("result").innerText = "Total Amount: " + totalAmount;
}