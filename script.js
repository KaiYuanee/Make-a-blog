var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click", function(){
    if (title.value.length!=0 && content.value.length!=0){
        list.innerHTML += `
        <div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>
        <hr>
        `
    }
    title.value="", content.value="";
})