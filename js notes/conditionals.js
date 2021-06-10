//some stuff for making our logs colorful
//we'll talk more about variables later
const color = '%c';
const green = 'color: green';
const yellow = 'color: yellow';
const red = 'color: red';
const blue = 'color: blue';

//u can write messages to urself with comments && logs
console.log(color +"hello world", green);

//JavaScipt won't flip out if you forget to add a ';' to terminate statements....
console.log('this still works')
//....but it's better if you do inlcude it.

/*----------------------
OKAY SO "CONTROL FLOW"
-----------------------*/

//LET'S START WITH IF STATEMENTS

if (1 + 1 == 2) { //js is particular about the number of "=" used
    console.log(color + 'math still works', green);
}

//'and' is represented by &&, 'or' by ||
if (1 + 1 == 2 && blue === 'color: blue') {
    console.log('math works and '+ color + 'blue is blue', blue);
}

if (1 + 1 == 3 || red === 'color: red') {
    console.log(color + 'at least one of these is true', red);
}

//you can negate conditions using a "bang" (!)
if (1 + 1 !== 3) {
    console.log(color + 'clearly 1 + 1 is 2, not 3', blue);
}

// "ternary" basically shorthand for an if statement
// note the question mark and the colon --
// "does A relate to B" ? true : false
let x = 1;
let y;

x == 1 ? console.log('x is still 1') : console.log(color + 'x is now: ' + x, blue);

x++;
x == 1 ? console.log('x is still 1') : console.log(color + 'x is now: ' + x, blue);

console.log(color + 'storing x in new space: y...', yellow);
y = x;

x += 5;
x == y ? console.log('x is still' + y) : console.log(color + 'x is now: ' + x, green);

//you can chain if statements using [else]
if (1 + 2 == 2) {
    console.log(color + 'math is broken', red);
} else {
    console.log(color + 'math still works', green);
}

//let's try to get the debugger to run thru each of these...
if (4 < 5 && 4 >= 3) {
    console.log(color + 'play w/ me for a minute', yellow);
} else if ( 150 > 100 ) {
    console.log(color, 'math is broken???', red);
} else {
    console.log(color + 'ya did good.', blue);
}

//but if you figure you're gonna do a LOT of chaining
//say, for a large number of 'cases', go for...

/*----------------------
--- SWITCH STATEMENTS ---
-----------------------*/
//let's define a variable to play with again...
const order = 'pizza';

switch (order) {
    case 'sushi':
        console.log(color + 'You ordered the inari.', blue);
        break;
    case 'brocolli':
        console.log(color + 'You grabbed a plate of cheesy not-trees.', green);
        break;
    case 'pizza':
        console.log(color + "It's a Lunch & Learn day...", yellow);
        break;
    case 'melon':
        console.log('You had a melon delievered to you.');
        break;
    default:
        console.log(color + "You didn't want anything on the menu...", red);
} //remember to break ur cases or js will break u