function fnShowRibbon() {
    location.hash = "Ribbon";
}
function fnGetRibbonFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/ribbon/view/ribbon.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowRibbon() ;  };
oXhr.send();
}