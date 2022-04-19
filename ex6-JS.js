function afficheHeure() {

    var span = document.getElementById("horloge");
    if (span==null) return;
    var h = new Date();
    span.appendChild(document.createTextNode(h.getHours()));
    
    var s = span.appendChild(document.createElement("span"));
    s.setAttribute("style", "color:#aaaaaa;");
    s.appendChild(document.createTextNode(":"));
    span.appendChild(document.createTextNode(h.getHours()));

    var s = span.appendChild(document.createElement("span"));
    s.setAttribute("style", "color:#aaaaaa;");
    s.appendChild(document.createTextNode(":"));

    span.appendChild(document.createTextNode(h.getSeconds()));


}

function changeHeure() {
            
    var span = document.getElementById("horloge");
    if (span==null) return; 
    while (span.firstChild) span.removeChild(span.firstChild); 
    afficheHeure();
    setTimeout(changeHeure, 1000);

}
// FAIRE "BLINK" les ":" dans l'horloge // 
function flash() {

    var f = document.createElementById("flash");
    if (f==null) return;
    var d = new Element();
    d.appendChild(document.createTextNode(":"));

    var f = span.appendChild(document.createElement("flash"));
    f.setAttribute("style", "color:#aaaaaa;");
    f.appendChild(document.createTextNode(":"));

    var f = document.getElementById("flash");
    if (span==null) return; 
    while (span.firstChild) span.removeChild(span.firstChild); 
    afficheHeure();
    setTimeout(changeHeure, 1000);

}