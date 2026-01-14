console.log("js console"); 

let data;
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {

        data = JSON .parse(xhttp.responseText);
        console.log(data);


        data.forEach(function(game) {
            let card = document.createElement("div");
            card.classList.add("card");


            let textData =
            "<div class='game-title'>" + game.title + "</div>" +
            "<span>" +
            "Pubblisher: " + game.publisher + "<br>" +
            "Release Data: " + game.releseata +"<br>" +
            "Needs Research: " +
            "</span>";

            card.innerHTML = textData;

            if (game.imgScr) {
                card.style.backgroundlmage = "url('" + game.imgSrc + "')";
            }
            grid.appendChild(card);
        });
    }
};

xhttp.open("GET", "gamedata.json", true);
xhttp.send.apply();