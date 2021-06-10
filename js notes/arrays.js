/* ======
---- ARRAYS
======= */


//arrays are ordered iirc
const numArray = [0,1,2,3];
const mixedArray = ['bird', 1, true];
let words = ['book','September','wae'];

//accessing is like python / C++
someNum = numArray[2];
console.log(someNum);

//constant arrays are mutable using array methods
mixedArray.push('pizza', null); //adds to the array
numArray.pop(); //removes the last element and returns it to u

//meanwhle let arrays can reassign indices
words[2] = 'why';

//can get the length -- which is an obj property not a method lol
words.length;
mixedArray.length;



/*
cool. now let's talk about iterator methods. they make looping over arrays easier.
*/

/* REDUCE: goes thru an array and returns a single value
    -- takes a callback func w/ two params (accumulator, currentValue)
        -- accumulater is the value returned by last iteration
        -- currentValue is the current element
    -- can pass a second arg to be the initial value of accumulator
    
    const name_of_container_for_this_mess = 
        some_array.reduce( (acc,cv) => {}, optionalSecondArg );
*/

const sum = numArray.reduce( (acc,cv) => {
    return acc + cv;
});

console.log(sum);

/* FOREACH: executes callback on each element in order    
    --> some_array.forEach( something => { callbackAction(); } );
*/

mixedArray.forEach(item => {
    console.log(item);
});

/* FILTER: also executes a callback on each element...
    -- the callback must return either T/F when interacting w/ element
    -- the returning array is a new one w/ all the TRUE stuff
    
    const name_of_container_for_this_mess = 
        some_array.filter( item => { test T/F } );
*/

const filterNumArray = numArray.filter(n => {
    return n < 3;
});

/* MAP: throws a callback at each element as well
    -- reutrns new array made up of return values from the callback's intxn
    -- doesn't alter the original
    
    const name_of_container_for_this_mess = 
        some_array.map( item => { do sth and return result });
*/

const wordDump = words.map(word => {
    return 'Listed here: ' + word;
});

console.log(wordDump);