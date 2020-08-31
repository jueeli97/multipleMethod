// To return multiple values


// Using ARRAY

function demo(){

    let method1 = function(numValue1, numValue2){
        return numValue1 + numValue2;
    }

    let method2 = function(numValue1, numValue2){
        return numValue1 - numValue2;
    }

    let method3 = function(numValue1, numValue2){
        return numValue1 * numValue2;
    }
    
    //Using Array
    
    // Creating array of methods
     let arrayObj = new Array();
     arrayObj.push(method1, method2, method3);// adding values in array using push

    // If you return method then its closure.
     return arrayObj;
}

// Creating instance
let methodObj= new demo();

// calling array values
let result = methodObj[0](4,2);
console.log(result);// 6

 result = methodObj[1](6,2);
console.log(result);// 4

 result = methodObj[2](8,2);
console.log(result);// 16




// Using OBJECTS


function demo1(){

    let methodObj1 = function(numValue1, numValue2){
        return numValue1 + numValue2;
    }

    let methodObj2 = function(numValue1, numValue2){
        return numValue1 - numValue2;
    }

    let methodObj3 = function(numValue1, numValue2){
        return numValue1 * numValue2;
    }
    
    // Using Object
    let obj = {
        method1:methodObj1,
        method2:methodObj2,
        method3:methodObj3
    };

    // If you return method then its closure.
    return obj;
}

// Creating instance
let methodInstance= new demo1();

// calling object values
result = methodInstance.method1(3,4)
console.log(result); // 7

result = methodInstance.method2(6,4)
console.log(result); // 2

result = methodInstance.method3(9,4)
console.log(result); // 36
