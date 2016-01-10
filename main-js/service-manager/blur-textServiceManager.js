function fnShowBlurredText() {
    location.hash = "Blurred-Text";
}
function fnGetBlurredTextFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'Modules/Blur-text/View/blur-text.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowBlurredText();  };
oXhr.send();
}