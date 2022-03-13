// javaScript Problem Solving

// Problem 01
/* Budget Calculator */

function budgectCalc(computer = 0, watch = 0, coffee = 0) {
  var perComputerPrice = 1000;
  var perWatchPrice = 260;
  var perCoffeePrice = 5;
  if (
    typeof computer == 'number' &&
    typeof watch == 'number' &&
    typeof coffee == 'number'
  ) {
    var totalComputerPrice = perComputerPrice * computer;
    var totalWatchPrice = perWatchPrice * watch;
    var totalCoffeePrice = perCoffeePrice * coffee;

    var totalPrice = totalComputerPrice + totalWatchPrice + totalCoffeePrice;
    return totalPrice;
  } else {
    return 'Please, Provide a valid number.'
  }
}

var totalbudget = budgectCalc(2, 3, 1);
console.log("The total cost is " + totalbudget + " Taka.");


// Problem 02
/* Product Search  */

var products = [
  {
      id: 1,
      title: "laptop",
      price: 567,
      description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },
  {
      id: 2,
      title: "Mobile",
      price: 367,
      description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },
  {
      id: 3,
      title: "Watch",
      price: 180,
      description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },
  {
      id: 4,
      title: "Coffee",
      price: 40,
      description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
  },

];

function productSearch(productName, productsList ) {

  var searchResult = [];
  for (var i = 0; i < productsList.length; i++){
    var element = productsList[i];
    if (element.title.toLowerCase() == productName.toLowerCase()) {
      searchResult.push(element);
    }
    
  }
  if (searchResult.length == 0) {
    return "product does not found."
  } else {
    return searchResult;
  }

}
var product = productSearch('mobile', products);
console.log(product);


// Problem 03
/* Income Of a Year  */

function incomeOfYear(year) {
  var dailyIncome = 10;
  if (year%4==0 && year%100!=0 || year%400 ==0) {
    var yearlyIncome = dailyIncome*366;
  } else {
    var yearlyIncome = dailyIncome*365;
  }
  return yearlyIncome;
}

var incomeOf2009 = incomeOfYear(2009);
console.log("My income of class 5 was"+" " +incomeOf2009 +" Taka.");