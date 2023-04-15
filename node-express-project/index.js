const express = require("express"); //express i dahil etmemiz lazım
//npm install express

let data = require('./data.js');
const server = express(); //serverımızı bu express fonsiyonuyla çağırıyoruz.
// serverımız oluştu

//ana adreslere gelecek olan istekleri dinleyelim
server.get('/', (req,res) => {  
// birinci parametre: buraya gelecek olan adres, 
//ikinci paremetre: ise fonksiyondur ve onunda iki paremetresi vardır 
//ilki bize gelen istekle ilgili ikinci bizim göndereceğimiz cevap ile ilgilidir.
//request: istek
//response: cevap


    res.send("express'ten merhaba naber") //gönderecğimiz cevap
    //ana adrese girildiğinde gelecek mesaj
});


// ------------ post metodu -----------
let next_id = 4;
// post metoduyla bodyden gelir istekler
server.post("/aktor", (req,res) => {
    let yeni_aktor = res.body;
    yeni_aktor.id = next_id;
    next_id ++;
    data.push();
    res.status(201).json(yeni_aktor);
});

//---------- delete komutu----------
server.delete("/aktor/: id", (req,res) => {
    const silinecek_aktor_id = req.params.id; //istek olarak silinecek olan datanın id sini değere atadık
    let silinecek_aktor = data.find(aktor => aktor.id === Number(silinecek_aktor_id)); // datadan istenilen id bulma

    if(silinecek_aktor){
        data = data.filter(aktor => aktor.id !== Number(silinecek_aktor_id)); // ????? filter metodu olanı siler mi????
        res.status(201).end(); 
    }
    else{
        res.status(404).json({errorMessage: "silmeye çalıştığınız aktor sistemde yok"});
    }

});

// PUT
// id req. params 'dan al
// duzenlenen aktor degerini req.body al
// dizi icinde id ile aktor var mi?
// aktor sistemde hata varsa, bilgileri degistir, 200 koduyla yeni aktor bilgilerini gonder
//404 koduyla gonder


///////////////---------------ÖRNEK-----------------/////////////////////

server.get("/aktor", (req,res) => {  
    res.status(200).json(data);
});

// eğer url kısmına localhost/5000/aktor/id numarası yaıp çalışsın ister isek;
server.get("/aktor/:id", (req,res) =>{
    // console.log("req.params",req.params); //kendi belşirlediğimiz parametretle kullanıcıdan alabilriirz
    console.log("req.query",req.query); 
    // sorgu dizesinden okumak. url kısmına
    // http://localhost:5000/aktor/1?isim=kemal

    // eğer birden fazla sorgu varsa url
    // http://localhost:5000/aktor/1?isim=kemal&soyisim=sunal&film_turu=komedi

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

