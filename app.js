        var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var nums = "0123456789";
        var specialCharac = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var lowerUpperCase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerNums = "abcdefghijklmnopqrstuvwxyz0123456789";
        var loSpecial = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var upNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var upSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var numSpecial = "0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var loUpNums = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var loUpSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var lowerNumsSpecial = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var upNumsSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var allChar = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>0123456789?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var userLength = "";
        var password = "";
    
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
            pass += lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length - 1)));
            
        }
    }
    else if (userChoices2 === true && userChoices1 === false && userChoices3 === false && userChoices4 === false){
        for(var i = 0; i < userLength; i++) {
            password += upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length - 1)));
        }
    }
    else if (userChoices3 === true && userChoices1 === false && userChoices2 === false && userChoices4 === false) {
        for (var i = 0; i < userLength; i++) {
            password += nums.charAt(Math.floor(Math.random() * Math.floor(nums.length - 1)));
        }
    }
    else if (userChoices4 === true && userChoices1 === false && userChoices3 === false && userChoices2 === false){
        for(var i = 0; i < userLength; i++) {
            password += specialCharac.charAt(Math.floor(Math.random() * Math.floor(specialCharac.length - 1)));
        }
    }
    else if (userChoices1 === true && userChoices2 === true && userChoices3 === false && userChoices4 === false) {
        for(var i = 0; i < userLength; i++) {
            password += lowerUpperCase.charAt(Math.floor(Math.random() * Math.floor(lowerUpperCase.length - 1)));
        }
    }
    else if (userChoices1 === true && userChoices3 === true && userChoices2 === false && userChoices4 === false) {
            for(var i = 0; i < userLength; i++) {
                password += lowerNums.charAt(Math.floor(Math.random() * Math.floor(lowerNums.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices4 === true && userChoices3 === false && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                password += loSpecial.charAt(Math.floor(Math.random() * Math.floor(loSpecial.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices3 === true && userChoices1 === false && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                password += upNums.charAt(Math.floor(Math.random() * Math.floor(upNums.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices4 === true && userChoices1 === false && userChoices3 === false) {
            for(var i = 0; i < userLength; i++) {
                password += upSpecial.charAt(Math.floor(Math.random() * Math.floor(upSpecial.length - 1)));
            }
        }
        else if (userChoices3 === true && userChoices4 === true && userChoices1 === false && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                password += numSpecial.charAt(Math.floor(Math.random() * Math.floor(numSpecial.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices2 === true && userChoices3 === true && userChoices4 === false) {
            for(var i = 0; i < userLength; i++) {
                password += loUpNums.charAt(Math.floor(Math.random() * Math.floor(loUpNums.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices2 === true && userChoices4 === true && userChoices3 === false) {
            for(var i = 0; i < userLength; i++) {
                password += loUpSpecial.charAt(Math.floor(Math.random() * Math.floor(loUpSpecial.length - 1)));
            }
        }
        else if (userChoices1 === true && userChoices3 === true && userChoices4 === true && userChoices2 === false) {
            for(var i = 0; i < userLength; i++) {
                password += loNumsSpecial.charAt(Math.floor(Math.random() * Math.floor(loNumsSpecial.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices3 === true && userChoices4 === true && userChoices1 === false) {
            for(var i = 0; i < userLength; i++) {
                password += upNumsSpecial.charAt(Math.floor(Math.random() * Math.floor(upNumsSpecial.length - 1)));
            }
        }
        else if (userChoices2 === true && userChoices3 === true && userChoices4 === true && userChoices1 === true) {
            for(var i = 0; i < userLength; i++) {
                password += allChar.charAt(Math.floor(Math.random() * Math.floor(allChar.length - 1)));
            }
        } else {
            alert("You must choose at least 1 of the 4 required fields");
        }
    
    document.getElementById("newPassword").value = password;

    }

    function myFunction() {
        document.getElementById("newPassword").reset();
      }
            
}

        


