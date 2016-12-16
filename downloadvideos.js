
var mediaList = document.createElement("ul");
mediaList.id = 'mediaList';
var listSize = 0;
document.body.appendChild(mediaList);
var mediaHash = {};

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
	var mediaUrl = cutoffByteRange(details.url);

	if (isFull(mediaList)) {
		var oldestLink = mediaList.getElementsByTagName('li')[0];
  	    mediaList.removeChild(oldestLink);
  	    removeHash(oldestLink.getElementsByTagName('a')[0].getAttribute('href'));
  	    listSize--;
  	}

	if (!(mediaUrl.indexOf('video', 8) === 8)) return;
	if (checkHash(mediaUrl)) return;
	else addNewResource(mediaUrl);
  },
        {urls: ["https://*/*"]});

var addNewResource = function (url) {
	addHash(url);
	var listItem = document.createElement("li");
	var link = document.createElement("a");
	link.setAttribute('href', url);
	link.setAttribute('target', '_blank');
	link.innerHTML = 'Discovered new audio/video';
	listItem.appendChild(link);
	mediaList.appendChild(listItem);
	listSize++;
};

var cutoffByteRange = function(url) {
	var newUrl;
	ampIndex = url.lastIndexOf('&');
	newUrl = url.substring(0, ampIndex);
	ampIndex = newUrl.lastIndexOf('&');
	newUrl = newUrl.substring(0, ampIndex);
	return newUrl;
};

var isFull = function(list) {
	return listSize > 50;
};

var addHash = function(url){
	mediaHash.url = true;
};

var removeHash = function(url){
    mediaHash.url = false;
};

var checkHash = function(url){
	return mediaHash[url] === true;
};
