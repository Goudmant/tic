function blabla() {

    var taille=180;
    var poids=75;
    
    taille = taille/100;
    var bmi = poids / (taille * taille);
    document.write("votre indice de masse corporelle est de "+bmi); 

}
function calculerBMI()
{
var taille=document.getElementById("taille").value;
var poids=document.getElementById("poids").value;


taille = taille/100;
var bmi = poids / (taille * taille);

var div = document.getElementById("bmi");
while (div.firstChild!=null) div.removeChild(div.firstChild);
div.appendChild(document.createTextNode("Votre indice de masse corporelle est de "+bmi)); 
}