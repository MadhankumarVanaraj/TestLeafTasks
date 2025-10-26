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

// 2) Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal"

/* type paymentmethods = "UPI" | "CreditCard" | "PayPal"

function paymentprocess(method:paymentmethods)
{
    if(method === "UPI")
    {
        console.log(`The payment has been made via ${method}`);
    }else if(method ==="CreditCard")
    {
        console.log(`The payment has been made via ${method}`);
        
    }else if(method ==="PayPal")
        {
        console.log(`The payment has been made via ${method}`);
    }
        
}
paymentprocess("PayPal")
 */


/* 
Class room activity -3:

Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.
Call the function with "UPI" and "CreditCard" as arguments. */

type paymentype = "G-pay" | "Credit Card" | "Debit Card"

function pay(method:paymentype|string)
{
    switch(method)
    {
        case "G-pay":
        console.log(`The payment has been made via ${method}`);
        break;

        case 'Credit Card':
        console.log(`The payment has been made via ${method}`);
        break;

        case "Debit Card":
        console.log(`The payment has been made via ${method}`);
        break;
    
        default: console.log(`Invalid payment method ${method}`);
        
    }

}
pay("G-pay")
pay("Credit Card")
pay("Cash")