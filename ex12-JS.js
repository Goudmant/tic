
let somme = 0;
let count = 0;
do {
    let input = parseFloat(prompt('"Veuillez entrer des entier pour avoir une moyenne : "'));
    while (isNaN((input)))input = parseFloat(prompt('Erreur ! Veuillez entrer un nouveau nombre : '));
    somme += input;
    count ++;
    message = "Veuillez indiquez un second nombre : "

} while (count < 2);

let input = prompt('Veuillez entrer un nouveau nombre ou arreter en écrivant STOP : ');
while (input != "STOP"){
    input = parseFloat(input);
    while (isNaN(input)) input = parseFloat(prompt('Erreur ! Veuillez entrer un nouveau nombre'));
    somme += input;
    count ++;
    input = prompt('Veuillez indiquer un nouveau nombre ou arreter en ecrivant STOP');

}
alert(`La moyenne est de ${somme / count}.`);


