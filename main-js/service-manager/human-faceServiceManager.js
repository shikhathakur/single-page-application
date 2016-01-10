function fnShowHumanFacePage() {
    location.hash = "Human-Face";
}
function fnGetHumanFaceFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/face/view/face.html');
    oXhr.onreadystatechange = function(oEv) {
            if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                 document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
fnShowHumanFacePage();  };
oXhr.send();
}