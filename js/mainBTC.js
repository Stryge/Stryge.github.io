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
	var height = lastBlock.height
	var concatHeight = height;

	for (var i = 1; i < 3; i++){
		if (i != 3)
			concatHeight += ";";
		concatHeight += (height - i);
	}

	console.log(concatHeight);
console.log($.get('https://api.blockcypher.com/v1/btc/main/blocks/' + concatHeight).then(function(blocks) {
		console.log(blocks);
		blocks.forEeach(function(block) {
		var tr = document.createElement("tr");
		var height = document.createElement("th");
		var time = document.createElement("th");
		var transactions = document.createElement("th");
		var totalValue = document.createElement("th");
		var relayedBy = document.createElement("th");

		height.textContent = block.height;
		time.textContent = block.time;
		transactions.textContent = block.transactions;
		totalValue.textContent = block.total;
		relayedBy.textContent = block.relayed_by;
		tr.appendChild(height); 
		tr.appendChild(time); 
		tr.appendChild(transactions); 
		tr.appendChild(totalValue); 
		tr.appendChild(relayedBy);
		});
		var table = document.getElementsByClassName("table");
		console.log(table[0]);

		console.log(tr);
	}))
});

/*penser à augmenter la valeur des boucles for i < 2 à i < 5 */
