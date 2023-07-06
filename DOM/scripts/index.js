
// console.log("hello, it's connect")

// const element =document.
// getElementById("myElement");
// // console.log(element);
// myElement.textContent =" New Text added";

// const paragraph =document.
// getElementById("paragraph");
// pargraph.innerHTML= "<strong> New Contecnt</strong>";


// let  property = document.
// getElementById("property");
// property.style.backgroundColor= "blue";
// property.style.fontSize='3rem';
// property.style.textAlign= "center";

//getElemnentBYClassName()
// let elements = document.
// getElementsByClassName("myClass");
// console.log(elements);

// console.log(elements.length);
// elements[1].style.border = "2px solid red";


// const myClass2 =document.
// getElementsByClassName("myClass2")
// console.log(myClass2);
// myClass2[0].textContent = "Modified text";
// myClass2[0].classList.add("newClass");  


// const myClass3 =document.
// getElementsByClassName("myClass3");
// myClass3[0].classList.remove("myClass3")


// const buttons  = document.getElementsByClassName
// ("toggle-buttons");
// console.log(buttons)
// function toggleClass(){
//     for (let i = 0; i<buttons.length; i++){
//         buttons[i].classList.togggle("active");
//     }
// }
// toggleClass();


const element = document.
querySelector("div");
console.log(element);
element.textContent= "NEW TEXT"

//ex2
const element2 = document.querySelector("#myElement");
element2.style.backgroundColor = "pink";

const element3 =document.querySelector(".myClass");
element3.style.fontSize = "20px";


const image =document.querySelector(".myImg");
image.setAttribute("src","image/dog.avif");


function getValue(){
    const input = document.querySelector("#myLinks");
    const value= input.value;
    console.log(value);

}


const highlightItems(){
    const listItems = document.querySelectorAll("#mylist li")
    listItems.forEach(function
        (item){
            item.style.backgroundColor="yellow";
        });

}
highlightItems();

//ex44
function printText(){
    console.log("click button");
}

function disableButtons(){
    const  buttons =document.querySelectorAll(".container butttion");
    buttons.forEach(function(b){
        b.disable =true;
    });
}


let randomNum = Math.trunc (Math.random() * 6) + 1;
console.log(randomNum);

function changeMsg(text) {
    document.querySelector(".par").textContent = text;
}

function check() {
    let inputUser = Number(document.querySelector(".numInput").value);

    if (!inputUser) {
        changeMsg("Please enter a valid number");
    }git fetch origin

    if (inputUser === randomNum) {
        changeMsg("You win");
        document.querySelector("body").style.background = "green";
    } else {
        changeMsg("Try again!");
    }
}

