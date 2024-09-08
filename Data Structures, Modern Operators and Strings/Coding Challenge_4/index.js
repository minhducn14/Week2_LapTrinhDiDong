// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM(see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data(pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output(5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// After solving this challenge, test with other test data(see below).
// GOOD LUCK �
// Create a textarea and a button in the DOM
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
textarea.style.width = '600px';
textarea.style.height = '200px';


button.textContent = 'Convert to CamelCase';
button.addEventListener('click', function () {
    const text = textarea.value;
    const lines = text.split('\n');
    lines.forEach((line, index) => {
        const trimmed = line.trim().toLowerCase();
        const [first, ...rest] = trimmed.split('_');
        const camelCase = [first, ...rest.map(word => word[0].toUpperCase() + word.slice(1))].join('');
        const checkmarks = '✅'.repeat(index + 1);
        console.log(`${camelCase.padEnd(20)} ${checkmarks}`);
    });
});
