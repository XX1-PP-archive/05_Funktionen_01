
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
    if (firstName == undefined || firstName == "")
    {
        firstName = "nobody";
    }
   
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamenParam("Deniz"); //Call + Argument(e)
// ausgabeNamenParam("Frank");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Bitte Namen eingeben:"));

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName, familyName) // Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}

// ausgabeNamenParams("Frank","Ziehm"); 
// ausgabeNamenParams("Ziehm","Frank"); 
// ausgabeNamenParams(prompt("Vornamen??:"), prompt("Namen??:")); 

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

function ausgabeNamenParams2(firstName, familyName) // Parameter
{
    // 1. Job: string composing 
    let gap = " ";
    let outputStr = "Hallo " + firstName + gap + familyName + "!";
    
    // 2. Job: output
    console.log(outputStr);
}

//ausgabeNamenParams2("Frank","Ziehm"); 

/***** Funktionen 03b *****/


/** 1.Job: String zusammensetzen */
output(getString("Frank","Ziehm")); // Test
function getString(firstName,familyName) {
    let gap = " ";
    let outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr; // Daten  ----> an die Stelle des calls
    console.log("huhu");  // nach return wird die Fkt. abgebrochen
}

/** 2.Job: Ausgabe */
//output("hi");  // Unit-Test  TDD
function output(outputStr) 
{
    console.log(outputStr);
}