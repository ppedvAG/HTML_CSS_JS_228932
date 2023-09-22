// Moderne Variante des Konstruktors:
// Ist syntactic Sugar, dh es ist eine rein syntaktische Verbesserung mit keiner Veränderung an der Funktionalität
// Mit dem Keyword class:

class PersonAlt {
    xyz = 124;
    constructor(nameProp, age, employed, cityOfOrigin) {
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
    }

    introduceSelf() {
        console.log(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`);
    }
}

const person = new PersonAlt("Christian Lindner", 49, true, "Cologne");

person.introduceSelf();


// Übung:
// erstelle eine Klasse Auto
// Sie soll folgende Props besitzen:
// marke
// modell
// motorStatus (boolean)
// derzeitigeGeschw
// maximalGeschw

// derzeitige Geschwindigkeit soll bei der erstellung immer 0 sein
// motorStatus soll bei Erstellung immer false sein

// Methoden:
// anAbschalten
// Die Methode soll nur den motorStatus ändern
// Beschleunige(neueGeschw)
// Diese Methode soll die derzeitige Geschwindigkeit auf neueGeschw setzen, au0ßer wenn diese die maximale Geschwindigkeit
// überschreiten würde

/*
Treibstoffverbrauch berücksichtigen: Fügen Sie eine Eigenschaft treibstoffVerbrauch hinzu, die den Verbrauch 
des Autos in Litern pro 100 Kilometer angibt.
Implementieren Sie eine Methode, um den benötigten Treibstoff für eine bestimmte Strecke zu berechnen.

Verriegelungssystem: Implementieren Sie ein Verriegelungssystem für das Auto. Das Auto kann entweder verriegelt 
oder entriegelt sein. Fügen Sie Methoden hinzu, um das Auto zu verriegeln und zu entriegeln, und stellen Sie sicher,
dass bestimmte Aktionen wie das Starten des Motors nur möglich sind, wenn das Auto entriegelt ist.

Tachoanzeige: Implementieren Sie eine Methode zeigeTacho, die die derzeitige Geschwindigkeit des Autos 
auf dem Tacho anzeigt. Die Tachoanzeige kann in Form einer Konsolenausgabe oder einer anderen Benutzeroberfläche 
erfolgen.

*/