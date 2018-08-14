 //codewars.com  






// vowel remover 
function shortcut(string) {
    // declare the vowels
    let vowels = 'aieou';
    // declar empty str
    let newStr = '';
    //loop through the string 
    for (let i = 0; i < string.length; i += 1) {
        // check if the char is a vowel of not 
        let char = string[i];
        // if it is not a vowel just concate the char and newstr;
        if (vowels.indexOf(char) === -1) {
            newStr += char;
        }
        // if it is a vowel do nothing.
    }
    return newStr;
}
shortcut('apple');


var quote = function (fighter) {
 return fighter.toLowerCase() === "george saint pierre" ?  "I am not impressed by your performance." :"I'd like to take this chance to apologize.. To absolutely NOBODY!";
};
//'george saint pierre'), 'I am not impressed by your performance.'
//'Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")


function letterCount(str) {
    // declare the emtpy object
    let count = {};
    //loop through the str, make char all lower or uppercase
    for (let i = 0; i < str.length; i += 1) {
        let char = str[i].toLowerCase();
        // check to see if the value is in the object or not , therefor it will be undefine
        if (count[char] === undefined) {
            // if it is then  initilize to 1
            count[char] = 1;
            // if not then increment 
        } else {
            count[char] += 1;
        }
    }
    // return the count of char
    return count;
}

// call the main isogram function 
function isIsogram(str) {
    // call the helper funtion 
    let count = letterCount(str);
    // loop through the object
    for (let letter in count) {
        // check if charcount is more then 2 
        if (count[letter] > 1) {
            // if it is more then 1 return false;
            return false;
            // esle return true
        }
    }
    return true;
}
// alternatingCase
String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split('').map((val, i) => val.toUpperCase() === val ? val.toLowerCase() : val.toUpperCase()).join('');
}


// find the nth number
function nthEven(n) {
    // to find the nth element 
    return n + (n - 2);
}


