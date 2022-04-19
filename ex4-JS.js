function start() {
    
    var div = document.getElementById("fullDate");
    if (div==null) return;
    Date =new Date();
    var p = div.appendChild(document.createTextNode("Nous sommes le  "+ Date.getDate() + "/" + (Date.getMonth()+1) + "/" + Date.getFullYear()));
}