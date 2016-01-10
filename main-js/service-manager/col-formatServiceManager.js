function fnShowColFormat() {
    location.hash = "Column-Format";
}
function fnGetColFormatFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/format/view/format.html');
    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                 document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowColFormat();  };
oXhr.send();
}