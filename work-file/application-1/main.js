const arr = ["php", "laravel", "vue", "html", "css"]
const arr2 = ["JAVA", "REACT"]
const arr3 = [40, 100, 1, 5, 25, 10];

function setData(){
	var dizi = document.getElementById('dizi')
	dizi.innerHTML = " "
	arr.forEach(element =>{
		dizi.innerHTML+= element + " "


	});
	document.getElementById('dizi-uzunlugu').innerHTML= arr.length()
	document.getElementById('dizi-ilk-elemanı-silme').innerHTML=arr.shift()
	document.getElementById('dizi-son-eleman-silme').innerHTML=arr.pop()
	document.getElementById('dizileri-birleştirme').innerHTML= arr.concat(arr2)
	document.getElementById('diziti-sıralama')innerHTML=arr3.sort(function(a,b){return a-b})

}