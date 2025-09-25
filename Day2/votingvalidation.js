function Voting() {
    let age = 18;

    if (age >= 18) {
        console.log("You are eligible to vote");

    } else {
        console.log("You are not eligible to vote");

    }
}
Voting()

function voting1() {
    let age = 17;
    let message = age >= 18 ? "you can vote" : "You can't vote";
    console.log(message);
}
voting1()