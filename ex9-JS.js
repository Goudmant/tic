function afficher(id1, id2) {

   var div = document.getElementById(id1);
   var table = div.appendChild(document.createElement("table"));
   var tr = table.appendChild(document.createElement("tr"));
   for (var i=0; i<16; i++)
       {
       var td = tr.appendChild(document.createElement("td"));
       var c = (15 - i)*16;
       var color = "rgb("+c+","+c+",255)";
       td.setAttribute("style", "width:16px; height:16px; background-color:"+color+";");

       //sans fermeture, onclick sous la forme d'une chaîne de caractères
       //
       // td.setAttribute("onclick", "afficherCouleurs('"+id2+"',"+(i*16)+")");

       //sans fermeture, sauver les données sous la forme de propriétés de l'élément <td>
       //
       // td.idDiv   = id2;
       // td.couleur = i*16;
       // td.onclick = function() { afficherCouleurs(this.idDiv, this.couleur); };

       //avec fermeture, en utilisant une variable locale à la boucle for
       //
       // let couleur = i*16;
       // td.onclick = function() { afficherCouleurs(id2, couleur); };

       //avec fermeture
       td.onclick = function(bleu) { return function() { afficherCouleurs(id2, bleu) }; }(i*16);
       }  
   afficherCouleurs(id2, 0); 
}

function effacerCouleurs(id)
   {
   var div = document.getElementById(id);
   while (div.firstChild) div.removeChild(div.firstChild);
   };

function afficherCouleurs(id, bleu)
   {
   effacerCouleurs(id);

   var div = document.getElementById(id);
   var table = div.appendChild(document.createElement("table"));
   for (var i=0; i<16; i++)
       {
       var tr = table.appendChild(document.createElement("tr"));
       for (var j=0; j<16; j++)
           {
           var td = tr.appendChild(document.createElement("td"));
           var color = "rgb("+(i*16)+","+(j*16)+","+bleu+")";
           td.setAttribute("style", "width:16px; height:16px; background-color:"+color+";");
           }
       }
   };
   