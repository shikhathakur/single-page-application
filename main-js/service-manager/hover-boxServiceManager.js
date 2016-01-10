function fnShowHoverBox() {
    location.hash = "Hover-Box";
}
function fnGetHoverBoxFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/hover-Box/view/hover-Box.html');
    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowHoverBox();  };
oXhr.send();
}