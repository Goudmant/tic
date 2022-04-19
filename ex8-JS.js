function afficherCouleurs(){

    var div = document.getElementById("colorPick");
    var table = div.appendChild(document.createElement("table"));
    for (var i=0; i<16; i++){

        var tr = table.appendChild(document.createElement("tr"));
        for (var j=0; j<16; j++) {

            var td = tr.appendChild(document.createElement("td"));
            td.setAttribute("style", "width:16px; height:16px; background-color:rgb("+(i*16)+","+(j*16)+",0);");
        }
    }
};
