function calculate(){
    const total = document.getElementById("total-box").value;
    const tipRate = document.getElementById("tip-rate").value;

    const tax = Number(total) * (5.5 / 100);
    const tip = Number(total) * (Number(tipRate) / 100);
    const grandTotal = Number(total) + tax + tip;

    document.getElementById("tip-amount").innerHTML = String(tip.toFixed(2));
    document.getElementById("tax").innerHTML = String(tax.toFixed(2));
    document.getElementById("grand-total").innerHTML = String(grandTotal.toFixed(2));
}

document.getElementById("calculate-button").addEventListener("click", calculate);