/*
*SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creo un array di oggetti di squadre di calcio.

const teams = [
    { teamName: "Milan", points: 0, fouls: 0 },
    { teamName: "Inter", points: 0, fouls: 0 },
    { teamName: "Roma", points: 0, fouls: 0 },
    { teamName: "Juventus", points: 0, fouls: 0 },
    { teamName: "Napoli", points: 0, fouls: 0 },
    { teamName: "Barcelona", points: 0, fouls: 0 },
    { teamName: "Real Madrid", points: 0, fouls: 0 }
];

// Creo una funzione per generare un numero random tra un valore minimo e massimo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Itero su ciascuna squadra per assegnare valori casuali a points e fouls
for (let team of teams) {

    // Assegno un numero casuale tra 1 e 100 per i punti fatti
    team.points = getRandomNumber(1, 100);

    // Assegno un numero casuale tra 1 e 50 per i falli subiti
    team.fouls = getRandomNumber(1, 50);
}

// Creo un nuovo array che contiene solo il teamName e i fouls utilizzando il destructuring
const teamsFouls = teams.map(({ teamName, fouls }) => ({ teamName, fouls }));

// Stampo in console l'array originale, con tutte le proprietà
console.log("Nomi e proprietà delle squadre:", teams);

// Stampo in console l'array con le squadre e i falli subiti
console.log("Nomi e falli subiti:", teamsFouls);

// Creo una funzione per stampare i risultati in pagina
function printToPage(array, containerId, includePoints = true) {
    const container = document.getElementById(containerId);
    container.classList.add('row', 'gy-4');

    array.forEach(item => {
        const col = document.createElement('div');
        col.classList.add('col-md-4');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = item.teamName;

        const text = document.createElement('p');
        text.classList.add('card-text');
        if (includePoints) {
            text.innerHTML = `Punti: ${item.points}<br>Falli: ${item.fouls}`;
        } else {
            text.innerHTML = `Falli: ${item.fouls}`;
        }

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);
    });
}

// Stampo l'array originale nel DOM
printToPage(teams, 'original-teams');

// Stampo l'array con nomi e falli subiti nella pagina
printToPage(teamsFouls, 'teams-fouls', false);