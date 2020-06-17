$(document).ready(function(){
    var images={};
    const url = "https://nekos.life/api/neko";
    fetch(url)
    .then(response => response.json())
    .then(data => {
    images=data;
        var createdSpan = document.createElement("span");
        var anime = document.createElement("img");
        createdSpan.appendChild(img);
        img.setAttribute("src", images["url"]);
    })
});