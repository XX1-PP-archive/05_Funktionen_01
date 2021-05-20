
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
    let firstName = "Deniz";  // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

//ausgabeNamen();
//console.log(firstName);  // Fehler --> lokal!!!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) // Parameter
{
   // wenn firstName leer , dann "nobody"
   if (firstName == undefined || firstName == "") {
    firstName = "nobody";
   }
   
    console.log("Hallo " + firstName + "!");
}

ausgabeNamenParam("Deniz"); //Call + Argument(e)
ausgabeNamenParam("Frank");
ausgabeNamenParam();
ausgabeNamenParam(prompt("Bitte Namen eingeben:"));