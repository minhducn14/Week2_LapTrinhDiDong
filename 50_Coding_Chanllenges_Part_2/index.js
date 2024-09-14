// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const distinctArray = function (arr) {
    let distinct = new Set(arr)
    return [...distinct];
}
const result = distinctArray([1, 2, 2, 3, 4, 4, 5]);
console.log("Cau 27: ");
console.log(result);

// 28. Calculate the sum of first 100 prime numbers and return them in an array
const sumOfFirst100Prime = function () {
    let sum = 0;
    let count = 0;
    let i = 2;
    let result = [];
    while (count < 100) {
        if (isPrime(i)) {
            sum += i;
            count++;
            result.push(i);
        }
        i++;
    }
    return { sum, result };
}
const isPrime = function (n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
const result2 = sumOfFirst100Prime();
console.log("Cau 28: ");
console.log(result2);
// 29. Print the distance between the first 100 prime numbers
const distanceBetweenFirst100Prime = function () {
    let count = 0;
    let i = 2;
    let result = [];
    let pre = 2;
    while (count < 100) {
        if (isPrime(i)) {
            result.push(i - pre);
            count++;
            pre = i;
        }
        i++;
    }
    return result;
}
const result3 = distanceBetweenFirst100Prime();
console.log("Cau 29: ");
console.log(result3);
// 30. Create a function that will add two positive numbers of indefinite size.The numbers
// are received as strings and the result should be also provided as string.
function addLargeNumbers(num1, num2) {
    let result = '';

    const maxLength = Math.max(num1.length, num2.length);

    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');
    let carry = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
        const digit1 = parseInt(num1[i], 10);
        const digit2 = parseInt(num2[i], 10);
        const sum = digit1 + digit2 + carry;

        result = (sum % 10) + result;

        carry = Math.floor(sum / 10);
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

const number1 = '987654321987654321987654321';
const number2 = '123456789123456783456789';
const sum = addLargeNumbers(number1, number2);
console.log(sum);

// 31. Create a function that will return the number of words in a text
const countWords = function (text) {
    return text.split(' ').length;
}
console.log("Cau 31: ");
const result4 = countWords("Hello, my name is Duc");
console.log(result4);
// 32. Create a function that will capitalize the first letter of each word in a text
const capitalizeFirstLetter = function (text) {
    return text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log("Cau 32: ");
const result5 = capitalizeFirstLetter("hello my name is duc");
console.log(result5);
// 33. Calculate the sum of numbers received in a comma delimited string
const sumOfNumbers = function (text) {
    return text.split(',').reduce((acc, cur) => acc + Number(cur), 0);
}
console.log("Cau 33: ");
const result6 = sumOfNumbers("1,2,3,4,5");
console.log(result6);
// 34. Create a function that returns an array with words inside a text.
const wordsInText = function (text) {
    return text.split(' ');
}
console.log("Cau 34: ");
const result7 = wordsInText("Hello my name is Duc");
console.log(result7);
// 35. Create a function to convert a CSV text to a “bi - dimensional” array
function csvToArray(csvText) {
    const rows = csvText.split('\n');
    const array = rows.map(row => row.split(','));
    return array;
}

const csvText = `
name,age,city
duc,20,hcm
quang,21,Los hcm
nghia,20,hcm
`;
console.log("Cau 35: ");
const result8 = csvToArray(csvText);
console.log(result8);
// 36. Create a function that converts a string to an array of characters
const stringToArray = function (text) {
    return text.split('');
}
console.log("Cau 36: ");
const result9 = stringToArray("duc");
console.log(result9);
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
const stringToASCII = function (text) {
    return text.split('').map(char => char.charCodeAt(0));
}
console.log("Cau 37: ");
const result10 = stringToASCII("duc");
console.log(result10);
// 38. Create a function that will convert an array containing ASCII codes in a string
const ASCIIToString = function (arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}
console.log("Cau 38: ");
const result11 = ASCIIToString([100, 117, 99]);
console.log(result11);
// 39. Implement the Caesar cypher
const caesarCipher = function (text, shift) {
    return text
        .split('')
        .map(char => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                return char;
            }
        })
        .join('');
}
console.log("Cau 39: ");
const result12 = caesarCipher("GGDuck", 24);
console.log(result12);
// 40. Implement the bubble sort algorithm for an array of numbers
const bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log("Cau 40: ");
const result13 = bubbleSort([6, 3, 9, 7, 1]);
console.log(result13);
// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
const distanceBetweenTwoPoints = function (x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
console.log("Cau 41: ");
const result14 = distanceBetweenTwoPoints(1, 1, 4, 5);
console.log(result14);
// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting
const areCirclesIntersecting = function (x1, y1, r1, x2, y2, r2) {
    const distance = distanceBetweenTwoPoints(x1, y1, x2, y2);
    return distance < r1 + r2;
}
console.log("Cau 42: ");
const result15 = areCirclesIntersecting(1, 1, 3, 4, 5, 1);
console.log(result15);
// 43. Create a function that will receive a bi - dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
const extractColumn = function (arr, column) {
    return arr.map(row => row[column]);
}
console.log("Cau 43: ");
const result16 = extractColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0);
console.log(result16);
// 44. Create a function that will convert a string containing a binary number into a
// number
const binaryToNumber = function (binary) {
    return parseInt(binary, 2);
}
console.log("Cau 44: ");
const result17 = binaryToNumber('101');
console.log(result17);
// 45. Create a function to calculate the sum of all the numbers in a jagged array
//     (contains numbers or other arrays of numbers on an unlimited number of
// levels)
const sumOfJaggedArray = function (arr) {
    let sum = 0;
    arr.forEach(element => {
        if (Array.isArray(element)) {
            sum += sumOfJaggedArray(element);
        } else {
            sum += element;
        }
    });
    return sum;
}
console.log("Cau 45: ");
const result18 = sumOfJaggedArray([1, 2, [3, 4, [5, 6]]]);
console.log(result18);
// 46. Find the maximum number in a jagged array of numbers or array of numbers
const maxOfJaggedArray = function (arr) {
    let max = -Infinity;
    arr.forEach(element => {
        if (Array.isArray(element)) {
            max = Math.max(max, maxOfJaggedArray(element));
        } else {
            max = Math.max(max, element);
        }
    });
    return max;
}
console.log("Cau 46: ");
const result19 = maxOfJaggedArray([1, 2, [3, 4, [5, 6]]]);
console.log(result19);

// 47. Deep copy a jagged array with numbers or other arrays in a new array
const deepCopy = function (arr) {
    return JSON.parse(JSON.stringify(arr));
}
console.log("Cau 47: ");
const result20 = deepCopy([1, 2, [3, 4, [5, 6]]]);
console.log(result20);

// 48. Create a function to return the longest word in a string
const longestWord = function (text) {
    return text.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log("Cau 48: ");
const result21 = longestWord("Hello my name is Duc");
console.log(result21);
// 49. Shuffle an array of strings
const shuffleArray = function (arr) {
    return arr.sort(() => Math.random() - 0.5);
}
console.log("Cau 49: ");
const result22 = shuffleArray(['a', 'b', 'c', 'd']);
console.log(result22);
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n.The numbers should be unique inside the array.
const randomNumbers = function (n) {
    const result = [];
    while (result.length < n) {
        const number = Math.ceil(Math.random() * n);
        if (!result.includes(number)) {
            result.push(number);
        }
    }
    return result;
}
console.log("Cau 50: ");
const result23 = randomNumbers(10);
console.log(result23);
// 51. Find the frequency of letters inside a string.Return the result as an array of
// arrays.Each subarray has 2 elements: letter and number of occurrences.
const frequencyOfLetters = function (text) {
    const result = {};
    text.split('').forEach(char => {
        if (char in result) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    });
    return Object.entries(result);
}
console.log("Cau 51: ");
const result24 = frequencyOfLetters("ggduck");
console.log(result24);
// 52. Calculate Fibonacci(500) with high precision(all digits)
function fibonacci(n) {
    let a = BigInt(0);
    let b = BigInt(1);
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}


console.log("Cau 52: ");
const result25 = fibonacci(500);
console.log(result25.toString());
// 53. Calculate 70! with high precision(all digits)
function factorial(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }

    return result;
}
console.log("Cau 53: ");
const factorial70 = factorial(70);
console.log(factorial70.toString());


