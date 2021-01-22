// https://github.com/eli-aimina/js-assignment

//Convert Kilometer to meter
function kilometerToMeter(kilometer) {
    var meter = 0;
    //Check if the input is a number or not negative number.
    if (isNaN(kilometer) || parseFloat(kilometer) < 0) {
        return "Please input valid value.";
    } else {
        meter = parseFloat(kilometer) * 1000; // converting kilometer to meter
        return meter;
    }
}

//Calculate budget
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    var totalBudget = 0;
    var watchPrice = 50,
        phonePrice = 100,
        laptopPrice = 500;
    if (isNaN(numberOfWatch) || parseInt(numberOfWatch) < 0) {
        return "Please input valid value for watch.";
    } else if (isNaN(numberOfPhone) || parseInt(numberOfPhone) < 0) {
        return "Please input valid value for phone.";
    } else if (isNaN(numberOfLaptop) || parseInt(numberOfLaptop) < 0) {
        return "Please input valid value for laptop.";
    }

    totalBudget = (parseInt(numberOfWatch) * watchPrice) + (parseInt(numberOfPhone) * phonePrice) + (parseInt(numberOfLaptop) * laptopPrice);
    return totalBudget;
}

//Calculate Hotel Cost
function hotelCost(numberOfDays) {
    var totalRent = 0;
    var firstPartPrice = 100,
        secondPartPrice = 80,
        lastPartPrice = 50;

    if (isNaN(numberOfDays) || parseInt(numberOfDays) < 0) { // check if the input value number or not negative
        return "Please input valid value";
    } else {
        numberOfDays = parseInt(numberOfDays);
        if (numberOfDays <= 10) { //Calculation for 1-10 days
            totalRent = numberOfDays * 100;
        } else if (numberOfDays <= 20) { // Calculation for 1-20days
            var firstPart = 10 * firstPartPrice;
            var remaining = numberOfDays - 10;
            var secondPart = remaining * secondPartPrice;
            totalRent = firstPart + secondPart;
        } else { // Calculation for more than 20days
            var firstPart = 10 * firstPartPrice;
            var secondPart = 10 * secondPartPrice;
            var remaining = numberOfDays - 20;
            var lastPart = remaining * lastPartPrice;
            totalRent = firstPart + secondPart + lastPart;
        }
        return totalRent;
    }
}

//Find the mega friend from an array
function megaFriend(friendsName) {
    if (friendsName.length < 1) {
        return "Input array is empty.";
    }
    var max = 0;
    var megaFriendName = "";
    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > max) {
            max = friendsName[i].length;
            megaFriendName = friendsName[i];
        }
    }

    //Check if megafriend found.
    if (megaFriendName) {
        return megaFriendName;
    } else {
        return 'Input data contains unexpected value';
    }
}