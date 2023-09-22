let testString = "Ich bin ein Teststring";

// Eigenschaftem/Properties
testString.length; // => Die Anzahl der Zeichen die im String enthalten sind
console.log(testString.length);

// String ist an sich eine Sonderform des Arrays
// Ist eine aneinanderreihung(array) von Buchstaben/Zeichen (char)
testString[0]; // => I
console.log(testString[2]);

console.log(testString.length - 1);

console.log(testString.toUpperCase());

let part1String = testString.slice(); // => Enthält den kompletten Inhalt von testString
console.log(part1String);

let unicodeC = testString.charCodeAt(1); // => Gibt uns den UnicodeWert des Buchstabends an Indexstelle index zurück
console.log(unicodeC);

// Wir wollen eine Funktion schreiben, die einen String als Parameter erhält und uns in der Konsole ausgibt 
// wie viele klein und großbuchstaben in dem String enthalten sind
// Bsp: "Ich" => "Groß: 1 | Klein: 2"


function countCase(inputString) {
    let countLower = 0;
    let countUpper = 0;

    for(let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if(char.toUpperCase() !== char.toLowerCase()) {
            if(char.toUpperCase() === char) {
                countUpper++;
            }
            else {
                countLower++;
            }
        }
    }
    console.log(`Groß: ${countUpper} | Klein: ${countLower}`);
}

countCase("BsadDD");


// Lambda

function faculty(limit) {
    if(limit < 2) {
        return 1;
    }
    else {
        return limit* faculty(limit-1);
    }
}


// alternative zu den anonymen Funktionen
// einfache anonyme Funktion
let sum = function(numOne, numTwo) {return numOne+numTwo};
let ergebnis3 = sum(8,9);

// Lambdas sind die kompakte Alternative zu den anonymen FUnktionen
// Pfeilfunktionen
let quadruple = (a) => a*4;
let sqaure = (a) => a*a;

function vervierfachen (a) {
    return a*4;
}

function quadrieren (a) {
    return a*a;
}

// Wenn eine Lambda Funktion mehrzeilig wird, verliert sie einige ihrer Vorteile
let mehrzeilig = (a,b) => {
    a*=2;
    b*=2;
    return a*b;
}
// Wir brauchen dann wieder die geschweiften Klammern und das Keyword return