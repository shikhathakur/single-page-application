function fnShowList() {
    location.hash = "List";
}
function fnGetListFromServer(){
    var oXhr = new XMLHttpRequest();
    oXhr.open('GET', 'modules/list/view/list.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('animateID').innerHTML = oEv.currentTarget.responseText;
            }
        }
    fnShowList();  };
oXhr.send();
}