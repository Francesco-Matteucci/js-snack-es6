/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età. 
*/

// 1. Creo un array di persone
const people = [
    { firstName: 'Francesco', lastName: 'Matteucci', age: 36 },
    { firstName: 'Angelo', lastName: 'Crisci', age: 15 },
    { firstName: 'Giorgio', lastName: 'Cirrone', age: 28 },
    { firstName: 'Marco', lastName: 'Lanci', age: 12 },
    { firstName: 'Francesco', lastName: 'Sisti', age: 40 }
];

// 2. Creo un nuovo array con le frasi
const phrases = people.map(person => {
    const { firstName, lastName, age } = person;
    const canDrive = age >= 18 ? 'può guidare' : 'non può guidare';
    return `Il signor ${firstName} ${lastName} ${canDrive}`;
});

// 3. Stampo in console il risultato
console.log(phrases);
