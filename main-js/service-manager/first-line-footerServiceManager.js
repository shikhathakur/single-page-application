function fnShowFirstLine() {
    location.hash = "first-line&footer";
}
function fnGetFirstLineFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/first-line&footer/view/first-line&footer.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowFirstLine();  };
oXhr.send();
}