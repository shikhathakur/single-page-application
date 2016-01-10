function fnmobMenuLoad() {
    var oXhr= new XMLHttpRequest();
    oXhr.open('GET', 'modules/menu/view/menu.html');
    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('mob-main').innerHTML = oEv.currentTarget.responseText;
            }
        }
 };
oXhr.send();
};