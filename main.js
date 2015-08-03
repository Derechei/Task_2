/**
 * Created by aleksandr on 8/3/15.
 */
var App = (function(){
    // Task 2.1 function get string like "string" return "String".
    function ucFirst(){
        // Encapsulation.
        return function(str){
            if (str === ""){
                return "";
            }
            var s = str.slice(1);
            return str.charAt(0).toUpperCase() + s;
        };
    }

    // Task 2.2 function return true if string doesn't contain "viagra", "prn", "XXX".
    function checkSpam(){
        // Encapsulation.
        return function(str){
            str = str.toLowerCase();
            if (str.indexOf){
                if (str.indexOf("viagra") !== -1){
                    return false;
                }
                if (str.indexOf("prn") !== -1){
                    return false;
                }
                return str.indexOf("xxx") === -1;
            }
        };
    }

    /* Task 2.3 function check if length of a string is bigger then used to be replace that part of the
    string to "...".*/
    function truncate(){
        // Encapsulation.
        return function(str, maxlength){
            if(str.length > maxlength){
                str = str.slice(0,maxlength) + "...";
            }
            return str;
        };
    }

    // Task 2.4 function generate integer in between [ min, max ], any digit from [ min, max ] must have equal chance
    function random(){
        // Encapsulation.
        return function(min, max){
            // First init of rand.
            var rand = min + Math.floor( Math.random() * (max+1-min) ),
            // To check count for equal chance.
                count = 0,
                tmp =[];
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
                if(tmp.indexOf(rand) === -1){
                    tmp.push(rand);
                    count += 1;
                }
                // Else generate another random digit.
                else {
                    rand = min + Math.floor( Math.random() * (max+1-min) );
                }
            } while (count <= max - min);
            // Return array of random different digits.
            return tmp;
        };
    }

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

    // Task 2.6 function multiply ol numeric fields of obj by 2.
    // Supply function isNumeric(n) check if value is numeric
    function isNumeric(n){
        return !isNaN(parseFloat(n) && isFinite(n));
    }
    function multiplyNumeric(){
        // Encapsulation.
        // If property is object than use recursion.
        return function deepMulNum(obj){
            // Keeps property name.
            var i,
            // Keeps link to current object.
                parent = obj;
            for(i in parent){
                if(parent.hasOwnProperty(i)){
                    // If current property of parent is object.
                    if (typeof parent[i] === "object"){
                        // Use recursion to this property.
                        parent[i] = deepMulNum(parent[i]);
                    }
                    // Check if property numeric, if true multiply.
                    if(isNumeric(parent[i])){
                        parent[i] = parent[i]*2;
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
    function calculator(){
        return {
            readValues: function(){
                this.a = +prompt("Input ('1' FOR CORRECT TEST) calculator.a prop: ");
                this.b = +prompt("Input ('5' FOR CORRECT TEST) calculator.b prop: ");
            },
            sum: function(){
                if (this.a === undefined || this.b === undefined) return "First use method: readValues()";
                return this.a + this.b;
            },
            mul: function(){
                if (this.a === undefined || this.b === undefined) return "First use method: readValues()";
                return this.a * this.b;
            }
        }
    };

    return {
        ucFirst: ucFirst(),
        checkSpam: checkSpam(),
        truncate: truncate(),
        random: random(),
        multiplyNumeric: multiplyNumeric(),
        calculator: calculator
    }
}());

console.log(typeof obj["o"]);
