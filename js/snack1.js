/* 
*SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/


// Creo una costante per il nome del tavolo
const tableName = 'Tavolo Vip';

// Creo un array con i nomi degli ospiti
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney',
    'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'
];

// Creo la lista di tutti gli ospiti
const guestList = guests.map((guestName, i) => {
    return {
        tableName: tableName,
        guestName: guestName,

        // Posizione posto assegnata
        place: i + 1
    };
});

// Stampo in console
console.log(guestList);


//! ---------- ALTERNATIVA CON REDUCE ----------

// Creo una costante per il nome del tavolo
const nomeTavolo = 'Tavolo Vip';

// Creo una costante per cambiare il nome della lista ospiti, cosi da presentare l'alternativa con reduce senza che cozzi con la soluzione con map
const ospiti = guests;

// Creo la lista degli ospiti
const listaSegnaposti = ospiti.reduce((acc, ospite, i) => {

    const segnaposto = {
        nomeTavolo: nomeTavolo,
        nomeOspite: ospite,
        posto: i + 1
    };

    // Aggiungo l'oggetto all'accumulatore
    acc.push(segnaposto);
    return acc;

}, []);

// Stampo in console
console.log(listaSegnaposti);