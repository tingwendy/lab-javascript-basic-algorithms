console.log("I'm ready!")
//Iteration 1: Names and Input

let hacker1 = "August"
console.log("The driver's name is " + hacker1 + ".")

let hacker2 = "Maxine"
console.log("The navigator's name is " +  hacker2 + ".")

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

}

let driver =[ ];
for (let i=0; i<hacker1.length; i++){
  driver.push(hacker1[i]);
  console.log( hacker1.split('').join(' ').toUpperCase() )
}

let reverseNavigator = [ ];
for (let i=hacker2.length-1; i>=0; i--){
  reverseNavigator.push(hacker2[i]);

}
console.log(reverseNavigator.join(''))

// Iteration 3: Loops
let names =[hacker1, hacker2];
console.log(names);

names.sort;
console.log(names);

if (hacker1.localeCompare(hacker2 === -1)){
  console.log(`The ${hacker1} name goes first.`)
}
else if(hacker2.localeCompare(hacker1 === 1)){
  console.log(`Yo, the ${hacker2} goes first definitely.`)
}
else {
  console.log("What?! You both have the same name?")
} */

//Bonus 1
let p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit elementum posuere. Nunc tellus mi, luctus vitae elementum a, maximus non tortor. Sed in neque ac ligula pharetra interdum eget nec nisl."

let p2 = "Quisque aliquet, nunc at scelerisque luctus, erat justo interdum mi, ac rhoncus eros massa id lacus. Integer nisi diam, posuere a dui in, tincidunt ultrices leo. Cras varius sit amet eros at iaculis. Phasellus malesuada porttitor leo, eget imperdiet enim tempus rhoncus."

let p3 = "Aliquam dignissim tellus a pellentesque feugiat. Proin laoreet, magna feugiat mollis molestie, nisi dui maximus lorem, ut varius velit erat vel metus. Aliquam eget nunc sed sem facilisis iaculis. Ut quis auctor est. Mauris vel ornare eros."


let p4 = (p1+p2+p3);
console.log(p4);

function countWords(str){
  let count = 0
  let len = str.length

  for(let i=0; i<len; i++){
    let y = str[i];
    console.log("y is "+ y);

    if(y == " "){
      count = count + 1
      console.log(count)
    }
  }

}
countWords(p4);

function countEt(str){
  let count = 0
  let  len = str.length

  for(let i=0; i<len; i++){
    let x = str[i]+str[i+1];
    console.log ("x is "+ x);

    if (x == "et"){
    count = count + 1
    console.log(count);
  }
  }
}

countEt(p4);
