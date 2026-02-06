console.log("js console"); 

let data;
let grid = document.querySelector(".grid-container");
var form = document.querySelector("form");
var titleInput= document.querySelector("titleInput");

  var newObj = {
    title: titleInput.value,
    publisher: pubInput.value,
    releaseDate: dateInput.value
  };



var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {

        data = JSON .parse(xhttp.responseText);
        console.log(data);


        data.forEach(function(game) {
            let card = document.createElement("div");
            card.classList.add("card");


            let textData =
            "<div class='game-name'>" + game.Game + "</div>" +
            "<span>" +
            "Publisher: " + game.Publisher + "<br>" +
            "Release Data: " + game.Year +"<br>" +
            "Needs Research: " +
            "</span>";

            card.innerHTML = textData;

            if (game.imgSrc) {
                card.style.backgroundImage = "url('" + game.imgSrc + "')";
            }
            grid.appendChild(card);
        });
    }
};

// LOAD DATA (localStorage first, otherwise XHR)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from gameData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "gameData.json", true);
  xhttp.send();
}


// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (game) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + game.title + "</div>" +
      "<div>Publisher: " + game.publisher + "</div>" +
      "<div>Release Date: " + game.releaseDate + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}




form.addEventListener("submit",function (e){
    e.preventDefault();
let title = titleInput.value;
let publisher = devInput.value;
let releaseDate = releaseDateInput.value;
let gifSrc = gifInput.value;
let imgSrc = imgInput.value;
let newObj = {
    "id": getNextId(),
    "title": title,
    "releaseDate":publisher,
    "imgSrc":releaseDate, 
    "gifSrc":gifSrc}
    submitData(newObj);
    form.reset();

})




const submitButton = document.getElementById("submit");

xhttp.open("GET", "games.json", true);
xhttp.send();