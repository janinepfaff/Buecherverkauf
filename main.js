class buecher{

    constructor(Seiten, Autor, Art, Exemplare, Preis, Titel) {
        this.Titel = Titel
        this.Seitenanzahl = Seiten
        this.Autor = Autor
        this.Bund = Art
        this.Anzahl = Exemplare
        this.Originalpreis = Preis
    }

    verfuegbar() {
        if (this.Anzahl >= 1){
            console.log("Du kannst dieses Buch kaufen")
        }
    }

    verkauft(){
        this.Anzahl = this.Anzahl - 1
    }
}

let barkasse = 500
let lager = []

function init() {
    let FiftyShadesOfGrey = new buecher("953", "E. L. James", "gebunden", "28", "15,00", "FiftyShadesOfGrey")
    let Outlander = new buecher("758", "Diana Gabaldon", "digital", "78", "18,00", "Outlander")
    let HarryPotter = new buecher("1456", "J. K. Rowling", "gebunden", "36", "17,00", "HarryPotter")
    let GregsTagebuch = new buecher("245", "Jeff Kinney", "taschenbuch","753", "14,99", "GregsTagebuch" )

    lager.push(FiftyShadesOfGrey, Outlander, HarryPotter, GregsTagebuch)
}

function ausDemSortiment(titel) {
    for (let i = 0; i < lager.length; i++) {
        if (lager[i].Titel === titel){
            lager.splice(i,1)
        }
    }
}

function lagerListe() {
    for (let i = 0; i < lager.length; i++) {
        console.log(lager[i])
    }
}

function lagerListeArt() {
    for (let i = 0; i < lager.length; i++) {
        console.log(lager[i].Bund)
    }
}

function autorSuchen(autor) {
    for (let i = 0; i < lager.length; i++) {
        if (lager[i].Autor === autor){
            console.log("Es gibt noch" +lager[i].Anzahl+ " Exemplare")
        }
    }

function nachbestellen(titel,anzahl) {
    for (let i = 0; i < lager.length; i++) {
        if (lager[i].Titel === titel){
            lager[i].Anzahl = lager[i].Anzahl + anzahl
        }
    }
}

function verkaufen(titel,anzahl) {
    for (let i = 0; i < lager.length; i++) {
        if (lager[i].Titel === titel){
            lager[i].Anzahl = lager[i].Anzahl - anzahl
        }
        barkasse = barkasse + lager[i].Originalpreis
    }

}

function reklamation(titel,anzahl){
    for (let i = 0; i < lager.length; i++) {
        if (lager[i].Titel === titel){
            lager[i].Anzahl = lager[i].Anzahl + anzahl
        }
        barkasse = barkasse - lager[i].Originalpreis
    }
}








}







