describe("EPAM Front-End external courses JavaScript Task 2", function() {

    it("2.1 function - ucFirst(str) return first letter of the word capital" +
        "if str = '' return '':",function(){
        expect(App.ucFirst("string")).toBe("String");
        expect(App.ucFirst("")).toBe("");
    });

    it("2.2 function - checkSpam(str) return's true if str contain's 'viagra', 'prn', 'XXX':",function(){
        expect(App.checkSpam("")).toBeTruthy();
        expect(App.checkSpam("Some string")).toBeTruthy();
        expect(App.checkSpam("XXx")).toBeFalsy();
        expect(App.checkSpam("some string prn")).toBeFalsy();
        expect(App.checkSpam("someViagra string")).toBeFalsy();
        expect(App.checkSpam("XXXViagra prn string")).toBeFalsy();
    });

    it("2.3 function - truncate(str , maxlength) if str longer than amxlength replace end of a str to '...'",function(){
        expect(App.truncate("Some string with smth",4)).toBe("Some...");
        expect(App.truncate("Some string with smth",0)).toBe("...");
        expect(App.truncate("Some",4)).toBe("Some");
        expect(App.truncate("Some",14)).toBe("Some");
    });

    it("2.4 function - random(min, max) return random integer from interval [ min, max ]",function(){
        var arr = App.random(-1,1);
        expect(arr.indexOf(-2) !== -1).toBeFalsy();
        expect(arr.indexOf(-1) !== -1).toBeTruthy();
        expect(arr.indexOf(0) !== -1).toBeTruthy();
        expect(arr.indexOf(1) !== -1).toBeTruthy();
        expect(arr.length === 3).toBeTruthy();
    });

    describe("2.5 object - manipulation",function(){

        it("2.5.1 Create empty object:",function(){
            var user = Object.create(null);
            expect(user.toString === undefined).toBeTruthy();
        });

        it("2.5.2 Add property name with value 'Vasia':",function(){
            var user = Object.create(null);
            user.name = "Vasia";
            expect(user.name === "Vasia").toBeTruthy();
        });

        it("2.5.3 Add property sername with value 'Petrov':",function(){
            var user = Object.create(null);
            user.name = "Vasia";
            user.surname = "Petrov";
            expect(user.surname === "Petrov").toBeTruthy();
        });

        it("2.5.4 Change property name to 'Sergei':",function(){
            var user = Object.create(null);
            user.name = "Vasia";
            user.surname = "Petrov";
            user.name = "Sergei";
            expect(user.name === "Sergei").toBeTruthy();
        });

        it("2.5.5 Delete property name from object:",function(){
            var user = Object.create(null);
            user.name = "Vasia";
            user.surname = "Petrov";
            user.name = "Sergei";
            delete user.name;
            expect(user.name === undefined).toBeTruthy();
        });
    });

    it("2.6 function - multyplyNumeric(n) gets object and multiply all numeric properties by 2:",function(){

    });

    describe("2.7 object - calculator",function(){

        it("2.7.1 method - readValues() get from prompt() two values and retain both to properties:",function(){

        });

        it("2.7.2 method - sum() return sum of two properties:",function(){

        });

        it("2.7.3 method - mul() return result of multiplication of two properties:",function(){

        });
    });

    describe("2.8 function Constructor - Summator that creates object with two methods",function(){

        it("2.8.1 function - sum(a,b) return sum of two properties:",function(){

        });

        it("2.8.2 method - run() get from prompt() two values and return theirчs sum:",function(){

        });
    });

    it("2.9 function - last(arr) return last element from random array:",function(){

    });

    it("2.10 function - Push(arr,element) add's element to the end of array:",function(){

    });

    describe("2.11 array - manipulation",function(){

        it("2.11.1 create array 'styles' with elements 'Jazz', 'Blues':",function(){

        });

        it("2.11.2 push 'Rock-n-Roll':",function(){

        });

        it("2.11.3 change penultimate element to 'Classical' must works with any length:",function(){

        });

        it("2.11.4 delete first element output it using alert():",function(){

        });

        it("2.11.5 shif 'Rap', 'Reggy':",function(){

        });
    });

    it("2.12 Alert random value from arr = ['Apple', 'Orange', 'Pear', 'Lemon']:",function(){

    });


    it("2.13 function - find(arr, value) return index of value in arr, if not -1:",function(){

    });


    it("2.14 function - filterRange(arr, a,b) return new array of digits from arr between [ a, b ]:",function(){

    });


    it("2.15 function - getMaxSubSum(arr) gets array with positive and negative digits return" +
       " the biggest sum of continuous series if series is negative sum  = 0:",function(){

    });


    it("2.16 function - camelize(str) converts 'my-short-string' to 'myShortString':",function(){

    });


    it("2.17 function - filterRangeInPlace(arr, a, b) return arr with deleted elements between [ a, b ]",function(){

    });


    it("2.18 function - ageSort(people) get array of objects and sort them by age field:",function(){

    });


    it("2.19 function - getSums(arr) get array like [1, 2, 3, ...]" +
                                 "return array like [1, 1+2, 1+2+3, ...]" +
        " function don't modify arr:",function(){

    });
});
