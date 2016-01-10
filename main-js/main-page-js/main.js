window.onhashchange = fnHasChange;
function fnDoLoad() {
    alert('page loaded');
    fnMenuLoad();
    fnHasChange();
 }
function fnHasChange(oEv) {
    var sNewToken = location.hash
    switch (sNewToken) {
        case '#Human-Face':
           fnGetHumanFaceFromServer();
        break;
        case '#Home-page':
           fnGetHumanPageFromServer();
        break;
        case '#Blurred-Text':
            fnGetBlurredTextFromServer();
        break;
        case '#Hover-Image':
            fnGetHoveredImageFromServer();
        break;
        case '#Hover-Box':
            fnGetHoverBoxFromServer();
        break;
        case '#Border-Image':
            fnGetBorderImageFromServer();
        break;
        case '#Button':
            fnGetButtonFromServer();
        break;
        case '#first-last-para':
            fnGetFirstLastFromServer();
        break;
        case '#first-line&footer':
            fnGetFirstLineFromServer();
        break;
        case '#Column-Format':
            fnGetColFormatFromServer();
        break;
        case '#List':
            fnGetListFromServer();
        break;
        case '#3-boxes':
            fnGet3BoxesFromServer();
        break;
        case '#Ribbon':
            fnGetRibbonFromServer();
        break;
        case '#Empty':
            fnGetemptyFromServer();
        break;
        case '#Image-Circle':
            fnGetImageCircleFromServer();
        break;
        case '#Login-PopUp':
            fnGetPopUpFromServer();
        break;
        default:
        break;
    }
}
function fnSuccess() {
    alert("you have logged in successfully");
}