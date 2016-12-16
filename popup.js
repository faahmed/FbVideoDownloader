function clickHandler() {
    var mediaList = document.getElementById('mediaList');
    mediaList.outerHTML = chrome.extension.getBackgroundPage().document.getElementById('mediaList').outerHTML;
}

document.addEventListener('DOMContentLoaded', function () {
document.querySelector('button').addEventListener('click', clickHandler);
});
