/*
*SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84

*/

//TODO --------- SVOLGIMENTO SNACK 2 ----------

//Creo un array di oggetti per gli studenti
const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
];

// Utilizzo il map, per trasformare i nomi degli studenti in maiuscolo 
const upperCaseNames = students.map(student => student.name.toUpperCase());
console.log(upperCaseNames);

// Attraverso filter trovo tutti gli studenti con media-voto superiore a 70
const excellentStudents = students.filter(student => student.grades > 70);
console.log(excellentStudents);

// Uso ancora una volta filter per stabilire quali studenti hanno sia la media-voto superiore a 70 che l'ID superiore a 120
const qualifiedStudents = students.filter(student => student.grades > 70 && student.id > 120);
console.log(qualifiedStudents);

//! ---------- ALTERNATIVA CON REDUCE ----------

//Creo un array di oggetti per gli studenti
const studenti = [
    { id: 213, nome: 'Marco della Rovere', voti: 78 },
    { id: 110, nome: 'Paola Cortellessa', voti: 96 },
    { id: 250, nome: 'Andrea Mantegna', voti: 48 },
    { id: 145, nome: 'Gaia Borromini', voti: 74 },
    { id: 196, nome: 'Luigi Grimaldello', voti: 68 },
    { id: 102, nome: 'Piero della Francesca', voti: 50 },
    { id: 120, nome: 'Francesca da Polenta', voti: 84 }
];

// Utilizzo il reduce trasformo i nomi degli studenti in maiuscolo 
const nomiMaiuscoli = studenti.reduce((acc, studente) => {
    acc.push(studente.nome.toUpperCase());
    return acc;
}, []);
console.log(nomiMaiuscoli);

// Con reduce trovo tutti gli studenti con media-voto superiore a 70
const studentiConVotiAlti = studenti.reduce((acc, studente) => {
    if (studente.voti > 70) {
        acc.push(studente);
    }
    return acc;
}, []);
console.log(studentiConVotiAlti);

// Uso ancora una volta reduce per stabilire quali studenti hanno sia la media-voto superiore a 70 che l'ID superiore a 120
const studentiSelezionati = studenti.reduce((acc, studente) => {
    if (studente.voti > 70 && studente.id > 120) {
        acc.push(studente);
    }
    return acc;
}, []);
console.log(studentiSelezionati);