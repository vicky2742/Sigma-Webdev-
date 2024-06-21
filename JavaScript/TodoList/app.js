let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;
//   console.log(input.value);

let delbtn=document.createElement("button");
delbtn.innerText="delete";
delbtn.classList.add("delete");
item.append(delbtn);

ul.append(item);
  input.value = "";
});



ul.addEventListener("click",function (event) {
    if(event.target.nodeName=="BUTTON"){
        let delItem=event.target.parentElement;
        delItem.remove();
        console.log("deleted");
    }
})


// let delbtns=document.querySelectorAll(".delete");

// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function () {
//         // console.log("hi");
//         let par=this.parentElement;
//         par.remove();
//     })
// }
