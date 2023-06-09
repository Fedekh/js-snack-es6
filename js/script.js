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
        weight: 16
    },
    {
        name: "Python",
        weight: 8
    },
    {
        name: "Sandro",
        weight: 23
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

// ? Manipolazione dom

const containerSnack_1 = document.getElementById("container1");
// Creare la tabella e i suoi elementi correlati
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Aggiungere la riga del titolo nella thead
const titleRow = document.createElement("tr");
const titleCell = document.createElement("th");

titleCell.classList.add("red-color")
titleCell.setAttribute("colspan", "2");
titleCell.textContent = "Questo è l'array di partenza, a sinistra il nome della bici e a destra il suo peso";
titleRow.appendChild(titleCell);
thead.appendChild(titleRow);

// Creare la riga dell'intestazione della tabella
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "Nome";
headerRow.classList.add("bad-color")
const weightHeader = document.createElement("th");
weightHeader.textContent = "Peso";
nameHeader.classList.add("bad-color")

// Aggiungere l'intestazione della tabella
headerRow.appendChild(nameHeader);
headerRow.appendChild(weightHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

// Creare una riga per ogni oggetto nell'array e popolare le celle con i dati appropriati
bike.forEach((elem) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = elem.name;
    const weightCell = document.createElement("td");
    weightCell.textContent = elem.weight;
    row.appendChild(nameCell);
    row.appendChild(weightCell);
    tbody.appendChild(row);
});

// Aggiungere il corpo della tabella al table e il table al contenitore
table.appendChild(tbody);
containerSnack_1.appendChild(table);

// creiamo il messaggio con la bici più leggera
const message = document.createElement('h3');
message.innerHTML = win;
message.classList.add("green-color", "my-4");

containerSnack_1.appendChild(message);



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


// ? Manipolazione dom

const containerSnack_2 = document.getElementById("container2");
// Creare la tabella e i suoi elementi correlati
const tableMid = document.createElement("table");
const theadMid = document.createElement("thead");
const tbodyMid = document.createElement("tbody");

// Aggiungere la riga del titolo nella thead
const titleRowMid = document.createElement("tr");
const titleCellMid = document.createElement("th");


titleCellMid.classList.add("red-color")
titleCellMid.setAttribute("colspan", "3");
titleCellMid.textContent = "CLASSIFICA SQUADRE";
titleRowMid.appendChild(titleCellMid);
theadMid.appendChild(titleRowMid);

// Creare la riga dell'intestazione della tabella
const headerRowMid = document.createElement("tr");
const nameHeaderMid = document.createElement("th");
nameHeaderMid.textContent = "Squadrea";
headerRowMid.classList.add("bad-color")
const pointsHeader = document.createElement("th");
pointsHeader.textContent = "Punti";
nameHeaderMid.classList.add("bad-color");
const failsHeader = document.createElement("th");
failsHeader.textContent = "Falli subiti";
failsHeader.classList.add("bad-color");

// Aggiungere l'intestazione della tabella
headerRowMid.appendChild(nameHeaderMid);
headerRowMid.appendChild(pointsHeader);
headerRowMid.appendChild(failsHeader);
theadMid.appendChild(headerRowMid);
tableMid.appendChild(theadMid);


// Creare una riga per ogni oggetto nell'array e popolare le celle con i dati appropriati
teams.forEach((team) => {
    const rowMid = document.createElement("tr");
    const nameCellMid = document.createElement("td");
    nameCellMid.textContent = team.name;
    const pointsCell = document.createElement("td");
    pointsCell.textContent = team.points;
    const failsCell = document.createElement("td");
    failsCell.textContent = team.fails;
    rowMid.appendChild(nameCellMid);
    rowMid.appendChild(pointsCell);
    rowMid.appendChild(failsCell);
    tbodyMid.appendChild(rowMid);
});


// Creare il messaggio con la squadra con più punti e quello con più falli subiti
let maxPointsTeam = teams[0];
let maxFailsTeam = teams[0];

teams.forEach((team) => {
    if (team.points > maxPointsTeam.points) {
        maxPointsTeam = team;
    }
    if (team.fails > maxFailsTeam.fails) {
        maxFailsTeam = team;
    }
});

const messageMid = document.createElement('h3');
messageMid.innerHTML = `La squadra con più punti è: ${maxPointsTeam.name} (${maxPointsTeam.points} punti).La squadra con più falli subiti è: ${maxFailsTeam.name} (${maxFailsTeam.fails} falli eseguiti) e comunque la JUVE RUBBBA`;
messageMid.classList.add("green-color", "my-4");

// Aggiungere il corpo della tabella al table e il table al contenitore
tableMid.classList.add("mx-auto");
tableMid.appendChild(tbodyMid);
containerSnack_2.appendChild(tableMid);

// Aggiungiamo il messaggio al contenitore
containerSnack_2.appendChild(messageMid);




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



// Inserisco qualche controllo sull input affinche numberA < numberB ed entrambi inferiori alla lunghezza dell array di partenza, ma sopratutto !isNAN

// do {
//     numberA = parseInt(prompt("Inserisci un numero (deve essere un numero positivo e minore della lunghezza dell'array)"));
// } while (isNaN(numberA) || numberA < 0 || numberA >= firstArray.length);

// do {
//     numberB = parseInt(prompt("Inserisci un numero maggiore del primo (deve essere un numero positivo, minore della lunghezza dell'array e maggiore del primo indice)"));
// } while (isNaN(numberB) || numberB < 0 || numberB >= firstArray.length || numberB <= numberA);

// console.log(`Il primo numero che sarà argomento della funzione, e anche indice minimo dell ultimo array, è ${numberA} mentre il secondo è ${numberB}`);

const firstArray = [44, 67, 3, 78, 98, 45, 67, 88];

function pippo(array, a, b) {
    return array.filter((elemento, indice) => {
        return indice <= b && indice >= a;
    });
}

const form = document.querySelector('form');
const ul = document.getElementById('newArray');
const btn = document.getElementById('btn');

btn.addEventListener("click", function () {
    const numberA = parseInt(document.getElementById('numberA').value);
    const numberB = parseInt(document.getElementById('numberB').value);

    if (isNaN(numberA) || isNaN(numberB) || numberA < 0 || numberA >= firstArray.length || numberB < 0 || numberB >= firstArray.length || numberB <= numberA) {
        alert('Inserisci due numeri validi!');
    } else {
        const newArray = pippo(firstArray, numberA, numberB);
        ul.innerHTML = '';
        newArray.forEach((element) => {
            const li = document.createElement('li');
            li.innerText = element;
            ul.appendChild(li);
        });
    }
});