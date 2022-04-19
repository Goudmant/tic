/**********************************************
** affiche la grille dans la page
********************************************* */
function afficher() {
   var grille = new Grille();
}

/**********************************************
** objet Grille
********************************************* */
function Grille(){

   this.lignes = [];
   for (var i=0; i<7; i++) this.lignes[i] = new Ligne(this, i);
   this.afficher();
}

Grille.prototype.afficher = function() {

   var div = document.getElementById("grille");
   if (div==null) return;
   while (div.firstChild) div.removeChild(div.firstChild);
   this.table = div.appendChild(document.createElement("table"));
   for (var i=0; i<7; i++) this.lignes[i].afficher();
};

Grille.prototype.verifier = function(){

   var n = 0;
   for (var i=0; i<this.lignes.length; i++) 
       {
       for (var j=0; j<this.lignes[i].cases.length; j++) 
           {
           if (this.lignes[i].cases[j].coche) n++;
           }
       }
   return n>=6; 
};

Grille.prototype.effacerResultat = function() {

   var div = document.getElementById("message");
   if (div==null) return;
   while (div.firstChild) div.removeChild(div.firstChild);
};

Grille.prototype.afficherResultat = function() {

   var div = document.getElementById("message");
   if (div==null) return;
   this.effacerResultat();

   var tmp = "";
   for (var i=0; i<this.lignes.length; i++) 
       {
       for (var j=0; j<this.lignes[i].cases.length; j++) 
           {
           if (this.lignes[i].cases[j].coche) tmp+=this.lignes[i].cases[j].numero+" ";
           }
       }

   div.appendChild(document.createTextNode("Votre grille: "+tmp));
};

/************************************************* 
 * objets Ligne
********************************************* */
function Ligne(grille, numero){

   this.grille = grille;
   this.numero = numero;
   this.cases = [];
   for (var i=0; i<7; i++) this.cases[i] = new Case(this, this.numero*7 + i);
}

Ligne.prototype.afficher = function() {

   this.tr = this.grille.table.appendChild(document.createElement("tr"));
   for (var i=0; i<7; i++) this.cases[i].afficher();
};

/**********************************************
** objets Case
********************************************* */
function Case(ligne, numero){

   this.ligne = ligne;
   this.numero = numero;
   this.coche = false; 
}

Case.prototype.afficher = function() {

   this.td = this.ligne.tr.appendChild(document.createElement("td"));
   this.td.setAttribute("style","width:32px;height:32px;border:1px solid red;font-size:20px;color:#dddddd;font-weight:bold;font-family:verdana;text-align:center;");
   this.td.appendChild(document.createTextNode(this.numero));
   this.td.onclick = function(c) { return function() { c.cocher(); } }(this); 
};

Case.prototype.cocher = function () {
    
   if (!this.coche && this.ligne.grille.verifier()) return;
   this.coche = !this.coche;
   this.td.style.color = (this.coche)?"#000000":"#dddddd";
   if (this.ligne.grille.verifier()) this.ligne.grille.afficherResultat();
   else this.ligne.grille.effacerResultat();
};
