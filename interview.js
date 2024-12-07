/* (function () {
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined')); */

/* console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
 */

/* (function () {
  console.log(1);
  setTimeout(function () { console.log(2) }, 1000);
  setTimeout(function () { console.log(3) }, 0);
  console.log(4);
})();
 */

/* const totalOf = (...arr) => {
  return arr.reduce((num, index) => num + index, 0)
}
console.log(totalOf(2, 3, 3, 3, 4, 4)); // Outputs 19
 */

/* function sum(a) {
  return function (b) {
    return a * b
  }
}
console.log(sum(2)(3));
 */

/* var d = {};

['zebra', 'horse'].forEach(function (k) {
  d[k] = undefined;
});
console.log(d)
 */

/* console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2")
console.log("A" - "B" + 2);
console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));
console.log(false == '0')
console.log(false === '0')
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
 */


/* (function (x) {
  return (function (y) {
    console.log(x + y);
  })(2)
})(1);
 */

/* (function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})(); */

/* var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl(); */

/* for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
} */

/* var a = [1, 2, 3];
a[10] = 99;
console.log(a[6]);
console.log(typeof typeof 1);
 */

/* var b = 1;
function outer() {
  var b = 2
  function inner() {
    b++;
    var b = 3;
    console.log(b)
  }
  inner();
}
outer();
 */

/* function f(n) {
  return ((n > 1) ? n * f(n - 1) : n)
};
console.log(f(5)) */

/*
const inputString = 'dalda hre kase ho'
console.log(inputString.split(' ').reverse().join(' ')) */

//remove the 3rd num

/* var arr =[1,2,7,56,6,22,2,4]
 const newArr = arr.filter((num,index) =>{
   if(index !== 3){
     return num
   }
}) */


/* const arr = [1, 2, 3, 4, 5];
arr.length = 0
console.log(arr)
while (arr.length > 0) {
  arr.pop()
}
console.log(arr) */

//1. count the name or number in to array
/*const arr = [1, 1, 2, 3, 44, 5, 6, 2, 44, 7, 3, 90, 93, 109, 22, 44, 77, 11, 1, 3, 0, 1, 0];
const names = ["sanjay", "kumar", "kumar", "mohan", "preetu", "kumar", "dwivedi", "sona", "mohan", "sona", "sanjay"];
const nameObj = {}
const nameCount = (names) => {
    names.forEach(name => {
        return nameObj[name] = (nameObj[name] || 0) + 1
    })
    console.log(nameObj)
}

nameCount(names)
output { sanjay: 2, kumar: 3, mohan: 2, preetu: 1, dwivedi: 1, sona: 2 }
*/


//2. remove the duplicate value from the array 2 mathode
/*const arr = [1, 1, 2, 3, 44, 5, 6, 2, 44, 7, 3, 90, 93, 109, 22, 44, 77, 11, 1, 3, 0, 1, 0];

const uniqeArr = arr.filter((element, index) => arr.indexOf(element) == index);
let uniqeArr = [...new Set(arr)]
console.log(uniqeArr)*/

//3. largest number in the array

/*let largestNum = 0
arr.forEach(num => {
    if (num > largestNum) {
        largestNum = num
    }
})
console.log(largestNum)*/

//4. array shorting
/*var newarr = arr.sort((a, b) => {
    return a - b;
})
console.log(newarr);

var newarr = []
for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    newarr.push(arr[i]);
}
console.log(newarr);*/

//5. split the string and num
/*
const Input = '1a2b37c4d'

const newStringArr = [...Input]
let newString = ""
let newNumber = ""
newStringArr.forEach(data => {
    if (isNaN(data)) {
        newString += data
    } else {
        newNumber += data
    }

})
console.log(`this is str--- ${newString}`)
console.log(`this is num--- ${newNumber}`)
*/

//6. reverse the arr and string two ways
/*
const inputString = 'sanjay'
function reversStr(s) {
    var newName = ""
    for (i = s.length - 1; i >= 0; i--) {
        newName += s[i];
    }
    console.log(newName);
}
reversStr("sanjay");

const reverseArray = inputString.split("").reverse()
console.log("", reverseArray.join(''))
*/

//7. Even number in array

/*
var newarr = []
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newarr.push(arr[i]);
    }
}
console.log(newarr);
*/

//8. Create the funcation and check the prime Number

/*
function primeNum(n) {
    if (n == 0 || n == 1) {
        return false;
    } else if (n == 2) {
        return true;
    } else {
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                return false
            }
        }
        return true;
    }
}
console.log(primeNum(4));
*/

/*
function Person(fName, lName, age, height) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.height = height;
}

function Student(classNu) {
    Person.call(this);
    this.classNu = classNu;
}

Student.prototype = Object.create(Person.prototype);

var per = new Student("sanjay", "dwivedi", 28, "6 feet", 12)
var per1 = new Person("sanjay", "dwivedi", 28, "6 feet", 12)
console.log(per)
console.log(per1)

var obj = {
    pro: "Develop"
}

function test(name, age) {
    console.log(this.pro, name, age)
}

test.apply(obj, ["sanjay", 27]);

let str = "str1_str2_str3"
console.log(str.split("_").reverse().join())
*/

//clouser

/*function test(a) {
    return function (b) {
        return a + b
    }
}
console.log(test(3)(4))*/

//delete form the array
/*const mobileDetails = {
    manufacturer: 'Test 01',
    display: {
        type: 'oled'
    },
    storage: {
        type: 'LPDDR5'
    },
};

console.log(delete mobileDetails.storage)
console.log(mobileDetails)*/

/*
//palindrome
function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}
console.log(checkPalindrome("madam"))
 */

/*
//Object inharitance

let animal = {
  eats: "true",
  color: "red"
};
let rabbit = {
  jumps: "true"
};

rabbit.__proto__ = animal;
rabbit.__proto__.height = "3f"
console.log(animal)
console.log(rabbit.height)

*/

/* const input = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
function sumOfTwoNumbers(array, targetSum) {
  let sumNumArr = []
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[i] + array[j] == targetSum) {
        sumNumArr.push(array[i])
        sumNumArr.push(array[j])
      }
    }
  }
  console.log(sumNumArr)
}
sumOfTwoNumbers(input, targetSum);
//output[-1, 11]

*/

//find vowel in string

const obj = {}
function findVowel(str) {
  const vowelText = 'aeiou'.split('')
  str.split('').forEach(e => {
    if (vowelText.indexOf(e) !== -1) {
      obj[e] = (obj[e] || 0) + 1
    }
  })
}
findVowel('Hello this is text for find vowel in string')
console.log(obj)