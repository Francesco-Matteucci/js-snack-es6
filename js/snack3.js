/*
*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

// Creo l'array di oggetti
const bikes = [
    { bikeName: "Pinarello", weight: 9 },
    { bikeName: "Atala", weight: 6.4 },
    { bikeName: "Cinelli", weight: 8.2 },
    { bikeName: "Casati", weight: 7.3 }
];

// Trovo la bici con il peso minore

// Inizializzo presupponendo che la prima bici sia la piu leggera, e poi verifico se ce ne sono altre più leggere
let lightestBike = bikes[0];

// Itero su ciascuna bici nell'array bikes utilizzando un ciclo for...of
for (const bike of bikes) {
    // Controllo se la bici corrente ha un peso inferiore rispetto alla bici attualmente considerata la più leggera (lighestBike)
    if (bike.weight < lightestBike.weight) {

        // Se sì, aggiorno il dato
        lightestBike = bike;
    }
}

// Utilizzo il destructuring per estrarre le proprietà 'name' e 'weight' dall'oggetto lightestBike
const { bikeName, weight } = lightestBike;

// Stampo il risultato in console mostrando il nome della bici più leggera e il suo peso
console.log(`La bici più leggera è ${bikeName}, con un peso di ${weight} kg.`);

// Stampo il risultato nel DOM
const lightestBikeContainer = document.getElementById('lightest-bike');
lightestBikeContainer.innerHTML = `
    <div class="card h-100">
        <img src="img/bici.jpg" class="card-img-top" alt="Bici">
        <div class="card-body">
            <h5 class="card-title">${bikeName}</h5>
            <p class="card-text">Peso: ${weight} kg</p>
        </div>
    </div>
`;

