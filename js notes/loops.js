//and now cue "loop" by tobi lou
//lemme grab my colors real quick - would be better if I made a portable module but w/e
const color = '%c';
const green = 'color: green';
const yellow = 'color: yellow';
const red = 'color: red';
const blue = 'color: blue';

/*
biggest thing to think about is how long these things will run
//cuz computers have no problem running for eternity.
that's what the dedicated break key was for on keyboards.
*/

/*===========
WHILE LOOPS... are pretty simple
========*/
let i = 0;

/*
while (true) {
    //do a thing. in this case for ETERNITY.
    //VS code is neat in that it'll point issues like this out for you.
    //so b/c I know this is an infinite loop, i've commented it out.
}*/

while (i < 5) {
    console.log(color + i, blue);
    i++;
}

do {
    //will do this at least once, no matter the condition
    //and so long as the second part is true, it'll keep running...
    console.log('yeet #' + i++);
} while (i <= 10 );

/*===========
FOR LOOPS need a bit more to get started...
========*/
for (let i = 0; i < 5; i++) {
    console.log('Pick a starting line, an ending, and how to get there.');
}

for (let i = 3; i > 0; i--) {
    console.log(color + 'It works in reverse too!', green);
}

for (let i = 1; i <= 3; i++) {
    console.log(color + 'outer loop #' + i, yellow);

    for (let z = 1; z <= 3; z++) {
        console.log(color + 'inner loop #' + z, blue);
    }
}

//much like switches, you can break out of them
for (let i = 99; i > 0; i--) {
    if (i < 95) { break; } //this is legal.

    console.log(color + "IT'S THE FINAL COUNTDOWN: " + color + i, red, yellow);
}

//note to self: switch debug console size back to normal after the demo...