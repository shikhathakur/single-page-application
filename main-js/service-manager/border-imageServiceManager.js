function fnShowBorderImage() {
    location.hash = "Border-Image";
}
function fnGetBorderImageFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'Modules/Border/View/border.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowBorderImage();  };
oXhr.send();
}