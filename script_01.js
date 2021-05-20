<<<<<<< HEAD

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

// ausgabeNamenParm("Deniz"); //call + Argument(e)
// ausgabeNamenParm("Frank ");
// ausgabeNamenParm();
// ausgabeNamenParm(prompt("Bitte Namen eingeben; "));

/***** Funktion 02 c  *****/
// 2c. Mehrere Parameter

function ausgabeNamenParms(firstName, familyName) //Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}
    // ausgabeNamenParms("Frank" , "Ziehm");
    // ausgabeNamenParms("Ziehm", "Frank ");
    // ausgabeNamenParms(prompt("Vorname??:"),prompt("Name??:"));


/***** Funktion 03a *****/
        //03a Vorbereitung
        // 


        function ausgabeNamenParms2(firstName, familyName) //Parameter
        {
            // 1. Job: string composing
            let gap = " ";
            let outputStr = "Hallo " + firstName + gap + familyName + "!";

            // 2. Job: output
            console.log(outputStr);          
        }

        ausgabeNamenParms2("Frank","Ziehm");

        /***** Funktion 03b *****/
        
=======

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

ausgabeNamenParams("Frank","Ziehm"); 
ausgabeNamenParams("Ziehm","Frank"); 
ausgabeNamenParams(prompt("Vornamen??:"), prompt("Namen??:")); 
>>>>>>> 36da4344242315a6f95343966b1970540de7f58b
