//Use all the string methods to demonstrate all the properties with examples.

//string

//let name1 = "Mahendra"
//let name2 = "singh"
//let name3 = "Dhoni"

let sentence = "is an Indian professional cricketer"

//.empty string "" " "
//console.log(name1 + " " + name2 + " " + name3 + "\n" + sentence);

console.log(sentence.charAt(8));

//length

console.log(sentence.length);

let lengthCheck = "Mahendra singh Dhoni is an Indian professional cricketer"
console.log(lengthCheck.length);

//split
console.log(sentence.split(" "));
console.log(sentence.toUpperCase());
console.log(sentence.trim());
console.log(lengthCheck);

//concat
let str1 = "Smruti"
let str2 = "Priya"
console.log(str1.concat(' ',str2));
console.log(str2.concat(' ',str1));

//indexOf

let sent = "Every picture tells a story"
console.log(sent.indexOf("p"));
console.log(sent.indexOf("tells"));

//lastIndexOf

let se = "I feel very happy today"
console.log(se.lastIndexOf("I"));
console.log(se.lastIndexOf("r"));

//match

let paragraph ="If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely"
let reg = "A-Z";
let found = paragraph.match(reg);
console.log(found);

//slice

const st = "Every picture tells a story"
console.log(st.slice(10));

//startsWith

let str = "sunday is a holiday"
console.log(str.startsWith("sun"));

//substring

let stru = "Smrutirekha" 
console.log(stru.substring(1,3));
console.log(stru.substring(2));

//toString

let stringObj = new String('smru');
console.log(stringObj);
console.log(stringObj.toString());

//trimEnd

let greeting = '  Hello Priya!  ';
console.log(greeting);
console.log(greeting.trimEnd());

//trimStart

let sente = "  where are you ?  ";
console.log(sente);
console.log(sente.trimStart());

//valueOf
let obj = new String('smruti');
console.log(obj);
console.log(obj.valueOf());

//replace
//const para = "Live life as if everything is rigged in your favor";
//console.log(para.replace("life", 'jibana'));

//normalization

//let name1 = 'manu';
//let name2 = 'mama';
//console.log(`${name1}, ${name2}`);
//console.log(name1 === name2);

//repeat

//const mood = 'Happy! ';
//console.log(`I feel ${mood.repeat(3)}`);






