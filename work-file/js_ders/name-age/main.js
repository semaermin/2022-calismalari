//alert("websayfası")
//consol.log("yazılar yazabiliyoruz") webde incele kısmında console tarafında görebiliyoruz
//var değişkenleri tanımlamak için kullanıyoruz
//var value ="değişken"
//consol.log(value);
//var let conts 
//const: tanımladığın şey değişmez


//{
//	let value="değişken2" //ilgili skopun içinde(parantezinde) tanımlayabiliyoruz
//}
//var obj ={
	//name="sema"
	//surname="ermin"
//}

//console.log(obj.surname);

//var arr=["html","css","js"]
//console.log(arr[0]);

//var arr=[
//{
	//name="semaa"
	//surname="ermin"
//},
//{
	//name="Deniz"
	//surname="yıldız"
//}

//]
//console.log(arr[0].name);

//console.log(isim +" "+soyisim);
//function hover(){
//	console.log("üzerine geldi");
//}
//function out(){
//	console.log("üzerinden ayrıldı");
//}

//function degistir(){
//	document.getElementById("birinci").innerHTML="yazı değişti";

//}

	var hesap = document.getElementById("#hesap")

	hesap.onclick=hesapla;

	function hesapla(){
		
	var fullname =(document.getElementById("#name").value + document.getElementById("#surname").value);
	var age = Number(document.getElementById("#age").value);
	
		if(age >= 18)
		{
			document.getElementById("success").style.display="block"
		}
		else
		{
			document.getElementById("danger").style.display="block"
		}
	}
