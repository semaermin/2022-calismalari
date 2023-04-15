
const arr = ["Ders çalışma", "Kitap okuma" , "Uyuma", "Kod egzersizi", "Spor"]

var input = document.getElementById('add-item')

function setData(){
    var data = ""
    arr.forEach((element, index) => {
        data += `<li>
                    <div>${element}</div>
                    <div class="interaction">
                        <button><i class="fas fa-trash" onclick="deleteItem(${index})"></i></button>
                    </div>
                </li>`
    });
    document.getElementById("list").innerHTML = data
}

function deleteItem(val){
	arr.splice(val,1)
	setData()
}

function arrLength(){
	document.getElementById('uzunluk').innerHTML=arr.Length
}

var input = document.getElementById("add-item")
input.addEventListener("keyup", function(event){
    if(input.value != ""){
        if(event.keyCode == 13){
            arr.push(input.value)
            setData()
            input.value = ""
        }
    }
    else{
        console.log("boş olamaz");
    }
})

function deleteItem(index){
    arr.splice(index, 1)
    console.log(arr);
    setData()
}


// document load
setData()