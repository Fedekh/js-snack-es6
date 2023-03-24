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
// Generare numeri random al posto degli 0 in Punti fatti e in falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

/** 
 *? Me lo metto qui che non me lo ricordo mai: FOREACH SINTASSI
 *?  array.forEach((elemento, indice, array) => {
* ?  });

* ?  array è l'array su cui si vuole iterare, elemento è l'elemento corrente dell'iterazione,
* ? indice è l'indice dell'elemento corrente e array è l'array stesso.
 */

const teams = [
    {
        name: "Milan",
        points: 0,
        fails: 0
    },
    {
        name: "juve",
        points: 0,
        fails: 0
    },
    {
        name: "Napoli",
        points: 0,
        fails: 0
    },
    {
        name: "Roma",
        points: 0,
        fails: 0
    },
]

//console.log(teams); //fa sempre comodo vedere l'array di oggetti


// Generare numeri random al posto degli 0 in Punti fatti e falli subiti, team in argomento è un uggetto di teams
teams.forEach((team) => {
    team.points = Math.floor(Math.random() * 100); //non seguendo il calcio non so quanti punti ci sono di norma a fine campionato
    team.fails = Math.floor(Math.random() * 30);  // gia 30 mi sembra gigante come numero di falli annuali
  });
  
  // Usando la destrutturazione creiamo un nuovo array, con MAP, i cui elementi contengono solo nomi e falli subiti
  const teamsData = teams.map(({ name, fails }) => ({ name, fails }));
  
  // Stampiamo tutto in console
  console.log(teams);
  console.log("Il nuovo array di oggetti con solo nomi squadre e falli è:", teamsData);


//*###################################################################################################################
console.log("");
console.log("");
console.log("SNACK BONUS");
// !SNACK BONUS

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
//es: 
//const numbersArray = [23, 14, 6, 8, 10];
//const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]


const firstArray = [44,67,3,78,98,45,67,88];
let numberA;
let numberB;

// Inserisco qualche controllo sull input affinche numberA < numberB ed entrambi inferiori alla lunghezza dell array di partenza, ma sopratutto !isNAN

do {
  numberA = parseInt(prompt("Inserisci un numero (deve essere un numero positivo e minore della lunghezza dell'array)"));
} while (isNaN(numberA) || numberA < 0 || numberA >= firstArray.length);

do {
  numberB = parseInt(prompt("Inserisci un numero maggiore del primo (deve essere un numero positivo, minore della lunghezza dell'array e maggiore del primo indice)"));
} while (isNaN(numberB) || numberB < 0 || numberB >= firstArray.length || numberB <= numberA);

console.log(`Il primo numero che sarà argomento della funzione, e anche indice minimo dell ultimo array, è ${numberA} mentre il secondo è ${numberB}`);


function pippo(array,a,b){
    const lastArray = array.filter((elemento, indice) => {
        // lastArray.length = b-a;
        return indice <= b && indice >=a; 
        
    })
    return lastArray; 
};
const newArray = pippo(firstArray,numberA,numberB);
console.log(`Quindi l'ultimo array avrà un range tra gli indici ${numberA} e ${numberB} dell'array di partenza e sarà formato da: `, newArray);