function clickHandler() {
         var mediaList = document.getElementById('mediaList');
         mediaList.outerHTML = chrome.extension.getBackgroundPage().document.getElementById('mediaList').outerHTML;
        // document.replaceChild(chrome.extension.getBackgroundPage().document.getElementById('mediaList'), mediaList);
        // document.open();
        // document.write(chrome.extension.getBackgroundPage().document.documentElement.innerHTML);
        // document.close();
}

  document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});
