function getXMLHttpRequest() {
	var xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest();
		}
	} else {
		alert ("XMLHttpRequest not supported");
	}
	return xhr;
}

var xhr = getXMLHttpRequest();
xhr.open("GET", "blockcypher.com", true);
xhr.send(null);

$.get('https://api.blockcypher.com/v1/btc/main').then(function(lastBlock) {
	var blockArray = new Array(5);

	blockArray[0] = lastBlock;
	for (var i = 1; i < 5; i++) {
			blockArray[i] = $.get('https://api.blockcypher.com/v1/btc/main/blocks/' + (lastBlock.height - i) + '?txstart=1&limit=1');
	}
	for (var i = 0; i < 5; i++) {
		var json = JSON.parse(blockArray[i]);
		console.log(json);
	}
});
