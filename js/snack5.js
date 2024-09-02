/*
ES6 Snack 5
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

// Creo l'array di partenza
const arr = ['pippo', 'PLUTO', 'Paperino'];

// Utilizzo il metodo map per creare un nuovo array 
const capitalizedStrings = arr.map(str => {
    // Per ogni stringa nell'array prendo il primo carattere e lo converto in maiuscolo
    const firstLetter = str.charAt(0).toUpperCase();

    // Prendo poi il resto della stringa, a partire dal secondo carattere e lo converto in minuscolo
    const restOfString = str.slice(1).toLowerCase();

    // Unisco il primo carattere maiuscolo con il resto della stringa minuscolo
    return firstLetter + restOfString;
});

// Stampo in console il risultato
console.log(capitalizedStrings);


//!SOLUZIONE CONTRARIA (prima lettera MAIUSCOLA e tutto il resto minuscolo)

const reverseCapitalizedStrings = arr.map(str => {
    const firstLetter = str.charAt(0).toLowerCase();
    const restOfString = str.slice(1).toUpperCase();
    return firstLetter + restOfString;
});

console.log(reverseCapitalizedStrings);
