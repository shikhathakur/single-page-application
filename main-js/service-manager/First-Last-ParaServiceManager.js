function fnShowFirstLastPara() {
    location.hash = "first-last-para";
}
function fnGetFirstLastFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/first-last-para/view/first-last-para.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowFirstLastPara();  };
oXhr.send();
}