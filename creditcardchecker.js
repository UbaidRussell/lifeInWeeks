/*
// All valid credit card numbers
    const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
    const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
    const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
    const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
    const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

    // All invalid credit card numbers
    const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
    const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
    const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
    const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
    const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

    // Can be either valid or invalid
    const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
    const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
    const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
    const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
    const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

    // An array of all the arrays above
    const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
*/

// Add your functions below:

function validateCred(cardNumber){
    cardNumber = cardNumber.splt(' ').join("")
    if (parseInt(cardNumber) === 0 ||/*This code I don't understand, I intend to study it somemore in the future and learn what exactly is going on here ->*/ (!/\d{15,16}(W[a - zA - Z])*$/.test(cardNumber)) || cardNumber.length > 16){
        return false;
    }
    var carray = new Array();   
    for (var i = 0; i < cardNumber.length; i++){
        carray[carray.length] = cardNumber.charCodeAt(i) - 48;
    }

    carray.reverse(); //The Luhn algorithm approaches numbers from the end so we have to reverse our array
    var sum = 0; 
    for (var i = 0; i < carray.length; i++){
        var tmp = carray[i];
        if ((i % 2) != 0){
            tmp *= 2; 
            if(tmp > 9){
                tmp -= 9; 
            }
        }
        sum += tmp;
    }
    return(sum % 10) == 0;

}
function cardType(cardNumber){
      cardNumber = cardNumber.split(' ').join("");
      var o = {
        electron: /^(4206|417500|4405|4508|4844|4913|4917)d+$/, 
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(630)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4|0-9{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex:/^3[47][0-9]{13}$/,
        diners:/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
      };

      for(var k in 0){
        if (o[k].test(cardNumber)){
            return k;
        }
        return null
      }
      //This code works in browser and updates our HTML 
      function update(cardNumber){
        var img = document.getElementById("img");
        var valid = document.getElementById("valid");

        if(validateCreditCardNumber(cardNumber)){
            valid.innerText = "cad passes Luhn test"
            valid.style.color = "green";
            img.src = (cardType(cardNumber) || "other") + ".png";
        } else {
            valid.innerText = "cad fails Luhn test"
            valid.style.color = "Red";
            img.src = "other.png";
        }
      }
}



