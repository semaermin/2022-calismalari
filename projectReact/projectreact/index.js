const express = require("express"); //express i dahil etmemiz lazım
//npm install express

const data = require('./data.js');
const server = express(); //serverımızı bu express fonsiyonuyla çağırıyoruz.
// serverımız oluştu

//ana adreslere gelecek olan istekleri dinleyelim
server.get('/', (req,res) => {  
// birinci parametre: buraya gelecek olan adres, 
//ikinci paremetre: ise fonksiyondur ve onunda iki paremetresi vardır 
//ilki bize gelen istekle ilgili ikinci bizim göndereceğimiz cevap ile ilgilidir.
//request: istek
//response: cevap

    res.send("express'ten merhaba") //gönderecğimiz cevap
    //ana adrese girildiğinde gelecek mesaj
});

///////////////---------------ÖRNEK-----------------/////////////////////

server.get("/aktor", (req,res) => {  
    res.status(200).json(data);
});

// eğer url kısmına localhost/5000/aktor/id numarası yaıp çalışsın ister isek;
server.get("/aktor/:id", (req,res) =>{
    const { id } = req.params; //req.params.id: id'i req paramstan al.
    const aktor = data.find(aktor => aktor.id === parseInt(id)); 
    //burdaki id ile data dan gelen id aynı ise aktor degerine ata.
    // data olan id int olduğu için parseInt(id) olarak aldık.

    if(aktor){
        res.status(200).json(aktor);// başarılı(200) ise aktorün obje değerini göndersin
    }
    else{
        res.status(404).send("aradiginiz aktor bulunamadi"); //başarısız olursak.
    }
});

//////////////-----------------ÖRNEK-----------------/////////////////////// 



//portumuzu belirleyelim
server.listen(5000,() => {
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor..");
});
// express ile basit bir http server oluşturduk