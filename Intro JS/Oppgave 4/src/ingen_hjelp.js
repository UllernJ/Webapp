import "./styles.css";
const guess = document.getElementById("guess");
const numbers = document.getElementById("numbers");
const button = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
//Takk til stackOverflow https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
const listOfNumbers = Array.from(Array(100).keys());

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
let totalNumbers = 2;
let listOfUsedNumbers = [];
function sortNumbers() {
  for (let i = 0; totalNumbers > i; i++) {
    const randomIndex = Math.floor(Math.random() * listOfNumbers.length);
    const value = listOfNumbers[randomIndex];
    listOfUsedNumbers.push(value);
    const element = document.createElement("li");
    element.innerHTML = value;
    numbers.append(element);
  }
}
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
function inputFields() {
  for (let i = 0; totalNumbers > i; i++) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "text";
    li.append(input);
    guess.append(li);
  }
}
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
function getValues() {
  const variableList = Array.from(document.querySelectorAll("input"));
  return variableList.map((inputField) => parseInt(inputField.value));
}

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
//ifølge stackoverflow så kan man ikke sammenligne to Arrays på en mer effektiv måte enn dette.
//kilde: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
function checkCorrectSort() {
  const compare = getValues();
  listOfUsedNumbers.sort();
  JSON.stringify(compare) === JSON.stringify(listOfUsedNumbers)
    ? console.log("riktig")
    : console.log("feil");
}
function createUi() {
  sortNumbers();
  inputFields();
}
// TODO: Lag en funksjon som "lager UI" -- Ikke helt nødvendig, men praktisk å ha
createUi();
// TODO: Lytt til 'click'-event og trigg funksjonen som sjekker om man har gjort riktig ved klikk
button.addEventListener("click", () => checkCorrectSort());
