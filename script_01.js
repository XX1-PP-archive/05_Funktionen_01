
/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{
    console.log("Hallo Deniz!");
}

// Funktionsaufruf (call)
//test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    let firstName = "Frank";  // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

//usgabeNamen();
//console.log(firstName);  // Fehler --> lokal!!!

/***** Funktion 02b  *****/
// 2b. Paramentisierung + Datenübergabe von AUSSEN

function ausgabeNamenParm(firstName) //Parameter
{
    // wenn firstname leer , dann "noboddy"
if (firstName == undefined) {
    firstName = "noboddy";
}
   
    console.log("hallo " + firstName + "!");
}
ausgabeNamenParm("Deniz"); //call + Argument(e)
ausgabeNamenParm("Frank ");
ausgabeNamenParm();
ausgabeNamenParm(prompt("Bitte Namen eingeben; "));



























