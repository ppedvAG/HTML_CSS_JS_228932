
const password = document.querySelector("#password");

password.addEventListener("focus" , function(ev) {
    if(password.validity.valueMissing) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        password.setCustomValidity("Das Passwort darf nicht leer sein.");
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        password.reportValidity();
    }else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        password.setCustomValidity("");
    }
})

document.querySelector("form").addEventListener("submit", function(ev) {
    ev.preventDefault();
// Auf die Form angewendet verhindert event.preventDefault() das Neuladen der Seite bei senden der Form
})

/*
    Mögliche Valdity Props
    patternMismatch - Inhalt stimmt nicht mit pattern überein
    tooLong - Inhalt ist zu lang
    tooShort - Inhalt ist zu kurz
    rangeOverflow - Wert höher ist als im max-Attribut bestimmt
    rangeUnderflow - Wert niedriger ist als im min-Attribut bestimmt
    typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
    valid - Gibt true zurück, wenn alles gültig ist
    valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist
*/

password.addEventListener("keyup", function (ev) {
    if (password.validity.tooShort) {
        password.setCustomValidity(`Das Passwort muss mindestens 8 Zeichen lang sein. Gerade hat es ${passwordInp.value.length} Zeichen.`);
        password.reportValidity();
    } else {
        password.setCustomValidity("");
    }
})

const confirmation = document.querySelector("#confirmation");
const submitBtn = document.querySelector("#pwSubmit");


function checkPassword() {
    if (password.value === confirmation.value) {
        confirmation.setCustomValidity("");
        submitBtn.removeAttribute("disabled");
    }
    else {
        confirmation.setCustomValidity("Die Passwörter stimmen nicht überein");
        confirmation.reportValidity();
        submitBtn.setAttribute("disabled", "");

    }
}
confirmation.addEventListener("keyup", checkPassword);
password.addEventListener("change", checkPassword);