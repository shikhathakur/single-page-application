function fnShowHoverImage() {
    location.hash = "Hover-Image";
}
function fnGetHoveredImageFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/hover/view/hover.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowHoverImage();  };
oXhr.send();
}