"use strict";

// --------------------------------------------Function without argument--------------------------------------------
// export function isoNum() {
//     return 42;
// }

// // --------------------------------------------------- Function with arguments -------------------------------------
// export function myFct(arg1, arg2) {
//     return arg1 + arg2;
// }

// --------------------------------------------------- Messi’s Goal Total -------------------------------------
// export function goalTotal(a,b,c) {
//    return a + b + c;
// }
// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
// export function GrasshopperOrder () {
//     return (2 + 2) * (2 + 2) * 2;
//     }
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
// export function getFirstValue(tab) {
//     tab = [58, 25, 15, 45 ,78]
//     return tab[0];
// }

// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
    // export function minMax(tab){
    //     var tmp = 0;

    //     if(tab.length === 1){
    //         return [tab[0], tab[0]]
    //     }

    //     for(var i=0; i < tab.length; i++){

    //         while(tab[i] > tab[i+1]){
    //             tmp = tab[i];
    //             tab[i] = tab[i+1];
    //             tab[i+1] = tmp;
    //         }

    //     var min = tab[0];
    //     var max = tab[tab.length-1];
    //     }
    // return [min, max];
    // }

// --------------------------------------------------- Filter Strings from Array -------------------------------------
// export function sortByLength(a){
//     var swapped;
//     do{
//         swapped = false
//         for (var i = 0; i < a.length - 1; i++){
//             if(a[i].length > a[i+1].length){
//                 var tmp = a[i];
//                 a[i] = a[i+1];
//                 a[i+1]=tmp
//                 swapped = true;
//             }
//         }
//     }while(swapped);
//     return a;
// }

// --------------------------------------------------- Return Last Item -------------------------------------



// --------------------------------------------------- The Farm Problem -------------------------------------

// --------------------------------------------------- Reverse an Array -------------------------------------


// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
// export function addition(n){
//     var n = 9
//     return n + 1
// }

// --------------------------------------------------- Boolean to String Conversion -------------------------------------
// export function boolToString(flag){
//     if (flag === true){
//         return 'true';
//     }
//     else{
//         return 'false';
//     }
// }


// --------------------------------------------------- Filter out Strings from an Array -------------------------------------

// --------------------------------------------------- Array of Multiples -------------------------------------


// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------

// --------------------------------------------------- Return Negative -------------------------------------
// export function returnNegative(n){
//     if(n>0){
//         return n = n* -1
//     }
//     else{
//         return n
//     }
// }
// --------------------------------------------------- Simple Loop -------------------------------------

// --------------------------------------------------- Area of a Rectangle -------------------------------------

// --------------------------------------------------- Two Makes Ten -------------------------------------
// export function makesTen(a, b){

//     if (a===10 || b===10 || a + b === 10){
//         console.log('test', a + b);
//         return true;
//     }
//         else{
//             return false;
//         }
// }
// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(n){
    let sum = n * (n + 1) / 2;
    return sum;
}
// --------------------------------------------------- Matchstick Houses -------------------------------------
