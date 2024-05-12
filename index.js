//Yanacaqdoldurma Məntəqəsi 

/*
    1-BENZİN : 1.00 AZN 
    2-DİZEL  : 0.82 AZN
    3-QAZ    : 0.60 AZN


    Gələn müştəridən alacağımız məlumatlar;
    1-Yanacağ Tipi
    2-Yüklənəcək yanacağın litr'i

*/

let benzin = 1.00, dizel = 0.82, qaz = 0.60;

const yeniSətir = "\r\n";

const yanacağMətni = "1-Benzin" + yeniSətir
    + "2-Dizel" + yeniSətir
    + "3-Qaz" + yeniSətir
    + "Yanacağ növünü seçin";

let yanacağNövü = prompt(yanacağMətni);

if (yanacağNövü == "1" || yanacağNövü == "2" || yanacağNövü == "3") {

    let yanacağLitri = Number(prompt("Yanacağ Litrini daxil edin"));
    let balans = Number(prompt("Balansınızı daxil edin"));

    if (yanacağNövü == "1") {

        //BENZİN

        let ödəniləcəkMəbləğ = benzin * yanacağLitri;

        if (ödəniləcəkMəbləğ < balans) {
            //Balansınız yetərlidir
            balans = balans - ödəniləcəkMəbləğ;
            alert("Yanacağ almağ üçün uyğundur" + yeniSətir
                + "Qalan Balans : " + balans + " AZN " + yeniSətir +
                "Xərclənən Məbləğ : " + ödəniləcəkMəbləğ + " AZN ");
        }
        else {
            //Balansınız yetərli deyil
            alert("Balansınız yetərli deyil" + yeniSətir
                + "Ödəniləcək Məbləğ : " + ödəniləcəkMəbləğ + " AZN " + yeniSətir
                + "Balans : " + balans + " AZN " + yeniSətir
                + "Çatmayan Məbləğ : " + (ödəniləcəkMəbləğ - balans) + " AZN ");
        }

    }
    else if (yanacağNövü == "2") {

        //DİZEL

        let ödəniləcəkMəbləğ = dizel * yanacağLitri;

        if (ödəniləcəkMəbləğ < balans) {
            //Balansınız yetərlidir
            balans = balans - ödəniləcəkMəbləğ;
            alert("Yanacağ almağ üçün uyğundur" + yeniSətir
                + "Qalan Balans : " + balans + " AZN " + yeniSətir +
                "Xərclənən Məbləğ : " + ödəniləcəkMəbləğ + " AZN ");
        }
        else {
            //Balansınız yetərli deyil
            alert("Balansınız yetərli deyil" + yeniSətir
                + "Ödəniləcək Məbləğ : " + ödəniləcəkMəbləğ + " AZN " + yeniSətir
                + "Balans : " + balans + " AZN " + yeniSətir
                + "Çatmayan Məbləğ : " + (ödəniləcəkMəbləğ - balans) + " AZN ");
        }
    }
    else if (yanacağNövü == "3") {

        //QAZ

        let ödəniləcəkMəbləğ = qaz * yanacağLitri;

        if (ödəniləcəkMəbləğ < balans) {
            //Balansınız yetərlidir
            balans = balans - ödəniləcəkMəbləğ;
            alert("Yanacağ almağ üçün uyğundur" + yeniSətir
                + "Qalan Balans : " + balans + " AZN " + yeniSətir +
                "Xərclənən Məbləğ : " + ödəniləcəkMəbləğ + " AZN ");
        }
        else {
            //Balansınız yetərli deyil
            alert("Balansınız yetərli deyil" + yeniSətir
                + "Ödəniləcək Məbləğ : " + ödəniləcəkMəbləğ + " AZN " + yeniSətir
                + "Balans : " + balans + " AZN " + yeniSətir
                + "Çatmayan Məbləğ : " + (ödəniləcəkMəbləğ - balans) + " AZN ");
        }
    }
}
else {
    alert("Zəhmət olmasa düzgüb bir yanacağ növü seçin!");
}