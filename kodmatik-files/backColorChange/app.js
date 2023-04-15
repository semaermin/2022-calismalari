const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "pink", "yellow" ,"blue","red","green"]

button.addEventListener("click", changeButton);

let sira = 0; // lochal değer yazdık sıralı renkler için.

function changeButton(){
    // rasgele renk seçme
    // const rnd = Math.floor(Math.random() * colors.length);
    // const selectedColor = colors[rnd];
    // console.log(rnd , selectedColor)
    // body.style.backgroundColor = selectedColor;

    // sırayla renk seçme
    console.log(sira);
    if(colors == 7) sira = 0;
    const selectedColor = colors[sira];
    sira++;
    body.style.backgroundColor= selectedColor;
}