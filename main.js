class buecher{

    constructor(Seiten, Autor, Art, Exemplare) {
        this.Seitenanzahl = Seiten
        this.Autor = Autor
        this.Bund = Art
        this.Anzahl = Exemplare
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


let lager = []

function init() {
    let FiftyShadesOfGrey = new buecher("953", "E. L. James", "gebunden", "28")
    let Outlander = new buecher("758", "Diana Gabaldon", "digital", "78")
    let HarryPotter = new buecher("1456", "J. K. Rowling", "gebunden", "36")
    let GregsTagebuch = new buecher("245", "Jeff Kinney", "taschenbuch","753" )

    lager.push(FiftyShadesOfGrey, Outlander, HarryPotter, GregsTagebuch)
}

function ausDemSortiment(autor) {
    for (let i = 0; i < lager.length; i++) {
        if (lager[i].Autor === autor){
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
}





