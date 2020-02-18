// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####

function writing(num){
    num=num+1
    console.log('#########'+ 'Challenge' + num + '#########')
}
    writing(0)
// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
let num=1
while(num<=20){
    if (num % 3 ===0){
    console.log(num)}
    num=num+1}
writing(1)
// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.

    num=20
    while(num>1){
        console.log(num)
        num=num-3}
writing(2)
// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
    /*num=20;
    while(num>=1){
        console.log(num);
        num=num-1;}
    writing(3)*/

    for (let num=20; num>=1; num--){
            console.log(num)
        }
    writing(3)

// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
    let str5= 'Boy howdy am I good at this!'
    for (let i=0; i<String.length; i++){
        console.log(str5[i])
    }

    writing(4)

// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.

    let stra= 'And getting better every day.'
    let j = 0;
        while(j<stra.length){
        console.log(stra[j]);
        j=j+3;
        }
writing(5)
// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
    let strb='Am I the best?'
    let k = 0;
        while(k<strb.length){
        console.log(strb.toUpperCase()[k]);
        k=k+1;
        }
    
writing(6)
// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
    let newString=''
    let space=0 
    


writing(7)
// 9.
//let strabc='I am become death, destroyer of worlds.' 
let strabc='I am become death, destroyer of worlds.' 
let backwards = '';
let im = strabc.length - 1;

while (im >= 1) {
  backwards = backwards + strabc[im];
  im = im - 1;
  console.log(strabc.split('').reverse().join(''))
}

// console.log(backwards)


// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.


// 10.
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!