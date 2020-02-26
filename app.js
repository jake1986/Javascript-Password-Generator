/*SAVE EVERYTHING BELOW*/

// generate random password
function generate(){ prompt("Would you like a new password?")

    let answer1 = 'yes';

    if (answer1 === 'yes'){
        prompt("You may choose a password of a minimum of 8 characters and a maximum of 128 characters. How many characters would you like?")
    } else {
        prompt("A new password will not be generated");
    };
   
    // set password length/complexity
    let complexity = document.getElementById("slider").value;
    // possible password values
    let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    let password = "";

    // create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to text box/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br>";
}
