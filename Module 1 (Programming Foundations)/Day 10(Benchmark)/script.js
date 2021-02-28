/*DOM 
    31) Get element with ID "container" from the page ☑
    32) Get every "td" from the page ☑
    33) Create a cycle that prints the text inside every td of the page ☑
    34) Write a function to change the heading of the page ☑
    35) Write a function to add an extra row to the table ☑
    36) Write a function to add the class "test" to each row in the table ☑
    37) Write a function to add a red background to every link in the page ☑
    38) Console log "Page loaded" when the page is correctly loaded ☑
    39) Write a function to add new items to a UL  ☑
    40) Write a function to empty a list ☑ */

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOOM completamente caricato e analizzato");

  console.log(document.getElementById("container"));

  ///

  document.querySelector("td");

  ///

  function printCellsContent() {
    let cell = document.querySelectorAll("td");
    for (let i = 0; i < cell.length; i++) {
      console.log(cell.item(i).textContent);
    }
  }
  printCellsContent();
  ///

  function changeHeaderTextWith(content) {
    document.querySelector("h1").textContent = content;
  }
  changeHeaderTextWith("Benci Marko");
  ///
  function addRowToTable() {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td1Text = document.createTextNode("First");
    td1.appendChild(td1Text);
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    let td2Text = document.createTextNode("cell");
    td2.appendChild(td2Text);
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    let td3Text = document.createTextNode("of");
    td3.appendChild(td3Text);
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    let td4Text = document.createTextNode("new");
    td4.appendChild(td4Text);
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    let td5Text = document.createTextNode("row");
    td5.appendChild(td5Text);
    tr.appendChild(td5);
    document.querySelector("table").appendChild(tr);
  }
  addRowToTable();

  ///

  function addClassToTr() {
    let trs = document.querySelectorAll("tr");
    for (let n = 0; n < trs.length; n++) {
      trs[n].classList.add("test");
    }
  }
  addClassToTr();

  ///
  function addBackgroundColorToLinks() {
    let alinks = document.querySelectorAll("a");
    for (let n = 0; n < alinks.length; n++) {
      alinks[n].style.backgroundColor = "black";
    }
  }
  addBackgroundColorToLinks();

  function addElementToUl() {
    let liElement = document.createElement("li");
    let text = document.createTextNode("New Element Of The List");
    liElement.appendChild(text);
    document.querySelector("ul").appendChild(liElement);
  }
  addElementToUl();

  function clearList() {
    document.querySelector("ul").innerHTML = "";
  }
});
