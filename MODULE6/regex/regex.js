


// console.log(changed)

// flags - flags follow the trailing / and change the scope of the regex
//  /g : global  /i: case Insensitive /m :multiline
// 

// special characters 
//  + match one or MORE instances;
//  ? optional -  whatever is before the ? is returned if available;
//  * optional and greed - will return what follows as many times as they occur;
//  . matches ANYTHING but a new line 
//  \  escapes a character - used for trying to match a character that Regex uses as a special 
//  \w  matches ANY (word) LETTER
//  \W  anything NOT a letter;
//  \d matches any number
//  \D matches any !number
//  {}  - range IE /w{3} will return any word thats of length 3; /w{3,5} 
//  words between 3 and 5 characters


// grouping

// []  - groups a range of characters.  [th] will return 'th' in a row;
// [a-z] - finds all letters from a-z;
// () isolates the pattern match (t | T) 
//  |   - or operator
// ^ match start of line only 
// $ matches END of statement only




// PHONE NUMBER VALIDATION

// 555 867 5309

//  email validator
let example = 
`To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows secret drug money of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them. To die—to sleep,
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to: 'tis a consummation
Devoutly to be wish'd. To die, to sleep;
To sleep, perchance to dream—ay, there's the rub:
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause—there's the respect
That makes calamity of so long life.
For who would bear the whips and scorns of time,
Th'oppressor's wrong, the proud man's contumely,
The pangs of dispriz'd love, the law's delay,
The insolence of office, and the spurns
That patient merit of th'unworthy takes,
When he himself might his quietus make
With a bare bodkin? Who would fardels bear,
To grunt and sweat under a weary life,
But that the dread of something after death,
The undiscovere'd country, from whose bourn
No traveller returns, puzzles the will,
And makes us rather bear those ills we have
Than fly to others that we know not of?
Thus conscience doth make cowards of us all,
And thus the native hue of resolution
Is sicklied o'er with the pale cast of thought,
And enterprises of great pith and moment
With this regard their currents turn awry
And lose the name of action.`

let myReg = /drug money/g;
let changed = example.replace(myReg, "DRUG MONEY") 
console.log(changed)
console.log(example.match(myReg))
// this returns an array of the matches 
// similar matchAll() matches all possible configurations;
console.log(example.search(myReg))
// returns the index of the FIRST instance of our REGEX;
// console.log(changed)

let emailValidator = /([$&+,:;=?@#|'<>.^*()%!-]+?\w+[&*$/?@]?\w+?)?@\w+\.\w+/
// this is our email validator checks for special characters 
// and combination of letters, @'s, .'s and letters