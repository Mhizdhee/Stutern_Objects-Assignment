/*Question 1: Using the constructor method, create an InstagramPost() constructor function that takes 
the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, 
*/

1. 
function InstagramPost(handleOfAuthor,content,imageLink,numberOfViews,numberOfLikes){
    this.handleOfAuthor= handleOfAuthor;
    this.content =content;
    this.imageLink =imageLink;
    this.numberOfViews=numberOfViews;
    this.numberOfLikes=numberOfLikes;
}

let post = new InstagramPost('gistloversgram_media', '#Nigeriadecide2023','https://www.instagram.com/p/CpFCSRFs4ig/?igshid=NTU1Mzc3ZGM= ', 4178,3715);
console.log(post);

// Question 2.Create 2 Instagram post objects from the constructor function you created above
2.
let mufasatundeednut = new InstagramPost('mufasatundeednut', 'wait, what pepper biscuit is that or wait, what\'s that?', 'https://www.instagram.com/reel/Co-tZ1xp3Ud/?igshid=NTU1Mzc3ZGM= ', '953k',72976);
let mofedamijo = new InstagramPost('mofedamijo','Pray for Nigeria','https://www.instagram.com/reel/CpClg_rjWBs/?igshid=NTU1Mzc3ZGM= ', '731k',35168);
console.log(mufasatundeednut);
console.log(mofedamijo);

/* Question3 Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, 
Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

Using the factory method, implement a createPerson() factory function that takes
 name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments.
 Then create an object representing Muse’s JAMB scores. 
 Add the object as a property to Musa object you created above in (a) above */
3.
function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location
    }
}

let person = createPerson('Musa',19,'Lekki,Lagos State');
console.log(person);

function createJambScores(ENG, GOVT,LIT,CRK){
    return{
        ENG : ENG,
        GOVT : GOVT,
        LIT :LIT,
        CRK : CRK
    }
}

let jambScore = createJambScores(70, 85, 82, 94);
console.log(jambScore);

person.createJambScores = jambScore
console.log(person)


// Question 4: What are the different ways you can clone an object? Give examples for each of them.
// 4. There are 3 ways you can clone an object which are :
// . Using Object.assign()
// . Using Spread Syntax(...)
// . Using JSON.parse() Method

// 1. Object.assign() e.gg
 let newPerson ={
    firstName: 'Adeola',
    lastName : 'Omitogun',
    age: 27,
    state: 'Ogun State'
 }

 let changeOfLastName = Object.assign({}, newPerson)
console.log(newPerson);
console.log(changeOfLastName);

newPerson.lastName='Aderibigbe';
console.log(newPerson);
console.log(changeOfLastName);


// 2. Spread syntax(...) e.gg
let changeOfState ={...newPerson};
console.log({changeOfState});
changeOfState.state = 'Ekiti State';
console.log({newPerson});
console.log({changeOfState})

// 3. JSON.parse(JSON.stringify) e.gg
let changeOfAge = JSON.parse(JSON.stringify(newPerson));
changeOfAge.age= 29;
console.log({newPerson});
console.log({changeOfAge});




/* question 5. As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}


Using any of the enumeration methods taught in class (for…in  or for..of), 
log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’ */

5.
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for(const property in presidentialCandidates){
    
    console.log(presidentialCandidates[property] + ' is the presidential candidate of ' + [property] );
}

