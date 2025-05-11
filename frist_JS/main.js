document.body.style.cssText = `
width: 90%;
margin: auto;
line-height: 1.5;
font-size: 18px;
padding: 0px;
`;


// 00000000000000000000000000000000000000000000000000
let main = document.createElement('div');
document.body.append(main);
main.style.cssText = `
width:100%;
height: 50vh;
background-image: url('hero.png');
border-radius: 10px;
background-size: cover;
`
// 00000000000000000000000000000000000000000000000000
let simple = document.createElement('div');
document.body.append(simple);

let titleOne = document.createElement('h1');
titleOne.textContent = 'Simple Omelette Recipe';
simple.appendChild(titleOne);


let textOne = document.createElement('p');
textOne.textContent = 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.';
simple.appendChild(textOne);


// 00000000000000000000000000000000000000000000000000
let pTime = document.createElement('div');
document.body.append(pTime);

pTime.style.cssText = `
width: 95%;
height: 15vh;
background-color: lightpink;
border-radius: 10px;
margin: auto;
padding-left: 1%;
padding-top: 5px;
padding-bottom: 4%;
`

let titleTwo = document.createElement('h3');
titleTwo.textContent = 'Preparation Time';
pTime.appendChild(titleTwo);

titleTwo.style.cssText = `
color: darkred;
`

let textTwo = document.createElement('ul');
let itemsTwo = ['Total: Approximately 10 minutes', 'Preparation: 5 minutes', 'Cooking: 5 minutes'];

itemsTwo.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    textTwo.appendChild(li);
});

pTime.appendChild(textTwo);


// 00000000000000000000000000000000000000000000000000
let ingredients = document.createElement('div');
document.body.append(ingredients);

let titleThree = document.createElement('h2');
titleThree.textContent = 'Ingredients';
ingredients.appendChild(titleThree);

titleThree.style.cssText = `
color: darkred;
`;


let textThree = document.createElement('ul');
let itemsThree = ['2-3 Large Eggs', 'Salt, to Taste', 'Pepper, to Taste', '1 Tablespoon of Butter or Oil', 'Optional Fillings: Cheese, Diced Vegetables, Cooked Meats, Herbs'];

itemsThree.forEach(item => { 
    let li = document.createElement('li');
    li.textContent = item;
    textThree.appendChild(li);
});

ingredients.appendChild(textThree);

// 00000000000000000000000000000000000000000000000000
let instructions = document.createElement('div');
document.body.append(instructions);

let titleFour = document.createElement('h2');
titleFour.textContent = 'Instructions';
ingredients.appendChild(titleFour);

titleFour.style.cssText = `
color: darkred;
`;


let textFour = document.createElement('ol');
let itemsFour = ['Beat The Eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed, you can add a tablespoon of water or milk for a fluffier texture.',

'Heat The Pan: Place a non-stick frying pan over medium heat and butter or oil.',

'Cook the Omelette: Once the butter is melted and bubbling, Pour in the eggs. Tilt the pan to ensure the eggs evenly coat surface.',

'Add fillings(Optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your choosen fillings over one half of the omelette.',

'Fold and Serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',

'Enjoy: Serve hot, with addtional salt and pepper if needed.'];

itemsFour.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    textFour.appendChild(li)
});

instructions.appendChild(textFour);

// 00000000000000000000000000000000000000000000000000
let nutrition = document.createElement('div');
document.body.append(nutrition);

let titleFive = document.createElement('h2');
titleFive.textContent = "Nutrition";
nutrition.appendChild(titleFive);

titleFive.style.cssText = `
color: darkred;
`

let textFive = document.createElement('p');
textFive.textContent = "The Table below shows nutrition values per serving without the additional fillings.";
nutrition.appendChild(textFive);

// 00000000000000000000000000000000000000000000000000
let nTable = document.createElement('div');
document.body.append(nTable);


let table = document.createElement('table');
table.style.cssText = `
width: 90%;
margin: auto;
`;

let trOne = document.createElement('tr');
let trTwo = document.createElement('tr');
let trThree = document.createElement('tr');
let trFour = document.createElement('tr');


let td1Row1 = document.createElement('td');
td1Row1.textContent = 'Calories';
trOne.appendChild(td1Row1);

let td2Row1 = document.createElement('td');
td2Row1.textContent = '277 kcal';
trOne.appendChild(td2Row1);

let td1Row2 = document.createElement('td');
td1Row2.textContent = 'Carbohydrates';
trTwo.appendChild(td1Row2);

let td2Row2 = document.createElement('td');
td2Row2.textContent = '0 g';
trTwo.appendChild(td2Row2);

let td1Row3 = document.createElement('td');
td1Row3.textContent = 'Protein';
trThree.appendChild(td1Row3);

let td2Row3 = document.createElement('td');
td2Row3.textContent = '20 g';
trThree.appendChild(td2Row3);

let td1Row4 = document.createElement('td');
td1Row4.textContent = 'Fat';
trFour.appendChild(td1Row4);

let td2Row4 = document.createElement('td');
td2Row4.textContent = '22 g';
trFour.appendChild(td2Row4);

table.appendChild(trOne);
table.appendChild(trTwo);
table.appendChild(trThree);
table.appendChild(trFour);

nTable.appendChild(table);



td1Row1.style.cssText = `
border-bottom: 1px solid black;
height: 50px;`;
td1Row2.style.cssText = `
border-bottom: 1px solid black;
height: 50px;`;
td1Row3.style.cssText = `
border-bottom: 1px solid black;
height: 50px;`;
td1Row4.style.cssText = `
border-bottom: 1px solid black;
height: 50px;`;

td2Row1.style.cssText = `
border-bottom: 1px solid black;
height: 50px;
color: darkred;
font-weight: bold;`;
td2Row2.style.cssText = `
border-bottom: 1px solid black;
height: 50px;
color: darkred;
font-weight: bold;`;
td2Row3.style.cssText = `
border-bottom: 1px solid black;
height: 50px;
color: darkred;
font-weight: bold;`;
td2Row4.style.cssText = `
border-bottom: 1px solid black;
height: 50px;
color: darkred;
font-weight: bold;`;