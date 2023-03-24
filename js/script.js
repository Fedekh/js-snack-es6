// !SNACK 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//*###################################################################################################################
console.log("SNACK 1");
console.log("");

const bike = [
    {
        name: "Pantani",
        weight: 12
    },
    {
        name: "Python",
        weight: 8
    },
    {
        name: "Sandro",
        weight: 2
    },
];


let min = 100; //una variabile che confrontero mano a mano con gli elementi all interno del foreach
let win = ""; //sarà il vincitore


bike.forEach(({ name, weight }) => {  //in argomento , tramite DESTRUTTURAZIONE, uso gli stessi nomi delle key dell array di partenza
    console.log(name, weight);//ad ogni iterazione ciclo vedro stampato
    // l'equivalente delle key all interno degli oggetti all interno
    // dell array principale

    if (weight < min) {
        min = weight; //se è davvero minore di 100, aggiorno il valore di min
        win = `La bici piu leggera è la ${name}, che pesa ${weight} kg`;
    }
});

console.log(win);
console.log(min, "kg");

//*###################################################################################################################
console.log("");
console.log("");

console.log("SNACK 2");
console.log("");

// !SNACK 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 in Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const team = [
    {
        name: "Team 1",
        points: 0,
        fails: 0
    },
    {
        name: "Team 2",
        points: 0,
        fails: 0
    },
    {
        name: "Team 3",
        points: 0,
        fails: 0
    },
    {
        name: "Team 4",
        points: 0,
        fails: 0
    },
]




//*###################################################################################################################

// !SNACK BONUS
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.