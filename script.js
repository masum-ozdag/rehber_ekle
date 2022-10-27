let kisiler = [];
let count = 0;

function save(event) {

    let ad = document.getElementById('input-name').value;
    let soyad = document.getElementById('input-surname').value;
    let tel = document.getElementById('input-phone').value;

    count++;

    let kisi = { id: count, adi: ad, soyadi: soyad, telefon: tel };//object
    kisiler.push(kisi);

    let td = `
    <td class="id">${count}</td>
    <td class="ad">${ad}</td>
    <td class="soyad">${soyad}</td>
    <td class="tel">${tel}</td>
    <td><button class="btn btn-dark" onclick="kisiGuncelle(event,${count})">Düzenle</button>
    <button class="btn btn-danger" onclick="kisiSil(event, ${count})">Sil</button></td> `;

    const tr = document.createElement("tr");
    tr.setAttribute("id", count);

    tr.innerHTML = td;

    if (count == 1) {
        document.getElementById("table-kisiler").innerHTML = "";
    }
    document.getElementById("table-kisiler").appendChild(tr);

    console.log(kisiler);



}
function kisiSil(event, id) {

    event.target.closest("tr").remove();
    kisiler = kisiler.filter((kisi) => kisi.id != kisi);
    console.log(kisiler);

}

function kisiGuncelle(event, id) {
    const kisi = kisiler.filter((kisi) => kisi.id == id);

    document.getElementById("input-name").value = kisi[0].adi;
    document.getElementById("input-surname").value = kisi[0].soyadi;
    document.getElementById("input-phone").value = kisi[0].telefon;
    document.getElementById("islemler").innerHTML = "Duzenle";
    document
        .getElementById("islemler")
        .setAttribute("onClick", "javascript: guncelle(event," + id + ");");

    var exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
        keyboard: false,
    });

    exampleModal.show();
}


function guncelle(event, id) {
    kisiler.forEach((kisi) => {
        if (kisi.id == id) {
            kisi.adi = document.getElementById("input-name").value;
            kisi.soyadi = document.getElementById("input-surname").value;
            kisi.tel = document.getElementById("input-phone").value;
            let tr = document.getElementById(id);
            tr.getElementsByClassName("ad")[0].innerHTML = kisi.adi;
            tr.getElementsByClassName("soyad")[0].innerHTML = kisi.soyadi;
            tr.getElementsByClassName("tel")[0].innerHTML = kisi.telefon;
        }
    });
}

function modalShow(event) {
    document.getElementById("islemler").innerHTML = "Ekle";
    document
        .getElementById("islemler")
        .setAttribute("onClick", "javascript: save(event);");
}

function search(event) {
    const searchName = document.getElementById("search-name").value;
    const kisi = kisiler.filter((kisi) => kisi.adi.includes(searchName));
    document.getElementById("table-kisiler").innerHTML = "";

    kisi.forEach((val, indx) => {
        console.log(val);
        const td = `
    <td class="id">${val.id}</td>
    <td class="ad">${val.adi}</td>
    <td class="soyad">${val.soyadi}</td>
    <td class="tel">${val.telefon}</td>
    <button class="btn btn-dark"  onclick="kisiGuncelle(event,${val.id})">Düzenle</button></td> 
    <td><button class="btn btn-danger" onclick="kisiSil(event,${val.id})">Sil</button>
  
    
    `;
        const tr = document.createElement("tr");
        tr.setAttribute("id", val.id);
        tr.innerHTML = td;
        document.getElementById("table-kisiler").appendChild(tr);
    });
}




// }
// // let kaydetButton = document.getElementById('kaydetButton')//tıklama olayı eklenecek
// let guncelle
// let sil

// function guncelleClick() {
//     console.log("guncelleClick");
// }
// function silClick() {
//     console.log("silClick");
// }

// kaydetButton.onclick = function () {
//     //butona tıklanınca çalıştırılacak

//     //td elementlerini oluşturuyoruz
//     let tAd = document.createElement('td')
//     let tSoyad = document.createElement('td')
//     let tTel = document.createElement('td')
//     let tguncelle = document.createElement(`button`)
//     tguncelle.onclick = guncelleClick
//     let tsil = document.createElement('button')
//     tsil.onclick = silClick

//     tAd.textContent = ad.value//textboxtan değeri okuyup aktarıyoruz.
//     tSoyad.textContent = soyad.value//textboxtan değeri okuyup aktarıyoruz.
//     tTel.textContent = tel.value//textboxtan değeri okuyup aktarıyoruz.
//     tguncelle.textContent = "güncelle"
//     tsil.textContent = "sil"

//     //tr elementi oluşturuyoruz
//     let tr = document.createElement('tr')

//     //tdleri tr içine ekliyoruz
//     tr.appendChild(tAd)
//     tr.appendChild(tSoyad)
//     tr.appendChild(tTel)
//     tr.appendChild(tguncelle)
//     tr.appendChild(tsil)


//     //tr elementini liste (tablo) içine ekliyoruz
//     liste.appendChild(tr);

//     //nenelerin için eklemeden sonra temizleyelim
//     ad.value = "";
//     soyad.value = "";
//     tel.value = "";



// }