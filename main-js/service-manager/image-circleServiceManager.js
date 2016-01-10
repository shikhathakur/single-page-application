function fnShowImageCircle() {
    location.hash = "Image-Circle";
}
function fnGetImageCircleFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/image-circle/view/image-circle.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowImageCircle()  ;  };
oXhr.send();
}