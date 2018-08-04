 //codewars.com  
 // 8 and 7 kata answers

function convertHashToArray(hash) {
    //  convert the hash to array
    let newArr = Object.entries(hash);
    // sort the arr 
    let result = newArr.sort(function (a, b) {
        return a[0] > b[0]
    });
    // return Sorted Arr
    return result;

}
convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })


//convert booleanToString

function booleanToString(b) {
    return !b ? "false" : "true";
}

// consonant please 
function sortLetters(arr) {
    // declare vowels varible
    let vowels = 'aeiouAEIOU';
    // declare the variable vowelpile 
    let vowelPile = [];
    // declare consonant variable
    let consonants = [];
    // loop through outer array
    for (let i = 0; i < arr.length; i += 1) {
        //  loop through inner array
        for (let j = 0; j < arr[i].length; j += 1) {
            let ele1 = arr[i][j];
            // check if the ele of inner array is vowel, if it is vowel push to vowelPile
            if (vowels.indexOf(ele1) > -1) {
                vowelPile.push(ele1.toUpperCase());
                //else if it is not a vowel or ele is string then push to consonant,this way we will remove numbers
            } else if (vowels.indexOf(ele1) === -1 && typeof ele1 === 'string') {
                consonants.push(ele1.toUpperCase()); // element needs to be upperCase
            }
        }
    }
    return [vowelPile, consonants];
}
sortLetters([[1, "a", "H"], [3, "o", "s"], [4, "E", "i"]]);

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
// Correct the mistakes of the character recognition software
function correct(string) {
    let replaceChar = {
        5: 'S',
        0: 'O',
        1: 'I'
    };
    // create a empty string
    let newStr = '';
    // loop through string
    for (let i = 0; i < string.length; i += 1) {
        let char = string[i];
        // check if char is 5 1, 0, if it is then replace
        if (char === '5' || char === '0' || char === '1') {
            newStr += replaceChar[char]
        } else {
            // just return the old string
            newStr += char;
        }
    }
    return newStr;

}

// find the nth number
function nthEven(n) {
    // to find the nth element 
    return n + (n - 2);
}

//Every possible sum of two digits
function digits(num) {
    //  declare the result 
    let result = [];
    // convert to string
    let str = String(num);
    // split the stirng in to array 
    let newArr = str.split('');
    // loop through the array
    for (let i = 0; i < newArr.length; i += 1) {
        let num1 = newArr[i];
        // do second loop 
        for (let j = i + 1; j < newArr.length; j += 1) {
            let num2 = newArr[j];
            // add num1 and num2
            // since these are string so convert to numbers
            let sum = +num1 + +num2;
            // push the ele1 + ele2 
            result.push(sum);
            // return the result
        }
    }
    return result;
}
digits(156) //, [ 6, 7, 11 ]

// SubArray elements sum 

function elementsSum(arr, d = 0) {
    // create a newArr 
    let newArr = arr.length;
    // declare variable result 
    let result = 0;
    // decrement the newArr to get the the index 0
    newArr--;

    // loop through the arr
    for (let i = 0; i < arr.length; i += 1) {
        // check if the newaRR key exits  in arr
        if (newArr in arr[i]) {
            // if it is then concate the result += d
            result += arr[i][newArr]
            // else just result += d
        } else {
            // decrement the newArr 
            result += d;
        }
        newArr--;
    }
    // return the result
    return result;
}