function fnShow3Boxes() {
    location.hash = "3-boxes";
}
function fnGet3BoxesFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/3-boxes/views/3boxes.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } 
            else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShow3Boxes() ;  };
oXhr.send();
}