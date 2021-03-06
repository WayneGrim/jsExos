"use strict";

// --------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return 42;
}

// --------------------------------------------------- Function with arguments -------------------------------------
export function myFct(arg1, arg2) {
    return arg1 + arg2;
}

// --------------------------------------------------- Messi’s Goal Total-------------------------------------
export function goalTotal(a, b, c) {
    return a + b + c;
}

// --------------------------------------------------- Grasshopper Order of Operations-------------------------------------
export function GrasshopperOrder() {
    return (2 + 2) * (2 + 2) * 2;
}

// --------------------------------------------------- Return the First Element in an Array-------------------------------------
export function getFirstValue(tab) {
    tab = [58, 25, 15, 45, 78]
    return tab[0];
}

// --------------------------------------------------- Find the Smallest and Biggest Numbers-------------------------------------
export function minMax(tab) {
    var tmp = 0;

    if (tab.length === 1) {
        return [tab[0], tab[0]]
    }

    for (var i = 0; i < tab.length; i++) {

        while (tab[i] > tab[i + 1]) {
            tmp = tab[i];
            tab[i] = tab[i + 1];
            tab[i + 1] = tmp;
        }

        var min = tab[0];
        var max = tab[tab.length - 1];
    }
    return [min, max];
}

// --------------------------------------------------- Filter Strings from Array-------------------------------------
export function sortByLength(a) {
    var swapped;
    do {
        swapped = false
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i].length > a[i + 1].length) {
                var tmp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = tmp
                swapped = true;
            }
        }
    } while (swapped);
    return a;
}

// --------------------------------------------------- Return Last Item-------------------------------------
export function lastItem(string) {
    var str = string;
    var lastLetter = str[str.length - 1];
    return lastLetter;
}


// --------------------------------------------------- The Farm Problem-------------------------------------
export function animals(a, b, c) {
    return a * 2 + b * 4 + c * 4;
}


// --------------------------------------------------- Reverse an Array-------------------------------------
export function reverseArray(arr) {
        var newArray = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArray.push(arr[i]);
        }
        return newArray;
    }

// --------------------------------------------------- Return the Next Number from the Integer Passed-------------------------------------
export function addition(n) {
    var n = 9
    return n + 1
}

// --------------------------------------------------- Boolean to String Conversion-------------------------------------
export function boolToString(flag) {
    if (flag === true) {
        return 'true';
    }
    else {
        return 'false';
    }
}


// --------------------------------------------------- Filter out Strings from an Array-------------------------------------
export function filterArrayInt(tab) {
    var res = [];
    for (var i = 0; i < tab.length; i++) {
        var test = (tab[i]);
        if (typeof test === 'number') {
            res.push(tab[i]);
        }
    }
    return res;
}

// --------------------------------------------------- Array of Multiples-------------------------------------
export function arrayOfMultiples(a, b) {
    var res = [];
    for (let i = a; i <= a * b; i += a) {
        res.push(i);
    };
    return res;
}


// --------------------------------------------------- Convert Hours and Minutes into Seconds-------------------------------------
export function convert(a, b) {
    var hours = Math.floor(a * 60 * 60);
    var minutes = Math.floor(b * 60);
    return hours + minutes;
}

// --------------------------------------------------- Return Negative-------------------------------------
export function returnNegative(n) {
    if (n > 0) {
        return n = n * -1
    }
    else {
        return n
    }
}

// --------------------------------------------------- Simple Loop-------------------------------------
export function simpleLoop(a) {
    var res = [];
    var j = 0
    for (var i = 0; i < a; i++) {
        res[j] = i + 1;
        j++;
    }
    return res;
}


// --------------------------------------------------- Area of a Rectangle-------------------------------------
export function getArea(a, b) {
    if (a > 0 && b > 0) {
        return a * b
    }
    else {
        return -1
    }
}

// --------------------------------------------------- Two Makes Ten-------------------------------------
export function makesTen(a, b) {
    if (a === 10 || b === 10 || a + b === 10) {
        console.log('test', a + b);
        return true;
    }
    else {
        return false;
    }
}

// --------------------------------------------------- Add up the Numbers from a Single Number-------------------------------------
export function addUp(n) {
    let sum = n * (n + 1) / 2;
    return sum;
}

// --------------------------------------------------- Matchstick Houses-------------------------------------
export function matchHouses(n) {
    var sticks = 6;
    if (n !== 1) {
        return sticks * n - (n - 1);
    }
    else {
        return sticks
    }
}