//First Problem Solve.

function kilometerToMeter(distance) {
    if (distance >= 0) {
        var result = distance * 1000;
    }
    else {
        return false;
    }
    return result;
}

var kilometerResult = kilometerToMeter(5);
console.log(kilometerResult);

//Second Problem Solve
function budgetCalculator(watch, mobile, laptop) {
    watchPrice = watch * 50;
    mobilePrice = mobile * 100;
    laptopPrice = laptop * 500;
    totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}
var budget = budgetCalculator(5, 6, 10);
console.log(budget);

//Third Problem Solve
function hotelCost(day) {
    var roomRent = 0;
    if (day <= 10) {
        roomRent = day * 100;
    }
    else if (day <= 20) {
        var first = 10 * 100;
        var rent = day - 10;
        var second = rent * 80;
        roomRent = first + second;
    }
    else {
        var first = 10 * 100;
        var second = 10 * 80;
        var rent = day - 20;
        var third = rent * 50;
        var roomRent = first + second + third;
    }
    return roomRent;
}
var output = hotelCost(19);
console.log(output);

//Fourth Problem Solve

function megaFriend(name) {
    var biggestName = '';
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > biggestName.length) {
            biggestName = name[i];
        }
    }
    return biggestName;
}
var friends = ["fahmida", "anika", "faria", "shahnaz Begum", "fahmida", "Sweety Islam"];
var number = megaFriend(friends);
console.log(number);