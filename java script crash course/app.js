const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {

    if (myCheckbox.checked) {
        subResult.textContent = `You are subcribed!`;
    }
    else {
        subResult.textContent = `You are NOT subscribed!`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if (mastercardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else {
        paymentResult.textContent = `You must select a payment type`;
    }
}