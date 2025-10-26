/* Class room activity:
1) Create a function that accepts only specific payment methods. */
/* type paymentmethod = "G-Pay" | "Card" | "Cash"

function makepayment(method:paymentmethod)
{
if(method==="G-Pay")
{
    console.log(`The payment has been made via ${method}`);
}
}
makepayment("G-Pay") */
function pay(method) {
    switch (method) {
        case "G-pay":
            console.log("The payment has been made via ".concat(method));
            break;
        case 'Credit Card':
            console.log("The payment has been made via ".concat(method));
            break;
        case "Debit Card":
            console.log("The payment has been made via ".concat(method));
            break;
        default: console.log("Invalid payment method ".concat(method));
    }
}
pay("G-pay");
pay("Credit Card");
pay("Cash");
