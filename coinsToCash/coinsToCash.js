// Define an object and store it in a variable named piggyBank. The object should
//  have the following keys defined.

// quarters
// nickels
// dimes
// pennies

const piggyBank = {
  quarters: 189,
  nickels: 12,
  dimes : 120,
  pennies : 60,
  addQuater : function() {
      return (.25 * this.quarters)
  },
  addNickels : function(){
      return(.05 * this.nickels)
  },
  addDimes : function(){
      return(.10 * this.dimes)
  },
  addPennies : function() {
      return (.01 * this.pennies)
  }
}

const amountDollar = (piggyBank.addQuater() + piggyBank.addNickels() + piggyBank.addDimes() + piggyBank.addPennies())
console.log(amountDollar)
