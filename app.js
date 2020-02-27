// undo at line 68 /*SAVE EVERYTHING BELOW*/

// // generate random password
function generate(){ 

let answer1 = confirm("Would you like a new password?");

    if (answer1 === true){  
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

    // NO IDEA HOW TO CREATE IF ELSE STATEMENTS FROM HERE
    // if (pwOptions.lowerCase && pwOptions.upperCase && pwOptions.numbersPW & pwOptions.symbolsPW){
          
    //   }

    //   if (lowerCase === true && upperCase === true && numbersPW === true && symbolsPW === true) {
    //      for(var i = 0; i <= complexity; i++){
    //           password = password + upperCaseString.charAt(Math.floor(Math.random() * Math.floor(upperCaseString.length - 1))) + lowerCaseString.charAt(Math.floor(Math.random() * Math.floor(lowerCaseString.length - 1))) + numbersString.charAt(Math.floor(Math.random() * Math.floor(numberString.length - 1))) + symbolsString.charAt(Math.floor(Math.random() * Math.floor(symbolsString.length - 1)));
    //       }
        
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
    
    let complexity = document.getElementById("slider").value;
    // possible password values
    let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    
    // put all else if statments inside function along with other variables?
    
    // let upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
    // let numbersString = "0123456789";
    // let symbolsString = "!@#$%^&*()_+";
    
    // put the lowercase, uppercase, symbols into different arrays
    let password = "";

    // create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to text box/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementsByClassName("lastNums").innerHTML += password + "<br>";
}
