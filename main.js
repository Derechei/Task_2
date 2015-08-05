/**
 * Created by aleksandr on 8/3/15.
 */

// App is module for Task 2.
var App, foo, styles;
App = function () {

    /* Task 2.1 Function ucFirst(str) get string parameter,
     return first letter in capital.
     */
    function ucFirst() {
        return function (str) {
            // Check if str parameter is string type.
            if (typeof str !== "string") {
                console.log("Error: parameter used to be string type.");
                return str;
            } else {
                // If str is empty return itself.
                if (str === "") {
                    return str;
                }
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        };
    }

    /* Task 2.2 Function checkSpam(str) get string parameter,
     return true if string doesn't contain "viagra", "prn", "XXX".
     */
    function checkSpam() {
        return function (str) {
            // Check if str parameter is string type.
            if (typeof str === "string") {
                // Convert to lowercase string fo 100% matching.
                str = str.toLowerCase();
                return (str.indexOf("xxx") !== -1 || str.indexOf("prn") !== -1 || str.indexOf("viagra") !== -1);
            } else {
                console.log("Error: parameter used to be string type.")
            }
        };
    }

    /* Task 2.3 Function truncate(str,maxlength)get string and numeric parameter,
     if length of a string, if length longer then maximum length replace that part of the string to "..."
     return updated or the same string.
     */
    function truncate() {
        return function (str, maxlength) {
            // Maxlength should be less in acording length of "..." .
            if (str.length > maxlength - 3) {
                str = str.slice(0, maxlength) + "...";
            }
            return str;
        };
    }

    /* Task 2.4 Function random(min,max) get two numeric parameters,
     return random digit in interval between [ min, max ],
     any digit from [ min, max ] must have equal chance.
     */
    function random() {
        return function (min, max) {
            // First init of rand.
            var rand = min + Math.floor(Math.random() * (max + 1 - min)),
            // Value "count" will increase in 1 if there no such digit in "tpm[]" array.
                count = 0,
                tmp = [];
            // In case when misplaced min with max.
            if (min > max) {
                tmp[0] = max;
                max = min;
                min = tmp[0];
                tmp = [];
            }
            // Repeat loop until count will be max-min.
            do {
                // If no such digit push to tmp increment count
                if (tmp.indexOf(rand) === -1) {
                    tmp.push(rand);
                    count += 1;
                }
                // Else generate another random digit.
                else {
                    rand = min + Math.floor(Math.random() * (max + 1 - min));
                }
            } while (count <= max - min);
            // Return array of random different digits.
            return tmp;
        };
    }

    /*Task 2.5 In the part where I use console.to output. Outside of this object.*/

    // Task 2.6 Function multiplyNumeric(obj) get object parameter and multiply all numeric properties of object by 2.
    // Function isNumeric is a function to check if value is numeric
    function isNumeric(n) {
        return !isNaN(parseFloat(n) && isFinite(n));
    }

    function multiplyNumeric() {
        // If property is object than use recursion.
        return function deepMulNum(obj) {
            // Keeps property name.
            var prop,
            // Keeps link to current object.
                parent = obj;
            for (prop in parent) {
                // If parent have own properties:
                if (parent.hasOwnProperty(prop)) {
                    // Check if they are objects with their own properties.
                    if (typeof parent[prop] === "object") {
                        // Use recursion to this property.
                        parent[prop] = deepMulNum(parent[prop]);
                    }
                    // If property is numeric multiply.
                    if (isNumeric(parent[prop])) {
                        parent[prop] = parent[prop] * 2;
                    }
                }
            }
            return obj;
        };
    }

    /* Task 2.7 Create object "calculator" with methods:
     readValues() use prompt for two values than add to proper properties.
     sum() return sum of two properties.
     mul() return result of multiplication of two properties.
     */
    function calculator() {
        return {
            a: 0,
            b: 0,
            readValues: function () {
                this.a = +prompt("Task 2.7 Calculator: Input first value:");
                this.b = +prompt("Task 2.7 Calculator: Input second value:");
            },
            sum: function () {
                return this.a + this.b;
            },
            mul: function () {
                return this.a * this.b;
            }
        }
    }

    /* Task 2.8 Create function constructor with methods:
     sum() return sum of two digits,
     run() get two values form prompt() and do sum().
     */
    function Summator() {
        var a,
            b;

        return function () {
            this.sum = function () {
                alert(a + b);
                return a + b;
            };
            this.run = function () {
                a
                    = +prompt("Task 2.8 Summator: Input first value:");
                b = +prompt("Task 2.8 Summator: Input second value:");
                this.sum(a, b)
                ;
            };
        };
    }

    /* Task 2.9 Function lastElement(arr) get array parameter
     return last element from random array.
     */
    function lastElement() {
        return function (arr) {
            arr = arr || [1.2, "a",
                    undefined, 1, {}, null, function () {
                    }];
            return arr[arr.length - 1];
        };
    }

    /* Task 2.10 Function get array parameter and
     pushes element to random array.
     */
    function pushElement() {
        return function (arr, element) {
            arr = arr || [1.2, "a",
                    undefined, 1, {}, null, function () {
                    }];
            element = element || "NEW VALUE";
            arr[arr.length] = element;
            return arr;
        };
    }

    /*Task 2.11 In the part where I use console.to output. Outside of this object.*/

    // Task 2.12 Function return random value from arr = ['Apple', 'Orange', 'Pear', 'Lemon'].
    function arrRandElem() {
        var arr = ['Apple', 'Orange', 'Pear', 'Lemon'],
            tmp = arr[Math.floor(Math.random() * 4)];

        return function () {
            alert(tmp);
            return tmp;
        };
    }

    /* Task 2.13 Function find(arr, value) get two parameters arr: array, value: what we seeking,
    if find return index,
    else return  -1.
     */
    function find() {
        return function (arr, value) {
            var len = arr.length,
                i;
            for (i = 0; i < len; i += 1) {
                if (arr[i] === value) {
                    return i;
                }
            }
            return -1;
        };
    }

    /* Task 2.14 Function filterRange(arr, a, b)
    get arr: array of digits, a and b defines interval [a,b]
    return new array with digits from arr between a and b.
     */
    function filterRange(){
        return function(arr, a, b){
            return arr.filter(function(value){
                return value >= a && value <= b;
            });
        }
    }

    /* Task 2.15 Function maxConSubarray(arr) get array pararmeter
    return subarray from arr witch sum is maximum,
    if this array is negative return 0,
    if no subarray with length more than 2 return max element.
     */
    function maxConSubarray(arr){
        var i,
            len,
            tmp = [],
            sum = 0,
            cash,
            cashArr = [],
        // If find subarray with length more than 2.
            flag = true;
        /* To find
        positive subarray: posORneg = -1;
        negative subarray: posORneg =  1;
         */
        function subArr(arr,posORneg){
            for(i = 0, len = arr.length; i < len; i += 1){
                if(arr[i] === arr[i+1] + posORneg){
                    flag = false;
                    tmp.push(arr[i]);
                    // Pushing last element to tmp because if will not check when i = length.
                    if(i === len - 2){
                        tmp.push(arr[i+1]);
                    }
                } else {
                    // If in the middle last element of subarray push it to tmp for negative subarray.
                    if(posORneg === 1 && i !== len -1){
                        tmp.push(arr[i]);
                    }
                    // If for correct work of reduce(). And skip it when negative subarray.
                    if(tmp.length > 0 && posORneg === -1){
                        // If in the middle last element of subarray push it to tmp.
                        if (i !== len -1){
                            tmp.push(arr[i]);
                        }
                        cash = tmp.reduce(function(previousValue, currentValue) {
                            return previousValue + currentValue;
                        });
                        // Max sum.
                        if (sum < cash){
                            sum = cash;
                        }
                        // Clearing tmp.
                        tmp = [];
                    }
                }
            }
        }
        /* Comparing parameter of array with previous.
        If arrays are different makes flag = true and sum = 0.
        */
        function init(arr){
            len = arr.length;
            if (cashArr.length === 0) {
                cashArr = arr;
            }
            if (cashArr.length !== len){
                flag = true;
                sum = 0;
            }
            if (cashArr.length === len){
                for(i = 0; i < len; i += 1){
                    if(cashArr[i] !== arr[i]){
                        flag = true;
                        sum = 0;
                        break;
                    }
                }
            }
        }

        return function(arr){
            init(arr);
            subArr(arr, -1);
            subArr(arr,  1);
            if(flag){
                return Math.max.apply(null,arr);
            } else return sum;
        }
    }

    /* Task 2.16 Function - camelize(str) get string peremeter and
    converts string like 'my-short-string' to 'myShortString'.
     */
    function camelize() {
        return function (str) {
            var i;
            // Split string into substring's without "-".
            str = str.split("-");
            for (i = 0; i < str.length; i += 1) {
                // Use function from 2.1.
                str[i] = ucFirst()(str[i]);
            }
            return str.join("");
        }
    }

    /* Task 2.17 Function - filterRangeInPlace(arr, a, b)
     get arr: array of digits, a and b defines interval [a,b]
     change arr (delete digits from arr between a and b)
     nothing return's.
     */
    function filterRangeInPlace(){
        return function(arr, a, b){
            var len = arr.length,
                i;
            for(i = 0; i < len; i += 1){
                if( arr[i] < a || arr[i] > b){
                    arr.splice(i,1);
                }
            }
        }
    }

    /* Task 2.18 Function ageSort(people) get array of object people with property age
    and sort this array by age property and output array.
     */
    function ageSort(){
        return function(people){
            people.sort(function(a,b){
                return a.age - b.age;
            });
            console.log(people);
        };
    }

    /* Task 2.19 Function getSums(arr) get array parameter
    return new array (for example from [1,2,3,4,5] return's array like [1, 1+2, 1+2+3, ...]).
    Using arr.reduce.
     */
    function getSums(){
        var tmp = [],
            result = [];

        return function(arr){
            var len = arr.length,
                i;
            for(i = 1; i <= len; i += 1){
                tmp = arr.slice(0,i);
                result.push(tmp.reduce(function(previousValue, currentValue) {
                    return previousValue + currentValue;
                }));
            }
            return result;
        }
    }

    return {
        ucFirst: ucFirst(),
        checkSpam: checkSpam(),
        truncate: truncate(),
        random: random(),
        multiplyNumeric: multiplyNumeric(),
        calculator: calculator,
        Summator: Summator(),
        lastElement: lastElement(),
        pushElement: pushElement(),
        arrRandElem: arrRandElem(),
        find: find(),
        filterRange: filterRange(),
        maxConSubarray: maxConSubarray(),
        camelize: camelize(),
        filterRangeInPlace: filterRangeInPlace(),
        ageSort: ageSort(),
        getSums: getSums()
    }
}();
// Task 2.1.
console.log("Task 2.1");
console.log(App.ucFirst("веня"));
console.log(App.ucFirst(1));
console.log(App.ucFirst(""));
console.log("\n");

// Task 2.2.
console.log("Task 2.2");
console.log("Empty string -" + App.checkSpam(""));
console.log("Some string -" + App.checkSpam("Some string"));
console.log("XXx -" + App.checkSpam("XXx"));
console.log("some string prn -" + App.checkSpam("some string prn"));
console.log("someViagra string -" + App.checkSpam("someViagra string"));
console.log("XXXViagra prn string -" + App.checkSpam("XXXViagra prn string"));
console.log("\n");

// Task 2.3.
console.log("Task 2.3");
console.log(App.truncate("Вот что мне хотелось бы сказать на эту тему:",20));
console.log(App.truncate("Всем привет!",20));
console.log("\n");

// Task 2.4.
console.log("Task 2.4");
foo = App.random(1,5);
console.log(foo," array length: ",foo.length," foo[0]: ",foo[0]);
foo = App.random(-2,2);
console.log(foo," array length: ",foo.length," foo[0]: ",foo[0]);
console.log("\n");

// Task 2.5 One line to each action (object manipulation).
// Create empty object "user".
var user = Object.create(null);
// Add property name with value "Vasia".
user.name = "Vasia";
// Add property sername with value "Petrov".
user.surname = "Petrov";
// Replace value of property name "Vasia" to "Sergei".
user.name = "Sergei";
// Delete property name from user.
delete user.name;
console.log("Task 2.5");
console.log(user);
console.log("\n");

// Task 2.6.
console.log("Task 2.6");
foo = {
    a: "a",
    b: 1,
    c: 2.3,
    f: function () {
    },
    o: {
        in: 1
        }
    };
console.log(foo);
App.multiplyNumeric(foo);
console.log(foo);
console.log("\n");

// Task 2.7.
console.log("Task 2.7");
foo = App.calculator();
foo.a = 1;
foo.b = 5;
console.log(foo);
console.log("Sum: ",foo.sum(),"Mul: ",foo.sum());
foo.readValues();
alert("Task 2.7 Calculator Sum: " + foo.sum());
alert("Task 2.7 Calculator Mul: " + foo.mul());
console.log("\n");

// Task 2.8.
new App.Summator().run();

// Task 2.9.
console.log("Task 2.9");
console.log(App.lastElement());
foo = [1,2,3,4];
console.log(App.lastElement(foo));
console.log("\n");

// Task 2.9.
console.log("Task 2.10");
console.log(App.pushElement());
foo = [1,2,3,4];
console.log(App.pushElement(foo));
console.log(App.pushElement(foo,"SMTH"));
console.log("\n");

// Task 2.11.
console.log("Task 2.11");
// Create array "styles" with elements "Jazz", "Blues".
styles = ["Jazz", "Blues"];
// Push "Rock-n-Roll".
styles.push("Rock-n-Roll");
// Replace penultimate element to "Classic" works with any length.
styles[styles.length - 2] = "Classic";
// Delete fist element and alert it.
alert(styles.shift());
// Add from to the begin of array "Rap", "Reggy".
styles.unshift("Rap", "Reggy");
console.log(styles);

// Task 2.12.
console.log("Task 2.12");
console.log(App.arrRandElem());
console.log(App.arrRandElem());
console.log("\n");

// Task 2.13.
console.log("Task 2.13");
console.log(styles);
console.log(App.find(styles,"Jazz"));
console.log(App.find(styles,"Lounge"));
console.log("\n");

// Task 2.14.
console.log("Task 2.14");
foo = [1,2,3,4,5,6,7];
console.log("new array ",App.filterRange(foo,2,6));
console.log("foo ",foo);
console.log("\n");

// Task 2.15.
console.log("Task 2.15");
foo = [1,2,3,6,4,5,6,-9,-10,2,3,4];
console.log(foo);
console.log(App.maxConSubarray(foo));
foo = [2,4,6,88,9,0];
console.log(foo);
console.log(App.maxConSubarray(foo));
console.log("\n");

// Task 2.16.
console.log("Task 2.16");
foo = "list-style-image";
console.log(foo);
console.log(App.camelize(foo));
console.log("\n");

// Task 2.17.
console.log("Task 2.17");
foo = [1,2,3,4,5,6,7];
console.log("foo ",foo);
App.filterRangeInPlace(foo,2,6);
console.log("foo ",foo);
console.log("\n");

// Task 2.18.
console.log("Task 2.18");
foo = [
    {
        name: "Винсент Вега",
        age: 26
    },
    {
        name: "Аль Капоне",
        age: 48
    },
    {
        name: "Вито Карленое",
        age: 64
    },
    {
        name: "Альберто Спаггиари",
        age: 57
    }
];
App.ageSort(foo,2,6);
console.log("\n");

// Task 2.19.
console.log("Task 2.19");
foo = [1,2,3,4,5];
console.log(App.getSums(foo,2,6));
console.log("foo ",foo);
console.log("\n");