function start() {
    var div = document.getElementById("fullDate");
    if (div==null) return;
    Date =new Date();
    div.innerHTML = "<p>Nous sommes le  "+ Date.getDate() + "/" + (Date.getMonth()+1) + "/" + Date.getFullYear()+"</p>";
}