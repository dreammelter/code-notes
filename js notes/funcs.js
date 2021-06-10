/*-------------
VARIABLES 101
--------------*/
var nomore = 'this is technically not supposed to be used anymore';
//MDN details the reasons: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let

let mutate = 'this is mutable - a variable that can be changed on the fly';
const STONE_SOLID = 'this is immutable - a variable that cannot be changed';

//and by "changed" i mean redefined or reassigned a new value.
//constants are generally represented w/ CAPS.

let potato, sock, toy; //this is legal.
let hitPoints, magicPoints, stamina = 100; //this is legal - but it won't work like you expect.

const daysInAYear; //this is illegal - constants MUST be defined upon initialization.

//here's a quick thing on strings you can interpolate
console.log(`You have ${stamina}SP left`);


//okay so now we can talk about functions and scope a bit more.
function times(num1, num2) {
    return num1 * num2;
    //return makes sure this sends the info back.
}

//func *expressions* can be anon or assigned to a var.
//they are literally just functions defined as part of an expression.
const dog = function() {
    return 'Woof!';
}

//Arrow funcs  -- basically you wanna shoot an arrow thru an obj
//these are also anon
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
}; //yes, put a semi-colon here - u just defined a var.

const printHello = () => {
    console.log('What. is. up. buddy.');
};

//this is what they mean by assigning one to a var
let greeting = printHello;
greeting();

//single args can drop the parenthesis.
const logItem = item => { console.log(item); };

//you can get even more concise by dropping the braces:
const multiply = (a, b) => a * b;
console.log(multiply(5,15));

const setPoints = points => console.log(`You set it to ${points}pts.`);
console.log(setPoints(54));

//keep in mind concise expressions have implicit returns
//also: not stating a return will cause it to be "undefined" by default

/*
    ==== CALLBACK FUNCTIONS ====

    funcs that are passed into another one as an arg;
    can be invoked during execution
    (making it part of a HIGHER ORDER FUNC)

    HIGHER ORDER FUNCTIONS
    -- they either accept a func as a param
    -- or they return a func
    -- are they generally assigned to vars? IDK.
*/

//step 1: ya need function
const testEven = n => {
    return n % 2 == 0;
}

//step 2: ya need a function that needs a function
let isThisEven = (evenFunc, num) => {
    const verify = evenFunc(num);
    console.log(`The number ${num} is even: ${verify}.`);
}

//step 3: call your 2nd function with your 1st func as a param
isThisEven(testEven, 5);

/* SCOPE
    -- GLOBAL (anywhere in entire program, often defined at top of main)
    -- FILE/MODULE
    -- FUNCTION (w/n given function)
    -- CODE BLOCK (inside the set of braces {...})

    CONST and LET are scoped, unlike VAR. VAR is hoisted and whatnot.
    tends to lead to a lot of mess.
*/