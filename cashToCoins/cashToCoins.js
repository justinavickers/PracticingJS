// Now do the reverse. Convert the dollar amount into the coins that make up that
// dollar amount. The final result is an object with the correct number of quarters,
//  dimes, nickels, and pennies.

const dollarAmount = 0.10
const piggyBank = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0,
}

// Your magic code here
let cents = dollarAmount * 100

piggyBank.quarters =  Math.floor(cents/25)
cents = cents - (piggyBank.quarters * 25)
piggyBank.dimes = Math.floor(cents / 10)
cents = cents - (piggyBank.dimes * 10)
piggyBank.nickels = Math.floor(cents / 5)
cents = cents - (piggyBank.nickels * 5)
piggyBank.pennies = Math.floor(cents)

console.log(piggyBank)


