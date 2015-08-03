/**
 * Created by aleksandr on 8/3/15.
 */
var App = (function(){
    // Task 2.1 function get string like "string" return "String".
    function ucFirst(str){
        if (str === ""){
            return "";
        }
        var s = str.slice(1);
        return str.charAt(0).toUpperCase() + s;
    }

    // Task 2.2 function return true if string doesn't contain "viagra", "prn", "XXX".
    function checkSpam(str){
        str = str.toLowerCase();
        if (str.indexOf){
            if (str.indexOf("viagra") !== -1){
                return false;
            }
            if (str.indexOf("prn") !== -1){
                return false;
            }
            if (str.indexOf("xxx") !== -1){
                return false;
            }
            return true;
        }
    };

    /* Task 2.3 function check if length of a string is bigger then used to be replace that part of the
    string to "...".*/
    function truncate(str, maxlength){
        if(str.length > maxlength){
            str = str.slice(0,maxlength) + "...";
        }
        return str;
    }

    // Task 2.4 function generate integer in between [ min, max ], any digit from [ min, max ] must have equal chance
    function random(min, max){
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

    return {
        ucFirst: ucFirst,
        checkSpam: checkSpam,
        truncate: truncate,
        random: random,
    }
}());

//console.log(App.random(-2,6));
