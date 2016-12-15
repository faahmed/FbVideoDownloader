
var mediaList = document.createElement("ul");
mediaList.id = 'mediaList';
//document.body.innerHTML = "Discovered content (audio/video) will appear here as you scroll through your newsfeed."
document.body.appendChild(mediaList);

var mediaHash = {};

var addHash = function(url){
	mediaHash.url = true;
};

var checkHash = function(url){
	return mediaHash[url] === true;
};

console.log('the extension works');

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
	var mediaUrl = cutoffByteRange(details.url);
	if (!(mediaUrl.indexOf('video', 8) === 8)) return;
	if (checkHash(mediaUrl)) return;
	else addNewResource(mediaUrl);
	console.log(mediaUrl);
  },
        {urls: ["https://*/*"]});

var addNewResource = function (url) {
	var listItem = document.createElement("li");
	var link = document.createElement("a");
	link.setAttribute('href', url);
	link.setAttribute('target', '_blank');
	link.innerHTML = 'Discovered new audio/video';
	listItem.appendChild(link);
	mediaList.appendChild(listItem);
};

var cutoffByteRange = function(url) {
	var newUrl;
	ampIndex = url.lastIndexOf('&');
	newUrl = url.substring(0, ampIndex);
	ampIndex = newUrl.lastIndexOf('&');
	newUrl = newUrl.substring(0, ampIndex);
	return newUrl;
};

