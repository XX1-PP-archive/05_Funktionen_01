
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

<<<<<<< HEAD
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



























=======
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
>>>>>>> c1b582249393b1793282b23322367ce65ddd11f4
