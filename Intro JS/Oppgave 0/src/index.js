//Oppgave 1
const removeButton = document.getElementById("remove-btn");
removeButton.onclick = function remove() {
  try {
    document.getElementById("remove").remove();
  } catch {
    console.log("Text doesn't exist or have already been removed.");
  }
};

// Oppgave 2
const changeButton = document.getElementById("change-btn");
changeButton.onclick = function changeText() {
  document.getElementById("change").innerHTML = "Endret tekst";
};

// Oppgave 3
const changeField = document.getElementById("input");
changeField.onchange = function textFromField() {
  console.log(changeField.textContent);
  document.getElementById("input-text").innerHTML = changeField.value;
};

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const listCreater = document.getElementById("write-list");
listCreater.onclick = function appendList() {
  console.log(myList);
};

// Oppgave 5
const select = document.getElementById("select");
const selectButton = document.getElementById("create");
const textArea = document.getElementById("text");
const placeHolder = document.getElementById("placeholder");
selectButton.onclick = function createElement() {
  const element = document.createElement(select.value);
  element.innerHTML = textArea.value;
  placeHolder.append(element);
};

// Oppgave 6
const removeLiButton = document.getElementById("remove-li");
const listContainer = document.getElementById("list");
removeLiButton.onclick = function deleteLi() {
  listContainer.remove();
};

// Oppgave 7
const textName = document.getElementById("name");
const textValueButton = document.getElementById("order");
textName.onchange = function checkValid() {
  var textValue = textName.value;
  if (textValue.length > 4) {
    textValueButton.style.borderColor = "red";
  } else {
    textValueButton.style.borderColor = "black";
  }
};
const listContain = document.querySelector(".children");
const listContainButton = document.getElementById("color");
const listOfChilds = listContain.children;
var i = 1;
listContainButton.onclick = function addLiColor() {
  Array.from(listOfChilds).forEach((element) => {
    if (i % 2 === 0) {
      element.style.color = "red";
    } else {
      element.style.color = "blue";
    }
    i++;
  });
};
// Oppgave 8
