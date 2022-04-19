const TVA = 21;
let price = parseFloat(prompt("Veuillez indiquer le prix de votre article :"));
let qty = parsInt(prompt("Veuillez indiquer la quantité : "));
let prix_htva = price * qty;
let taux_tva = prix_tva * TVA /100;
let prixTotal = prix_htva + taux_tva;

let price_total = (price*qty)*(1+(TVA/100));
alert(`Vos ${qty})