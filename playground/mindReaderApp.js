var readline = require('readline');

/*
 * We need to create a readline interface.
 * The interface takes 2 streams.
 * The input field points to the readable input stream
 * and the output field to the writable output stream.
 */
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var instructions = {
  console.log('1. Think of a two digit integer.');
  console.log('2. Add the two digits of your number together.');
  console.log('3. Subtract this some from your original number');
  console.log('4. locate your number below and concentrate on the picture...');
};


rl.question('Please tell me your name: ', function (name) {

    rl.question('Hello ' + name + ' Please pick a number between 1-20: ', function (age) {
        // process.stdout.write('Well hello ' + answer);
        // Console.log creates a formatted output from process.stdout.write().
        console.log(name + ', you are ' + age + ' years old');

        rl.close();
        process.stdin.destroy();
    });

});
