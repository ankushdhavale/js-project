let btn = document.querySelector("button");
const ul = document.querySelector("ul"); 
const input = document.querySelector("input");


btn.addEventListener("click", () => {
let item = document.createElement("li");
item.innerHTML = input.value;

let delbtn = document.createElement("button");
delbtn.innerText = "Delete";
delbtn.classList = "delete";
item.appendChild(delbtn);
ul.appendChild(item);
input.value = " ";
})


ul.addEventListener("click", (event) => {
    if(event.target.nodeName === "BUTTON"){
      let listItem = event.target.parentElement;
      listItem.remove();
    }
})

