function fnShowEmpty() {
    location.hash = "Empty";
}
function fnGetemptyFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/empty/view/empty.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
               document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowEmpty();  };
oXhr.send();
}