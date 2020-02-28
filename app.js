        var loCase = "abcdefghijklmnopqrstuvwxyz";
        var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var nums = "0123456789";
        var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var loupCase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var loNums = "abcdefghijklmnopqrstuvwxyz0123456789";
        var loSpecial = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var upNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var upSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var numSpecial = "0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var loUpNums = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var loUpSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var loNumsSpecial = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var upNumsSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var allChar = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>0123456789?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var usersLength = "";
        var pass = "";
    
    function genPassword(){
        
       userLength = prompt('What is the length of your password?');
    
        if (userLength < 8 || userLength > 128) {
            alert("Your password needs to between 8 and 128 characters");
        } else { var userChoices1 = confirm('Would you like your password to contain lowercase Letters?');

        if (userChoices1 === true) {
            alert("Your password will include lowercase letters")
        } else {
            alert("Your password will not include lowercase letters")
        }
        
        var userChoices2 = confirm('Would you like your password to contain uppercase letters?');
        
        if (userChoices2 === true) {
            alert("Your password will include uppercase letters")
        } else {
            alert("Your password will not include uppercase letters")
        }
        
        var userChoices3 = confirm('Would you like your password to contain numbers?');

        if (userChoices3 === true) {
            alert("Your password will include numbers")
        } else {
            alert("Your password will not include numbers")
        }
        var userChoices4 = confirm('Would you like your password to contain special characters');

        if (userChoices4 === true) {
            alert("Your password will include special characters")
        } else {
            alert("Your password will not include special characters")
        }
        
    if (userChoices1 === true && userChoices2 === false && userChoices3 === false && userChoices4 === false) {       
        for (var i = 0; i < userLength; i++) {
            pass += loCase.charAt(Math.floor(Math.random() * Math.floor(loCase.length - 1)));
            
        }
    }
    else if (userChoices2 === true && userChoices1 === false && userChoices3 === false && userChoices4 === false){
        for(var i = 0; i < userLength; i++) {
            pass += upCase.charAt(Math.floor(Math.random() * Math.floor(upCase.length - 1)));
        }
    }
    else if (userChoices3 === true && userChoices1 === false && userChoices2 === false && userChoices4 === false) {
        for (var i = 0; i < userLength; i++) {
            pass += nums.charAt(Math.floor(Math.random() * Math.floor(nums.length - 1)));
        }
    }
    else if (userChoices4 === true && userChoices1 === false && userChoices3 === false && userChoices2 === false){
        for(var i = 0; i < userLength; i++) {
            pass += specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length - 1)));
        }
    }
    else if (userChoices1 === true && userChoices2 === true && userChoices3 === false && userChoices4 === false) {
        for(var i = 0; i < userLength; i++) {
            pass += loupCase.charAt(Math.floor(Math.random() * Math.floor(loupCase.length - 1)));
        }
    }
    else if (userChoices1 === true && userChoices3 === true && userChoices2 === false && userChoices4 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += loNums.charAt(Math.floor(Math.random() * Math.floor(loNums.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices4 === true && userChoices3 === false && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += loSpecial.charAt(Math.floor(Math.random() * Math.floor(loSpecial.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices3 === true && userChoices1 === false && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += upNums.charAt(Math.floor(Math.random() * Math.floor(upNums.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices4 === true && userChoices1 === false && userChoices3 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += upSpecial.charAt(Math.floor(Math.random() * Math.floor(upSpecial.length - 1)));
            }
        }
        else if (userChoices3 === true && userChoices4 === true && userChoices1 === false && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += numSpecial.charAt(Math.floor(Math.random() * Math.floor(numSpecial.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices2 === true && userChoices3 === true && userChoices4 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += loUpNums.charAt(Math.floor(Math.random() * Math.floor(loUpNums.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices2 === true && userChoices4 === true && userChoices3 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += loUpSpecial.charAt(Math.floor(Math.random() * Math.floor(loUpSpecial.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices3 === true && userChoices4 === true && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += loNumsSpecial.charAt(Math.floor(Math.random() * Math.floor(loNumsSpecial.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices3 === true && userChoices4 === true && userChoices1 === false) {
            for(var i = 0; i < userLength; i++) {
                pass += upNumsSpecial.charAt(Math.floor(Math.random() * Math.floor(upNumsSpecial.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices3 === true && userChoices4 === true && userChoices1 === true) {
            for(var i = 0; i < userLength; i++) {
                pass += allChar.charAt(Math.floor(Math.random() * Math.floor(allChar.length - 1)));
            }
        } else {
            alert("You must choose at least 1 of the 4 required fields");
        }
    
    document.getElementById("passOutput").value = pass;

    }
            
}

        


// undo at line 68 /*SAVE EVERYTHING BELOW*/

// // generate random password
/*function generate() {

    let answer1 = confirm("Would you like a new password?");

    if (answer1 === true) {
        userChoice;
    } else {
        alert("A new password will not be generated");
        return;
    };

    var userChoice = prompt("You may choose a password of a minimum of 8 characters and a maximum of 128 characters. How many characters would you like?");

    if (userChoice < 8 || userChoice > 128) {
        alert("Password needs to between 8 and 128 characters")
    }

    var lowerCase = confirm("Would you like lowercase letters in your password?");

    if (lowerCase === true) {
        alert("Your password will include lowercase letters")
    } else {
        alert("Your password will not include lowercase letters")
    }

    var upperCase = confirm("Would you like uppercase letters in your password?");

    if (upperCase === true) {
        alert("Your password will include uppercase letters");
    } else {
        alert("Your password will not include uppercase letters");
    }

    var numbersPW = confirm("Would you like numbers in your password?");

    if (numbersPW === true) {
        alert("Your password will include numbers");
    } else {
        alert("Your password will not include numbers");
    }

    var symbolsPW = confirm("Would you like symbols in your password?");

    if (symbolsPW === true) {
        alert("Your password will include symbols");
    } else {
        alert("Your password will not include symbols");
    }

    //arr1.push(lowercase.charAt)

    var arr1 = [];

    var pwOptions = {
        userChoice: userChoice,
        lowerCase: lowerCase,
        upperCase: upperCase,
        numbersPW: numbersPW,
        symbolsPW: symbolsPW
    }

    if (pwOptions.lowerCase) {
         arr1.push(lowerCaseString.charAt);
     }

     if (pwOptions.upperCase) {
        arr1.push(upperCaseString.charAt);
     }

     if (pwOptions.numbersString) {
        arr1.push(numbersString.charAt);
     }

     if (pwOptions.symbolsString) {
        arr1.push(numbersString.charAt);
     }
    
    
    // if (pwOptions.lowerCase && pwOptions.upperCase && pwOptions.numbersPW & pwOptions.symbolsPW) {
    //     arr1.push(lowerCaseString.charAt(Math.floor(Math.random() * Math.floor(lowerCaseString.length - 1))) + upperCaseString.charAt(Math.floor(Math.random() * Math.floor(upperCaseString.length - 1))) + numbersString.charAt(Math.floor(Math.random() * Math.floor(numbersString).length - 1))) + symbolsString.charAt(Math.floor(Math.random() * Math.floor(symbolString.length - 1)))
    // }

      if (lowerCase === true && upperCase === true && numbersPW === true && symbolsPW === true) {
         for(var i = 0; i <= userChoice; i++){
               password = password + upperCaseString.charAt(Math.floor(Math.random() * Math.floor(upperCaseString.length - 1))) + lowerCaseString.charAt(Math.floor(Math.random() * Math.floor(lowerCaseString.length - 1))) + numbersString.charAt(Math.floor(Math.random() * Math.floor(numberString.length - 1))) + symbolsString.charAt(Math.floor(Math.random() * Math.floor(symbolsString.length - 1)));
         }

    // } else if (lowerCase === false && upperCase === true && numbersPW === true && symbolsPW === true) {

    // } else if (lowerCase === false && upperCase === false && numbersPW === true && symbolsPW === true) {

    // } else if (lowerCase === false && upperCase === false && numbersPW === false && symbolsPW === true) {

    // } else if (lowerCase === true && upperCase === false && numbersPW === true && symbolsPW === true) {

    // } else if (lowerCase === true && upperCase === false && numbersPW === false && symbolsPW === true) {

    // } else if (lowerCase === true && upperCase === false && numbersPW === false && symbolsPW === false) {

    // } else if (lowerCase === true && upperCase === true && numbersPW === false && symbolsPW === true) {

    // } else if (lowerCase === true && upperCase === true && numbersPW === false && symbolsPW === false) {

    // } else if (lowerCase === false && upperCase === true && numbersPW === false && symbolsPW === false) {

    // } else if (lowerCase === true && upperCase === true && numbersPW === true && symbolsPW === false) {

    // } else if (lowerCase === false && upperCase === true && numbersPW === true && symbolsPW === false) {

    // } else if (lowerCase === false && upperCase === false && numbersPW === true && symbolsPW === false) {

    // } else {
    //     alert("A password cannot be established unless at least 1 of the 4 criteria is chosen.")
    // }




    //set password length/complexity




    //function myPassword() {}

    let complexity = 128; //document.getElementById("slider").value;
    // possible password values
    let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    // put all else if statments inside function along with other variables?

    let upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
    let numbersString = "0123456789";
    let symbolsString = "!@#$%^&*()_+";

    //put the lowercase, uppercase, symbols into different arrays
    let password = "";

    // create for loop to choose password characters
    for (var i = 0; i <= complexity; i++) {
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
      }

    //add password to text box/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
   //document.getElementsByClassName("lastNums").innerHTML += password + "<br>";
}*/
