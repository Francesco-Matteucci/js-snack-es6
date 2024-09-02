/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

// Creo l'array di animali
const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'serpente', famiglia: 'rettili', classe: 'rettili' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'elefante', famiglia: 'elefantidi', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'coccodrillo', famiglia: 'crocodilidi', classe: 'rettili' },
    { nome: 'orso', famiglia: 'ursidi', classe: 'mammiferi' },
    { nome: 'struzzo', famiglia: 'struthionidae', classe: 'uccelli' }
];

// Utilizzo il metodo filter per creare un nuovo array solo con i mammiferi
const mammals = animals.filter(animal => animal.classe === 'mammiferi');

// Stampo in console il risultato
console.log(mammals);
