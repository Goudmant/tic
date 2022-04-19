let tableau = [];
let name = [];
do{
    let input = parseString(prompt("Veuillez entrer des Noms : "));
    while (isNaN((input)))input = parseString(prompt('Erreur ! Ceci n\'est pas une chaine de caracteres : '));
    message = "Veuillez indiquez un autre Nom : "

} while (count < 2);

let input = prompt('Veuillez entrer un nouveau Nom ou arreter en écrivant STOP : ');
while (input != "STOP"){
    input = parseString(input);
    while (isNaN(input)) input = parseString(prompt('Erreur ! Veuillez entrer un nouveau Nom'));
    input = prompt('Veuillez indiquer un nouveau Nom ou arreter en ecrivant STOP');

}



alert(`Les Noms sont ${tableau}.`);
alert(`Le Nom le plus long es ${tableau.sort(function(a, b) {
    return b.length - a.length}`);}
alert(`Le Nom le plus petit es ${tableau.sort(function(a, b) {
    return b.length - a.length}`);}
